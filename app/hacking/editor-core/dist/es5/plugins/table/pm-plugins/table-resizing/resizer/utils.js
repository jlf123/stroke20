"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
exports.makeColIdxPair = function (cols) {
    return cols.map(function (col, idx) {
        return { col: col, idx: idx };
    });
};
exports.findFreeCol = function (colIdxObj, direction) {
    if (colIdxObj.length === 0) {
        return null;
    }
    var freeAmount = colIdxObj[0].col.freeSpace;
    var freeIdx = 0;
    colIdxObj.slice(1).forEach(function (_a, idx) {
        var col = _a.col;
        var isGreatest = col.freeSpace > freeAmount;
        if (isGreatest) {
            freeAmount = col.freeSpace;
            freeIdx = idx + 1;
        }
    });
    return freeIdx;
};
exports.findNextFreeCol = function (colIdxObj, direction) {
    if (colIdxObj.length === 0) {
        return -1;
    }
    if (direction < 0) {
        colIdxObj = colIdxObj.slice().reverse();
    }
    var freeIdx = -1;
    colIdxObj.forEach(function (_a, idx) {
        var col = _a.col;
        if (col.freeSpace && freeIdx === -1) {
            freeIdx = idx;
        }
    });
    if (freeIdx === -1) {
        return -1;
    }
    return direction < 0 ? colIdxObj.length - 1 - freeIdx : freeIdx;
};
exports.getRowChildren = function (row) {
    var children = [];
    var _loop_1 = function (i) {
        var currentCol = row.children[i];
        var colspan = Number(currentCol.getAttribute('colspan'));
        if (colspan > 1) {
            children.push.apply(children, tslib_1.__spread(Array.from({ length: colspan }, function (_) { return currentCol; })));
        }
        else {
            children.push(currentCol);
        }
    };
    for (var i = 0; i < row.childElementCount; i++) {
        _loop_1(i);
    }
    return children;
};
var defaultCalculateColWidthCb = function (col, colComputedStyle) { return exports.unitToNumber(colComputedStyle.width); };
exports.calculateColWidth = function (table, colIdx, calculateColWidthCb) {
    if (calculateColWidthCb === void 0) { calculateColWidthCb = defaultCalculateColWidthCb; }
    var tbody = table.querySelector('tbody');
    if (tbody) {
        table = tbody;
    }
    var maxColWidth = 0;
    var colSpanWidth = 0;
    for (var i = 0; i < table.childElementCount; i++) {
        var row = table.children[i];
        if (row.tagName.toUpperCase() !== 'TR') {
            continue;
        }
        var rowChildren = exports.getRowChildren(row);
        var col = rowChildren[colIdx];
        // We may encounter a rowspan'd cell.
        if (!col) {
            continue;
        }
        var colComputedStyle = getComputedStyle(col);
        var colspan = Number(col.getAttribute('colspan'));
        if (colspan > 1) {
            colSpanWidth = exports.unitToNumber(colComputedStyle.width);
            continue;
        }
        if (colComputedStyle) {
            var colWidth = calculateColWidthCb(col, colComputedStyle);
            maxColWidth = Math.max(colWidth, maxColWidth);
        }
    }
    return maxColWidth || colSpanWidth;
};
exports.unitToNumber = function (unit) {
    if (unit) {
        return Number(unit.slice(0, unit.length - 2));
    }
    return 0;
};
exports.addContainerLeftRightPadding = function (amount, computedStyle) {
    return (amount +
        exports.unitToNumber(computedStyle.paddingLeft) +
        exports.unitToNumber(computedStyle.paddingRight));
};
//# sourceMappingURL=utils.js.map