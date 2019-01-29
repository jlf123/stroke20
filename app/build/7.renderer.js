(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/crc-32/crc32.js":
/*!**************************************!*\
  !*** ./node_modules/crc-32/crc32.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* crc32.js (C) 2014-2015 SheetJS -- http://sheetjs.com */\n/* vim: set ts=2: */\nvar CRC32;\n(function (factory) {\n\tif(typeof DO_NOT_EXPORT_CRC === 'undefined') {\n\t\tif(true) {\n\t\t\tfactory(exports);\n\t\t} else {}\n\t} else {\n\t\tfactory(CRC32 = {});\n\t}\n}(function(CRC32) {\nCRC32.version = '0.3.0';\n/* see perf/crc32table.js */\nfunction signed_crc_table() {\n\tvar c = 0, table = new Array(256);\n\n\tfor(var n =0; n != 256; ++n){\n\t\tc = n;\n\t\tc = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));\n\t\tc = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));\n\t\tc = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));\n\t\tc = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));\n\t\tc = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));\n\t\tc = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));\n\t\tc = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));\n\t\tc = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));\n\t\ttable[n] = c;\n\t}\n\n\treturn typeof Int32Array !== 'undefined' ? new Int32Array(table) : table;\n}\n\nvar table = signed_crc_table();\n/* charCodeAt is the best approach for binary strings */\nvar use_buffer = typeof Buffer !== 'undefined';\nfunction crc32_bstr(bstr) {\n\tif(bstr.length > 32768) if(use_buffer) return crc32_buf_8(new Buffer(bstr));\n\tvar crc = -1, L = bstr.length - 1;\n\tfor(var i = 0; i < L;) {\n\t\tcrc =  table[(crc ^ bstr.charCodeAt(i++)) & 0xFF] ^ (crc >>> 8);\n\t\tcrc =  table[(crc ^ bstr.charCodeAt(i++)) & 0xFF] ^ (crc >>> 8);\n\t}\n\tif(i === L) crc = (crc >>> 8) ^ table[(crc ^ bstr.charCodeAt(i)) & 0xFF];\n\treturn crc ^ -1;\n}\n\nfunction crc32_buf(buf) {\n\tif(buf.length > 10000) return crc32_buf_8(buf);\n\tfor(var crc = -1, i = 0, L=buf.length-3; i < L;) {\n\t\tcrc = (crc >>> 8) ^ table[(crc^buf[i++])&0xFF];\n\t\tcrc = (crc >>> 8) ^ table[(crc^buf[i++])&0xFF];\n\t\tcrc = (crc >>> 8) ^ table[(crc^buf[i++])&0xFF];\n\t\tcrc = (crc >>> 8) ^ table[(crc^buf[i++])&0xFF];\n\t}\n\twhile(i < L+3) crc = (crc >>> 8) ^ table[(crc^buf[i++])&0xFF];\n\treturn crc ^ -1;\n}\n\nfunction crc32_buf_8(buf) {\n\tfor(var crc = -1, i = 0, L=buf.length-7; i < L;) {\n\t\tcrc = (crc >>> 8) ^ table[(crc^buf[i++])&0xFF];\n\t\tcrc = (crc >>> 8) ^ table[(crc^buf[i++])&0xFF];\n\t\tcrc = (crc >>> 8) ^ table[(crc^buf[i++])&0xFF];\n\t\tcrc = (crc >>> 8) ^ table[(crc^buf[i++])&0xFF];\n\t\tcrc = (crc >>> 8) ^ table[(crc^buf[i++])&0xFF];\n\t\tcrc = (crc >>> 8) ^ table[(crc^buf[i++])&0xFF];\n\t\tcrc = (crc >>> 8) ^ table[(crc^buf[i++])&0xFF];\n\t\tcrc = (crc >>> 8) ^ table[(crc^buf[i++])&0xFF];\n\t}\n\twhile(i < L+7) crc = (crc >>> 8) ^ table[(crc^buf[i++])&0xFF];\n\treturn crc ^ -1;\n}\n\n/* much much faster to intertwine utf8 and crc */\nfunction crc32_str(str) {\n\tfor(var crc = -1, i = 0, L=str.length, c, d; i < L;) {\n\t\tc = str.charCodeAt(i++);\n\t\tif(c < 0x80) {\n\t\t\tcrc = (crc >>> 8) ^ table[(crc ^ c) & 0xFF];\n\t\t} else if(c < 0x800) {\n\t\t\tcrc = (crc >>> 8) ^ table[(crc ^ (192|((c>>6)&31))) & 0xFF];\n\t\t\tcrc = (crc >>> 8) ^ table[(crc ^ (128|(c&63))) & 0xFF];\n\t\t} else if(c >= 0xD800 && c < 0xE000) {\n\t\t\tc = (c&1023)+64; d = str.charCodeAt(i++) & 1023;\n\t\t\tcrc = (crc >>> 8) ^ table[(crc ^ (240|((c>>8)&7))) & 0xFF];\n\t\t\tcrc = (crc >>> 8) ^ table[(crc ^ (128|((c>>2)&63))) & 0xFF];\n\t\t\tcrc = (crc >>> 8) ^ table[(crc ^ (128|((d>>6)&15)|(c&3))) & 0xFF];\n\t\t\tcrc = (crc >>> 8) ^ table[(crc ^ (128|(d&63))) & 0xFF];\n\t\t} else {\n\t\t\tcrc = (crc >>> 8) ^ table[(crc ^ (224|((c>>12)&15))) & 0xFF];\n\t\t\tcrc = (crc >>> 8) ^ table[(crc ^ (128|((c>>6)&63))) & 0xFF];\n\t\t\tcrc = (crc >>> 8) ^ table[(crc ^ (128|(c&63))) & 0xFF];\n\t\t}\n\t}\n\treturn crc ^ -1;\n}\nCRC32.table = table;\nCRC32.bstr = crc32_bstr;\nCRC32.buf = crc32_buf;\nCRC32.str = crc32_str;\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3JjLTMyL2NyYzMyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NyYy0zMi9jcmMzMi5qcz83MDJkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGNyYzMyLmpzIChDKSAyMDE0LTIwMTUgU2hlZXRKUyAtLSBodHRwOi8vc2hlZXRqcy5jb20gKi9cbi8qIHZpbTogc2V0IHRzPTI6ICovXG52YXIgQ1JDMzI7XG4oZnVuY3Rpb24gKGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIERPX05PVF9FWFBPUlRfQ1JDID09PSAndW5kZWZpbmVkJykge1xuXHRcdGlmKCdvYmplY3QnID09PSB0eXBlb2YgZXhwb3J0cykge1xuXHRcdFx0ZmFjdG9yeShleHBvcnRzKTtcblx0XHR9IGVsc2UgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCkge1xuXHRcdFx0ZGVmaW5lKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dmFyIG1vZHVsZSA9IHt9O1xuXHRcdFx0XHRmYWN0b3J5KG1vZHVsZSk7XG5cdFx0XHRcdHJldHVybiBtb2R1bGU7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdCAgZmFjdG9yeShDUkMzMiA9IHt9KTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0ZmFjdG9yeShDUkMzMiA9IHt9KTtcblx0fVxufShmdW5jdGlvbihDUkMzMikge1xuQ1JDMzIudmVyc2lvbiA9ICcwLjMuMCc7XG4vKiBzZWUgcGVyZi9jcmMzMnRhYmxlLmpzICovXG5mdW5jdGlvbiBzaWduZWRfY3JjX3RhYmxlKCkge1xuXHR2YXIgYyA9IDAsIHRhYmxlID0gbmV3IEFycmF5KDI1Nik7XG5cblx0Zm9yKHZhciBuID0wOyBuICE9IDI1NjsgKytuKXtcblx0XHRjID0gbjtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHRjID0gKChjJjEpID8gKC0zMDY2NzQ5MTIgXiAoYyA+Pj4gMSkpIDogKGMgPj4+IDEpKTtcblx0XHR0YWJsZVtuXSA9IGM7XG5cdH1cblxuXHRyZXR1cm4gdHlwZW9mIEludDMyQXJyYXkgIT09ICd1bmRlZmluZWQnID8gbmV3IEludDMyQXJyYXkodGFibGUpIDogdGFibGU7XG59XG5cbnZhciB0YWJsZSA9IHNpZ25lZF9jcmNfdGFibGUoKTtcbi8qIGNoYXJDb2RlQXQgaXMgdGhlIGJlc3QgYXBwcm9hY2ggZm9yIGJpbmFyeSBzdHJpbmdzICovXG52YXIgdXNlX2J1ZmZlciA9IHR5cGVvZiBCdWZmZXIgIT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gY3JjMzJfYnN0cihic3RyKSB7XG5cdGlmKGJzdHIubGVuZ3RoID4gMzI3NjgpIGlmKHVzZV9idWZmZXIpIHJldHVybiBjcmMzMl9idWZfOChuZXcgQnVmZmVyKGJzdHIpKTtcblx0dmFyIGNyYyA9IC0xLCBMID0gYnN0ci5sZW5ndGggLSAxO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgTDspIHtcblx0XHRjcmMgPSAgdGFibGVbKGNyYyBeIGJzdHIuY2hhckNvZGVBdChpKyspKSAmIDB4RkZdIF4gKGNyYyA+Pj4gOCk7XG5cdFx0Y3JjID0gIHRhYmxlWyhjcmMgXiBic3RyLmNoYXJDb2RlQXQoaSsrKSkgJiAweEZGXSBeIChjcmMgPj4+IDgpO1xuXHR9XG5cdGlmKGkgPT09IEwpIGNyYyA9IChjcmMgPj4+IDgpIF4gdGFibGVbKGNyYyBeIGJzdHIuY2hhckNvZGVBdChpKSkgJiAweEZGXTtcblx0cmV0dXJuIGNyYyBeIC0xO1xufVxuXG5mdW5jdGlvbiBjcmMzMl9idWYoYnVmKSB7XG5cdGlmKGJ1Zi5sZW5ndGggPiAxMDAwMCkgcmV0dXJuIGNyYzMyX2J1Zl84KGJ1Zik7XG5cdGZvcih2YXIgY3JjID0gLTEsIGkgPSAwLCBMPWJ1Zi5sZW5ndGgtMzsgaSA8IEw7KSB7XG5cdFx0Y3JjID0gKGNyYyA+Pj4gOCkgXiB0YWJsZVsoY3JjXmJ1ZltpKytdKSYweEZGXTtcblx0XHRjcmMgPSAoY3JjID4+PiA4KSBeIHRhYmxlWyhjcmNeYnVmW2krK10pJjB4RkZdO1xuXHRcdGNyYyA9IChjcmMgPj4+IDgpIF4gdGFibGVbKGNyY15idWZbaSsrXSkmMHhGRl07XG5cdFx0Y3JjID0gKGNyYyA+Pj4gOCkgXiB0YWJsZVsoY3JjXmJ1ZltpKytdKSYweEZGXTtcblx0fVxuXHR3aGlsZShpIDwgTCszKSBjcmMgPSAoY3JjID4+PiA4KSBeIHRhYmxlWyhjcmNeYnVmW2krK10pJjB4RkZdO1xuXHRyZXR1cm4gY3JjIF4gLTE7XG59XG5cbmZ1bmN0aW9uIGNyYzMyX2J1Zl84KGJ1Zikge1xuXHRmb3IodmFyIGNyYyA9IC0xLCBpID0gMCwgTD1idWYubGVuZ3RoLTc7IGkgPCBMOykge1xuXHRcdGNyYyA9IChjcmMgPj4+IDgpIF4gdGFibGVbKGNyY15idWZbaSsrXSkmMHhGRl07XG5cdFx0Y3JjID0gKGNyYyA+Pj4gOCkgXiB0YWJsZVsoY3JjXmJ1ZltpKytdKSYweEZGXTtcblx0XHRjcmMgPSAoY3JjID4+PiA4KSBeIHRhYmxlWyhjcmNeYnVmW2krK10pJjB4RkZdO1xuXHRcdGNyYyA9IChjcmMgPj4+IDgpIF4gdGFibGVbKGNyY15idWZbaSsrXSkmMHhGRl07XG5cdFx0Y3JjID0gKGNyYyA+Pj4gOCkgXiB0YWJsZVsoY3JjXmJ1ZltpKytdKSYweEZGXTtcblx0XHRjcmMgPSAoY3JjID4+PiA4KSBeIHRhYmxlWyhjcmNeYnVmW2krK10pJjB4RkZdO1xuXHRcdGNyYyA9IChjcmMgPj4+IDgpIF4gdGFibGVbKGNyY15idWZbaSsrXSkmMHhGRl07XG5cdFx0Y3JjID0gKGNyYyA+Pj4gOCkgXiB0YWJsZVsoY3JjXmJ1ZltpKytdKSYweEZGXTtcblx0fVxuXHR3aGlsZShpIDwgTCs3KSBjcmMgPSAoY3JjID4+PiA4KSBeIHRhYmxlWyhjcmNeYnVmW2krK10pJjB4RkZdO1xuXHRyZXR1cm4gY3JjIF4gLTE7XG59XG5cbi8qIG11Y2ggbXVjaCBmYXN0ZXIgdG8gaW50ZXJ0d2luZSB1dGY4IGFuZCBjcmMgKi9cbmZ1bmN0aW9uIGNyYzMyX3N0cihzdHIpIHtcblx0Zm9yKHZhciBjcmMgPSAtMSwgaSA9IDAsIEw9c3RyLmxlbmd0aCwgYywgZDsgaSA8IEw7KSB7XG5cdFx0YyA9IHN0ci5jaGFyQ29kZUF0KGkrKyk7XG5cdFx0aWYoYyA8IDB4ODApIHtcblx0XHRcdGNyYyA9IChjcmMgPj4+IDgpIF4gdGFibGVbKGNyYyBeIGMpICYgMHhGRl07XG5cdFx0fSBlbHNlIGlmKGMgPCAweDgwMCkge1xuXHRcdFx0Y3JjID0gKGNyYyA+Pj4gOCkgXiB0YWJsZVsoY3JjIF4gKDE5MnwoKGM+PjYpJjMxKSkpICYgMHhGRl07XG5cdFx0XHRjcmMgPSAoY3JjID4+PiA4KSBeIHRhYmxlWyhjcmMgXiAoMTI4fChjJjYzKSkpICYgMHhGRl07XG5cdFx0fSBlbHNlIGlmKGMgPj0gMHhEODAwICYmIGMgPCAweEUwMDApIHtcblx0XHRcdGMgPSAoYyYxMDIzKSs2NDsgZCA9IHN0ci5jaGFyQ29kZUF0KGkrKykgJiAxMDIzO1xuXHRcdFx0Y3JjID0gKGNyYyA+Pj4gOCkgXiB0YWJsZVsoY3JjIF4gKDI0MHwoKGM+PjgpJjcpKSkgJiAweEZGXTtcblx0XHRcdGNyYyA9IChjcmMgPj4+IDgpIF4gdGFibGVbKGNyYyBeICgxMjh8KChjPj4yKSY2MykpKSAmIDB4RkZdO1xuXHRcdFx0Y3JjID0gKGNyYyA+Pj4gOCkgXiB0YWJsZVsoY3JjIF4gKDEyOHwoKGQ+PjYpJjE1KXwoYyYzKSkpICYgMHhGRl07XG5cdFx0XHRjcmMgPSAoY3JjID4+PiA4KSBeIHRhYmxlWyhjcmMgXiAoMTI4fChkJjYzKSkpICYgMHhGRl07XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNyYyA9IChjcmMgPj4+IDgpIF4gdGFibGVbKGNyYyBeICgyMjR8KChjPj4xMikmMTUpKSkgJiAweEZGXTtcblx0XHRcdGNyYyA9IChjcmMgPj4+IDgpIF4gdGFibGVbKGNyYyBeICgxMjh8KChjPj42KSY2MykpKSAmIDB4RkZdO1xuXHRcdFx0Y3JjID0gKGNyYyA+Pj4gOCkgXiB0YWJsZVsoY3JjIF4gKDEyOHwoYyY2MykpKSAmIDB4RkZdO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gY3JjIF4gLTE7XG59XG5DUkMzMi50YWJsZSA9IHRhYmxlO1xuQ1JDMzIuYnN0ciA9IGNyYzMyX2JzdHI7XG5DUkMzMi5idWYgPSBjcmMzMl9idWY7XG5DUkMzMi5zdHIgPSBjcmMzMl9zdHI7XG59KSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/crc-32/crc32.js\n");

/***/ }),

/***/ "./node_modules/png-chunks-extract/index.js":
/*!**************************************************!*\
  !*** ./node_modules/png-chunks-extract/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var crc32 = __webpack_require__(/*! crc-32 */ \"./node_modules/crc-32/crc32.js\")\n\nmodule.exports = extractChunks\n\n// Used for fast-ish conversion between uint8s and uint32s/int32s.\n// Also required in order to remain agnostic for both Node Buffers and\n// Uint8Arrays.\nvar uint8 = new Uint8Array(4)\nvar int32 = new Int32Array(uint8.buffer)\nvar uint32 = new Uint32Array(uint8.buffer)\n\nfunction extractChunks (data) {\n  if (data[0] !== 0x89) throw new Error('Invalid .png file header')\n  if (data[1] !== 0x50) throw new Error('Invalid .png file header')\n  if (data[2] !== 0x4E) throw new Error('Invalid .png file header')\n  if (data[3] !== 0x47) throw new Error('Invalid .png file header')\n  if (data[4] !== 0x0D) throw new Error('Invalid .png file header: possibly caused by DOS-Unix line ending conversion?')\n  if (data[5] !== 0x0A) throw new Error('Invalid .png file header: possibly caused by DOS-Unix line ending conversion?')\n  if (data[6] !== 0x1A) throw new Error('Invalid .png file header')\n  if (data[7] !== 0x0A) throw new Error('Invalid .png file header: possibly caused by DOS-Unix line ending conversion?')\n\n  var ended = false\n  var chunks = []\n  var idx = 8\n\n  while (idx < data.length) {\n    // Read the length of the current chunk,\n    // which is stored as a Uint32.\n    uint8[3] = data[idx++]\n    uint8[2] = data[idx++]\n    uint8[1] = data[idx++]\n    uint8[0] = data[idx++]\n\n    // Chunk includes name/type for CRC check (see below).\n    var length = uint32[0] + 4\n    var chunk = new Uint8Array(length)\n    chunk[0] = data[idx++]\n    chunk[1] = data[idx++]\n    chunk[2] = data[idx++]\n    chunk[3] = data[idx++]\n\n    // Get the name in ASCII for identification.\n    var name = (\n      String.fromCharCode(chunk[0]) +\n      String.fromCharCode(chunk[1]) +\n      String.fromCharCode(chunk[2]) +\n      String.fromCharCode(chunk[3])\n    )\n\n    // The IHDR header MUST come first.\n    if (!chunks.length && name !== 'IHDR') {\n      throw new Error('IHDR header missing')\n    }\n\n    // The IEND header marks the end of the file,\n    // so on discovering it break out of the loop.\n    if (name === 'IEND') {\n      ended = true\n      chunks.push({\n        name: name,\n        data: new Uint8Array(0)\n      })\n\n      break\n    }\n\n    // Read the contents of the chunk out of the main buffer.\n    for (var i = 4; i < length; i++) {\n      chunk[i] = data[idx++]\n    }\n\n    // Read out the CRC value for comparison.\n    // It's stored as an Int32.\n    uint8[3] = data[idx++]\n    uint8[2] = data[idx++]\n    uint8[1] = data[idx++]\n    uint8[0] = data[idx++]\n\n    var crcActual = int32[0]\n    var crcExpect = crc32.buf(chunk)\n    if (crcExpect !== crcActual) {\n      throw new Error(\n        'CRC values for ' + name + ' header do not match, PNG file is likely corrupted'\n      )\n    }\n\n    // The chunk data is now copied to remove the 4 preceding\n    // bytes used for the chunk name/type.\n    var chunkData = new Uint8Array(chunk.buffer.slice(4))\n\n    chunks.push({\n      name: name,\n      data: chunkData\n    })\n  }\n\n  if (!ended) {\n    throw new Error('.png file ended prematurely: no IEND header was found')\n  }\n\n  return chunks\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcG5nLWNodW5rcy1leHRyYWN0L2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BuZy1jaHVua3MtZXh0cmFjdC9pbmRleC5qcz9jYjViIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBjcmMzMiA9IHJlcXVpcmUoJ2NyYy0zMicpXG5cbm1vZHVsZS5leHBvcnRzID0gZXh0cmFjdENodW5rc1xuXG4vLyBVc2VkIGZvciBmYXN0LWlzaCBjb252ZXJzaW9uIGJldHdlZW4gdWludDhzIGFuZCB1aW50MzJzL2ludDMycy5cbi8vIEFsc28gcmVxdWlyZWQgaW4gb3JkZXIgdG8gcmVtYWluIGFnbm9zdGljIGZvciBib3RoIE5vZGUgQnVmZmVycyBhbmRcbi8vIFVpbnQ4QXJyYXlzLlxudmFyIHVpbnQ4ID0gbmV3IFVpbnQ4QXJyYXkoNClcbnZhciBpbnQzMiA9IG5ldyBJbnQzMkFycmF5KHVpbnQ4LmJ1ZmZlcilcbnZhciB1aW50MzIgPSBuZXcgVWludDMyQXJyYXkodWludDguYnVmZmVyKVxuXG5mdW5jdGlvbiBleHRyYWN0Q2h1bmtzIChkYXRhKSB7XG4gIGlmIChkYXRhWzBdICE9PSAweDg5KSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgLnBuZyBmaWxlIGhlYWRlcicpXG4gIGlmIChkYXRhWzFdICE9PSAweDUwKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgLnBuZyBmaWxlIGhlYWRlcicpXG4gIGlmIChkYXRhWzJdICE9PSAweDRFKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgLnBuZyBmaWxlIGhlYWRlcicpXG4gIGlmIChkYXRhWzNdICE9PSAweDQ3KSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgLnBuZyBmaWxlIGhlYWRlcicpXG4gIGlmIChkYXRhWzRdICE9PSAweDBEKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgLnBuZyBmaWxlIGhlYWRlcjogcG9zc2libHkgY2F1c2VkIGJ5IERPUy1Vbml4IGxpbmUgZW5kaW5nIGNvbnZlcnNpb24/JylcbiAgaWYgKGRhdGFbNV0gIT09IDB4MEEpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCAucG5nIGZpbGUgaGVhZGVyOiBwb3NzaWJseSBjYXVzZWQgYnkgRE9TLVVuaXggbGluZSBlbmRpbmcgY29udmVyc2lvbj8nKVxuICBpZiAoZGF0YVs2XSAhPT0gMHgxQSkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIC5wbmcgZmlsZSBoZWFkZXInKVxuICBpZiAoZGF0YVs3XSAhPT0gMHgwQSkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIC5wbmcgZmlsZSBoZWFkZXI6IHBvc3NpYmx5IGNhdXNlZCBieSBET1MtVW5peCBsaW5lIGVuZGluZyBjb252ZXJzaW9uPycpXG5cbiAgdmFyIGVuZGVkID0gZmFsc2VcbiAgdmFyIGNodW5rcyA9IFtdXG4gIHZhciBpZHggPSA4XG5cbiAgd2hpbGUgKGlkeCA8IGRhdGEubGVuZ3RoKSB7XG4gICAgLy8gUmVhZCB0aGUgbGVuZ3RoIG9mIHRoZSBjdXJyZW50IGNodW5rLFxuICAgIC8vIHdoaWNoIGlzIHN0b3JlZCBhcyBhIFVpbnQzMi5cbiAgICB1aW50OFszXSA9IGRhdGFbaWR4KytdXG4gICAgdWludDhbMl0gPSBkYXRhW2lkeCsrXVxuICAgIHVpbnQ4WzFdID0gZGF0YVtpZHgrK11cbiAgICB1aW50OFswXSA9IGRhdGFbaWR4KytdXG5cbiAgICAvLyBDaHVuayBpbmNsdWRlcyBuYW1lL3R5cGUgZm9yIENSQyBjaGVjayAoc2VlIGJlbG93KS5cbiAgICB2YXIgbGVuZ3RoID0gdWludDMyWzBdICsgNFxuICAgIHZhciBjaHVuayA9IG5ldyBVaW50OEFycmF5KGxlbmd0aClcbiAgICBjaHVua1swXSA9IGRhdGFbaWR4KytdXG4gICAgY2h1bmtbMV0gPSBkYXRhW2lkeCsrXVxuICAgIGNodW5rWzJdID0gZGF0YVtpZHgrK11cbiAgICBjaHVua1szXSA9IGRhdGFbaWR4KytdXG5cbiAgICAvLyBHZXQgdGhlIG5hbWUgaW4gQVNDSUkgZm9yIGlkZW50aWZpY2F0aW9uLlxuICAgIHZhciBuYW1lID0gKFxuICAgICAgU3RyaW5nLmZyb21DaGFyQ29kZShjaHVua1swXSkgK1xuICAgICAgU3RyaW5nLmZyb21DaGFyQ29kZShjaHVua1sxXSkgK1xuICAgICAgU3RyaW5nLmZyb21DaGFyQ29kZShjaHVua1syXSkgK1xuICAgICAgU3RyaW5nLmZyb21DaGFyQ29kZShjaHVua1szXSlcbiAgICApXG5cbiAgICAvLyBUaGUgSUhEUiBoZWFkZXIgTVVTVCBjb21lIGZpcnN0LlxuICAgIGlmICghY2h1bmtzLmxlbmd0aCAmJiBuYW1lICE9PSAnSUhEUicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSUhEUiBoZWFkZXIgbWlzc2luZycpXG4gICAgfVxuXG4gICAgLy8gVGhlIElFTkQgaGVhZGVyIG1hcmtzIHRoZSBlbmQgb2YgdGhlIGZpbGUsXG4gICAgLy8gc28gb24gZGlzY292ZXJpbmcgaXQgYnJlYWsgb3V0IG9mIHRoZSBsb29wLlxuICAgIGlmIChuYW1lID09PSAnSUVORCcpIHtcbiAgICAgIGVuZGVkID0gdHJ1ZVxuICAgICAgY2h1bmtzLnB1c2goe1xuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBkYXRhOiBuZXcgVWludDhBcnJheSgwKVxuICAgICAgfSlcblxuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICAvLyBSZWFkIHRoZSBjb250ZW50cyBvZiB0aGUgY2h1bmsgb3V0IG9mIHRoZSBtYWluIGJ1ZmZlci5cbiAgICBmb3IgKHZhciBpID0gNDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBjaHVua1tpXSA9IGRhdGFbaWR4KytdXG4gICAgfVxuXG4gICAgLy8gUmVhZCBvdXQgdGhlIENSQyB2YWx1ZSBmb3IgY29tcGFyaXNvbi5cbiAgICAvLyBJdCdzIHN0b3JlZCBhcyBhbiBJbnQzMi5cbiAgICB1aW50OFszXSA9IGRhdGFbaWR4KytdXG4gICAgdWludDhbMl0gPSBkYXRhW2lkeCsrXVxuICAgIHVpbnQ4WzFdID0gZGF0YVtpZHgrK11cbiAgICB1aW50OFswXSA9IGRhdGFbaWR4KytdXG5cbiAgICB2YXIgY3JjQWN0dWFsID0gaW50MzJbMF1cbiAgICB2YXIgY3JjRXhwZWN0ID0gY3JjMzIuYnVmKGNodW5rKVxuICAgIGlmIChjcmNFeHBlY3QgIT09IGNyY0FjdHVhbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnQ1JDIHZhbHVlcyBmb3IgJyArIG5hbWUgKyAnIGhlYWRlciBkbyBub3QgbWF0Y2gsIFBORyBmaWxlIGlzIGxpa2VseSBjb3JydXB0ZWQnXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVGhlIGNodW5rIGRhdGEgaXMgbm93IGNvcGllZCB0byByZW1vdmUgdGhlIDQgcHJlY2VkaW5nXG4gICAgLy8gYnl0ZXMgdXNlZCBmb3IgdGhlIGNodW5rIG5hbWUvdHlwZS5cbiAgICB2YXIgY2h1bmtEYXRhID0gbmV3IFVpbnQ4QXJyYXkoY2h1bmsuYnVmZmVyLnNsaWNlKDQpKVxuXG4gICAgY2h1bmtzLnB1c2goe1xuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGRhdGE6IGNodW5rRGF0YVxuICAgIH0pXG4gIH1cblxuICBpZiAoIWVuZGVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCcucG5nIGZpbGUgZW5kZWQgcHJlbWF0dXJlbHk6IG5vIElFTkQgaGVhZGVyIHdhcyBmb3VuZCcpXG4gIH1cblxuICByZXR1cm4gY2h1bmtzXG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/png-chunks-extract/index.js\n");

/***/ })

}]);