"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// @ts-ignore: unused variable
// prettier-ignore
var styled_components_1 = require("styled-components");
var theme_1 = require("@atlaskit/theme");
var editor_common_1 = require("@atlaskit/editor-common");
var styles_1 = require("../../../ui/styles");
var types_1 = require("../types");
var N40A = theme_1.colors.N40A, B100 = theme_1.colors.B100, B300 = theme_1.colors.B300, N300 = theme_1.colors.N300, B75 = theme_1.colors.B75, N20 = theme_1.colors.N20, N50 = theme_1.colors.N50, R50 = theme_1.colors.R50, R300 = theme_1.colors.R300, R75 = theme_1.colors.R75, N20A = theme_1.colors.N20A, N60A = theme_1.colors.N60A, N30 = theme_1.colors.N30, N90 = theme_1.colors.N90, N200 = theme_1.colors.N200, N0 = theme_1.colors.N0, R500 = theme_1.colors.R500;
exports.tableToolbarColor = N20;
exports.tableBorderColor = N50;
exports.tableFloatingControlsColor = N20;
exports.tableCellSelectedColor = B75;
exports.tableToolbarSelectedColor = B100;
exports.tableBorderSelectedColor = B300;
exports.tableCellDeleteColor = R50;
exports.tableBorderDeleteColor = R300;
exports.tableToolbarDeleteColor = R75;
exports.tableToolbarSize = editor_common_1.akEditorTableToolbarSize;
exports.tableBorderRadiusSize = 3;
exports.tableInsertColumnButtonSize = 20;
exports.tableDeleteButtonSize = 16;
exports.contextualMenuTriggerSize = 16;
exports.contextualMenuDropdownWidth = 180;
exports.layoutButtonSize = 32;
var isIE11 = editor_common_1.browser.ie_version === 11;
var Button = function (css) { return "\n  border-radius: " + theme_1.borderRadius() + "px;\n  border-width: 0px;\n  display: inline-flex;\n  max-width: 100%;\n  text-align: center;\n  margin: 0px;\n  padding: 0px;\n  text-decoration: none;\n  transition: background 0.1s ease-out 0s, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38) 0s;\n  outline: none !important;\n  cursor: pointer;\n\n  > ." + types_1.TableCssClassName.CONTROLS_BUTTON_ICON + " {\n    display: inline-flex;\n    max-height: 100%;\n    max-width: 100%;\n  }\n  " + css + "\n"; };
var InsertLine = function (css) { return "\n  ." + types_1.TableCssClassName.CONTROLS_INSERT_LINE + " {\n    background: " + exports.tableBorderSelectedColor + ";\n    display: none;\n    position: absolute;\n    z-index: " + editor_common_1.akEditorUnitZIndex + ";\n    " + css + "\n  }\n"; };
var HeaderButton = function (css) { return "\n  ." + types_1.TableCssClassName.CONTROLS_BUTTON + " {\n    background: " + exports.tableToolbarColor + ";\n    border-top: 1px solid " + exports.tableBorderColor + ";\n    border-left: 1px solid " + exports.tableBorderColor + ";\n    display: block;\n    box-sizing: border-box;\n    padding: 0;\n    cursor: pointer;\n\n    :focus {\n      outline: none;\n    }\n    " + css + "\n  }\n  .active ." + types_1.TableCssClassName.CONTROLS_BUTTON + ",\n  ." + types_1.TableCssClassName.HOVERED_TABLE + " ." + types_1.TableCssClassName.CONTROLS_BUTTON + ",\n  ." + types_1.TableCssClassName.CONTROLS_BUTTON + ":hover {\n    color: " + N0 + ";\n    background-color: " + exports.tableToolbarSelectedColor + ";\n    border-color: " + exports.tableBorderSelectedColor + ";\n  }\n  .danger ." + types_1.TableCssClassName.CONTROLS_BUTTON + " {\n    background-color: " + exports.tableToolbarDeleteColor + ";\n    border-color: " + exports.tableBorderDeleteColor + ";\n    position: relative;\n    z-index: " + editor_common_1.akEditorUnitZIndex + ";\n  }\n"; };
var InsertButton = function () { return "\n  ." + types_1.TableCssClassName.CONTROLS_INSERT_BUTTON_INNER + " {\n    position: absolute;\n    z-index: " + editor_common_1.akEditorUnitZIndex + ";\n  }\n  ." + types_1.TableCssClassName.CONTROLS_INSERT_BUTTON_INNER + ",\n  ." + types_1.TableCssClassName.CONTROLS_INSERT_BUTTON + " {\n    height: " + exports.tableInsertColumnButtonSize + "px;\n    width: " + exports.tableInsertColumnButtonSize + "px;\n  }\n  ." + types_1.TableCssClassName.CONTROLS_INSERT_BUTTON + " {\n    " + Button("\n      background: white;\n      box-shadow: 0 4px 8px -2px " + N60A + ", 0 0 1px " + N60A + ";\n      color: " + N300 + ";\n      :hover {\n        background: " + B300 + ";\n        color: white;\n      }\n    ") + "\n  }\n  ." + types_1.TableCssClassName.CONTROLS_INSERT_LINE + " {\n    display: none;\n  }\n"; };
var DeleteButton = function (css) { return "\n  ." + types_1.TableCssClassName.CONTROLS_DELETE_BUTTON_WRAP + ",\n  ." + types_1.TableCssClassName.CONTROLS_DELETE_BUTTON + " {\n    height: " + exports.tableDeleteButtonSize + "px;\n    width: " + exports.tableDeleteButtonSize + "px;\n  }\n  ." + types_1.TableCssClassName.CONTROLS_DELETE_BUTTON_WRAP + " {\n    position: absolute;\n    cursor: pointer;\n    " + css + "\n\n    ." + types_1.TableCssClassName.CONTROLS_DELETE_BUTTON + " {\n      " + Button("\n        background: " + N20A + ";\n        color: " + N300 + ";\n        :hover {\n          background: " + R300 + ";\n          color: white;\n        }\n      ") + "\n    }\n  }\n"; };
var InsertMarker = function (css) { return "\n  ." + types_1.TableCssClassName.CONTROLS_INSERT_MARKER + " {\n    background-color: " + exports.tableBorderColor + ";\n    position: absolute;\n    height: 4px;\n    width: 4px;\n    border-radius: 50%;\n    pointer-events: none;\n    " + css + "\n  }\n"; };
exports.tableStyles = styled_components_1.css(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  .", " button {\n    background: ", ";\n    color: ", ";\n    :hover {\n      background: ", ";\n      color: white !important;\n    }\n  }\n\n  .ProseMirror {\n    ", "\n\n    .less-padding {\n      padding: 0 8px;\n\n      .", " {\n         padding: 0 8px;\n      }\n    }\n\n    /* Breakout only works on top level */\n    > .", " .", "[data-layout='full-width'],\n    > .", " .", "[data-layout='wide'] {\n      margin-left: 50%;\n      transform: translateX(-50%);\n    }\n    > * .", " .", " {\n      width: 100% !important;\n    }\n\n    /* Column controls */\n    .", " {\n      height: ", "px;\n      box-sizing: border-box;\n      display: none;\n\n      .", " {\n        display: flex;\n      }\n      .", " {\n        position: relative;\n        margin-right: -1px;\n      }\n      .", ":last-child > button {\n        border-top-right-radius: ", "px;\n      }\n      .", ".active .", ",\n      .", ":hover {\n        z-index: ", ";\n        position: relative;\n      }\n      ", "\n    }\n    .", ",\n    .", " {\n      ", "\n      .", " {\n        position: absolute;\n        height: ", "px;\n        width: ", "px;\n        z-index: ", ";\n        cursor: pointer;\n        &:hover .", " {\n          display: flex;\n        }\n      }\n      .", " {\n        top: -", "px;\n        right: -", "px;\n      }\n      .", " {\n        top: 2px;\n        left: -", "px;\n      }\n    }\n    .", ",\n    .", " {\n      ", "\n      ", "\n      ", "\n    }\n    .", ",\n    .", " {\n      ", "\n      ", "\n      ", "\n    }\n\n    /* Corner controls */\n    .", " {\n      width: ", "px;\n      height: ", "px;\n      display: none;\n    }\n    .", " {\n      position: absolute;\n      top: 0;\n      width: ", "px;\n      height: ", "px;\n      border: 1px solid ", ";\n      border-radius: 0;\n      border-top-left-radius: ", "px;\n      background: ", ";\n      cursor: pointer;\n      box-sizing: border-box;\n      padding: 0;\n      :focus {\n        outline: none;\n      }\n    }\n    .", " .", ",\n    .active .", ",\n    .", ":hover {\n      border-color: ", ";\n      background: ", ";\n    }\n    .", ".danger {\n      border-color: ", ";\n      background: ", ";\n    }\n    .", "[data-number-column='true'] {\n      .", ",\n      .", " {\n        width: ", "px;\n      }\n      .", " .", " {\n        border-right-width: 0;\n      }\n    }\n\n    /* Row controls */\n    .", " {\n      width: ", "px;\n      box-sizing: border-box;\n      display: none;\n      position: relative;\n\n      .", " {\n        display: flex;\n        flex-direction: column;\n      }\n      .", ":last-child > button {\n        border-bottom-left-radius: ", "px;\n      }\n      .", " {\n        position: relative;\n        margin-top: -1px;\n      }\n      .", ".active .", ",\n      .", ":hover {\n        z-index: ", ";\n        position: relative;\n      }\n      .", " {\n        position: absolute;\n        bottom: -", "px;\n        left: -", "px;\n        height: ", "px;\n        width: ", "px;\n        z-index: ", ";\n        cursor: pointer;\n        &:hover .", " {\n          display: flex;\n        }\n      }\n      ", "\n      ", "\n    }\n\n    /* numbered column */\n    .", " {\n      position: relative;\n      float: right;\n      margin-left: ", "px;\n      top: ", "px;\n      width: ", "px;\n      box-sizing: border-box;\n      border-left: 1px solid ", ";\n    }\n    .", " {\n      border-top: 1px solid ", ";\n      border-right: 1px solid ", ";\n      box-sizing: border-box;\n      margin-top: -1px;\n      padding: 10px 2px;\n      text-align: center;\n      font-size: ", "px;\n      background-color: ", ";\n      color: ", ";\n      border-color: ", ";\n\n      :first-child {\n        margin-top: 0;\n      }\n      :last-child {\n        border-bottom: 1px solid ", ";\n      }\n    }\n    .", " {\n      .", ",\n      .", ",\n      .", " {\n        display: block;\n      }\n      .", " {\n        border-left: 0 none;\n        padding-left: 1px;\n\n        .", " {\n          cursor: pointer;\n        }\n        .", ":hover,\n        .", ".active,\n        .", ".", " {\n          border-bottom: 1px solid ", ";\n          border-color: ", ";\n          background-color: ", ";\n          position: relative;\n          z-index: ", ";\n          color: ", ";\n        }\n        .", ".danger {\n          background-color: ", ";\n          border: 1px solid ", ";\n          color: ", ";\n          position: relative;\n          z-index: ", ";\n        }\n      }\n      /* scroll shadows */\n      .", ",\n      .", "::after {\n        display: block;\n        position: absolute;\n        pointer-events: none;\n        z-index: ", ";\n        width: 8px;\n      }\n      .", "::after {\n        background: linear-gradient(\n          to left,\n          rgba(99, 114, 130, 0) 0,\n          ", " 100%\n        );\n        content: '';\n        height: 100%;\n        right: -8px;\n        bottom: 0;\n      }\n      .", " {\n        background: linear-gradient(\n          to right,\n          rgba(99, 114, 130, 0) 0,\n          ", " 100%\n        );\n        height: calc(100% - ", "px);\n        left: calc(100% + 2px);\n        top: ", "px;\n      }\n    }\n\n    /* Table */\n    .", " > table {\n      table-layout: fixed;\n\n      td,\n      th {\n        position: relative;\n      }\n\n      .", ",\n      .", " {\n        position: relative;\n        border: 1px solid ", ";\n      }\n      /* Give selected cells a blue overlay */\n      .", "::after {\n        z-index: ", ";\n        position: absolute;\n        content: '';\n        left: 0;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        background: ", ";\n        opacity: 0.3;\n        pointer-events: none;\n      }\n      .", ".danger,\n      .", ".danger {\n        border: 1px solid ", ";\n      }\n      .", ".danger::after {\n        background: ", ";\n      }\n    }\n    .", ",\n    .", " {\n      position: absolute;\n      top: ", "px;\n    }\n    .", ".", " {\n      z-index: ", ";\n    }\n    .", " {\n      left: 0;\n    }\n    .", " {\n      left: -", "px;\n    }\n    .", " {\n      padding-right: ", "px;\n      margin-right: -", "px;\n      padding-top: ", "px;\n      margin-top: -", "px;\n      z-index: ", ";\n      /* fixes gap cursor height */\n      overflow: ", ";\n      position: relative;\n    }\n    .", " {\n      bottom: 0;\n      top: -1px;\n      right: -2px;\n      width: 2px;\n      height: calc(100% + 2px);\n    }\n  }\n\n  /* =============== TABLE COLUMN RESIZING ================== */\n  .ProseMirror.", " {\n    .", " {\n      overflow-x: ", ";\n      ", ";\n    }\n    .", " {\n      background-color: ", ";\n      position: absolute;\n      bottom: 0;\n      top: -1px;\n      right: -2px;\n      width: 2px;\n      height: calc(100% + 2px);\n      pointer-events: none;\n      z-index: ", ";\n    }\n    .", " .", " {\n      top: -", "px;\n      height: calc(100% + ", "px);\n    }\n  }\n\n  .ProseMirror.resize-cursor {\n    cursor: col-resize;\n  }\n\n  /* =============== TABLE CONTEXTUAL MENU ================== */\n  .", " {\n    position: absolute;\n    right: 2px;\n    top: 2px;\n\n    > div {\n      background: ", ";\n      border-radius: ", "px;\n      border: 2px solid ", ";\n      display: flex;\n      height: ", "px;\n      flex-direction: column;\n    }\n    button {\n      flex-direction: column;\n      padding: 0;\n    }\n  }\n  .", " {\n    border-radius: ", "px;\n    background: white;\n    box-shadow: 0 4px 8px -2px ", ", 0 0 1px ", ";\n    display: block;\n    position: absolute;\n    width: 130px;\n    height: 64px;\n    top: 0;\n    left: ", "px;\n    padding: 5px;\n\n    > div {\n      padding: 0;\n    }\n  }\n  .", " {\n    border: 1px solid ", ";\n    border-radius: ", "px;\n    display: block;\n    width: 20px;\n    height: 20px;\n    position: relative;\n    left: -10px;\n\n    &::after {\n      content: '\u203A';\n      display: inline-block;\n      width: 1px;\n      position: relative;\n      left: 25px;\n      top: 9px;\n      color: ", ";\n    }\n  }\n"], ["\n  .", " button {\n    background: ", ";\n    color: ", ";\n    :hover {\n      background: ", ";\n      color: white !important;\n    }\n  }\n\n  .ProseMirror {\n    ", "\n\n    .less-padding {\n      padding: 0 8px;\n\n      .", " {\n         padding: 0 8px;\n      }\n    }\n\n    /* Breakout only works on top level */\n    > .", " .",
    "[data-layout='full-width'],\n    > .", " .",
    "[data-layout='wide'] {\n      margin-left: 50%;\n      transform: translateX(-50%);\n    }\n    > * .", " .", " {\n      width: 100% !important;\n    }\n\n    /* Column controls */\n    .", " {\n      height: ", "px;\n      box-sizing: border-box;\n      display: none;\n\n      .", " {\n        display: flex;\n      }\n      .", " {\n        position: relative;\n        margin-right: -1px;\n      }\n      .", ":last-child > button {\n        border-top-right-radius: ", "px;\n      }\n      .", ".active .",
    ",\n      .", ":hover {\n        z-index: ", ";\n        position: relative;\n      }\n      ",
    "\n    }\n    .", ",\n    .", " {\n      ",
    "\n      .", " {\n        position: absolute;\n        height: ", "px;\n        width: ", "px;\n        z-index: ", ";\n        cursor: pointer;\n        &:hover .", " {\n          display: flex;\n        }\n      }\n      .", " {\n        top: -", "px;\n        right: -", "px;\n      }\n      .", " {\n        top: 2px;\n        left: -", "px;\n      }\n    }\n    .", ",\n    .", " {\n      ", "\n      ",
    "\n      ",
    "\n    }\n    .", ",\n    .", " {\n      ", "\n      ",
    "\n      ",
    "\n    }\n\n    /* Corner controls */\n    .", " {\n      width: ", "px;\n      height: ", "px;\n      display: none;\n    }\n    .", " {\n      position: absolute;\n      top: 0;\n      width: ", "px;\n      height: ", "px;\n      border: 1px solid ", ";\n      border-radius: 0;\n      border-top-left-radius: ", "px;\n      background: ", ";\n      cursor: pointer;\n      box-sizing: border-box;\n      padding: 0;\n      :focus {\n        outline: none;\n      }\n    }\n    .", " .", ",\n    .active .", ",\n    .", ":hover {\n      border-color: ", ";\n      background: ", ";\n    }\n    .", ".danger {\n      border-color: ", ";\n      background: ", ";\n    }\n    .", "[data-number-column='true'] {\n      .", ",\n      .", " {\n        width: ", "px;\n      }\n      .", " .", " {\n        border-right-width: 0;\n      }\n    }\n\n    /* Row controls */\n    .", " {\n      width: ", "px;\n      box-sizing: border-box;\n      display: none;\n      position: relative;\n\n      .", " {\n        display: flex;\n        flex-direction: column;\n      }\n      .", ":last-child > button {\n        border-bottom-left-radius: ", "px;\n      }\n      .", " {\n        position: relative;\n        margin-top: -1px;\n      }\n      .", ".active .",
    ",\n      .", ":hover {\n        z-index: ", ";\n        position: relative;\n      }\n      .", " {\n        position: absolute;\n        bottom: -", "px;\n        left: -", "px;\n        height: ", "px;\n        width: ", "px;\n        z-index: ", ";\n        cursor: pointer;\n        &:hover .", " {\n          display: flex;\n        }\n      }\n      ",
    "\n      ",
    "\n    }\n\n    /* numbered column */\n    .", " {\n      position: relative;\n      float: right;\n      margin-left: ", "px;\n      top: ", "px;\n      width: ", "px;\n      box-sizing: border-box;\n      border-left: 1px solid ", ";\n    }\n    .", " {\n      border-top: 1px solid ", ";\n      border-right: 1px solid ", ";\n      box-sizing: border-box;\n      margin-top: -1px;\n      padding: 10px 2px;\n      text-align: center;\n      font-size: ", "px;\n      background-color: ", ";\n      color: ", ";\n      border-color: ", ";\n\n      :first-child {\n        margin-top: 0;\n      }\n      :last-child {\n        border-bottom: 1px solid ", ";\n      }\n    }\n    .", " {\n      .", ",\n      .", ",\n      .", " {\n        display: block;\n      }\n      .", " {\n        border-left: 0 none;\n        padding-left: 1px;\n\n        .", " {\n          cursor: pointer;\n        }\n        .", ":hover,\n        .", ".active,\n        .", ".", " {\n          border-bottom: 1px solid ", ";\n          border-color: ", ";\n          background-color: ", ";\n          position: relative;\n          z-index: ", ";\n          color: ", ";\n        }\n        .", ".danger {\n          background-color: ", ";\n          border: 1px solid ", ";\n          color: ", ";\n          position: relative;\n          z-index: ", ";\n        }\n      }\n      /* scroll shadows */\n      .", ",\n      .", "::after {\n        display: block;\n        position: absolute;\n        pointer-events: none;\n        z-index: ", ";\n        width: 8px;\n      }\n      .", "::after {\n        background: linear-gradient(\n          to left,\n          rgba(99, 114, 130, 0) 0,\n          ", " 100%\n        );\n        content: '';\n        height: 100%;\n        right: -8px;\n        bottom: 0;\n      }\n      .", " {\n        background: linear-gradient(\n          to right,\n          rgba(99, 114, 130, 0) 0,\n          ", " 100%\n        );\n        height: calc(100% - ", "px);\n        left: calc(100% + 2px);\n        top: ", "px;\n      }\n    }\n\n    /* Table */\n    .", " > table {\n      table-layout: fixed;\n\n      td,\n      th {\n        position: relative;\n      }\n\n      .", ",\n      .", " {\n        position: relative;\n        border: 1px solid ", ";\n      }\n      /* Give selected cells a blue overlay */\n      .", "::after {\n        z-index: ", ";\n        position: absolute;\n        content: '';\n        left: 0;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        background: ", ";\n        opacity: 0.3;\n        pointer-events: none;\n      }\n      .", ".danger,\n      .", ".danger {\n        border: 1px solid ", ";\n      }\n      .", ".danger::after {\n        background: ", ";\n      }\n    }\n    .", ",\n    .", " {\n      position: absolute;\n      top: ", "px;\n    }\n    .", ".", " {\n      z-index: ", ";\n    }\n    .", " {\n      left: 0;\n    }\n    .", " {\n      left: -", "px;\n    }\n    .", " {\n      padding-right: ", "px;\n      margin-right: -", "px;\n      padding-top: ", "px;\n      margin-top: -", "px;\n      z-index: ", ";\n      /* fixes gap cursor height */\n      overflow: ", ";\n      position: relative;\n    }\n    .", " {\n      bottom: 0;\n      top: -1px;\n      right: -2px;\n      width: 2px;\n      height: calc(100% + 2px);\n    }\n  }\n\n  /* =============== TABLE COLUMN RESIZING ================== */\n  .ProseMirror.", " {\n    .", " {\n      overflow-x: ", ";\n      ", ";\n    }\n    .", " {\n      background-color: ", ";\n      position: absolute;\n      bottom: 0;\n      top: -1px;\n      right: -2px;\n      width: 2px;\n      height: calc(100% + 2px);\n      pointer-events: none;\n      z-index: ", ";\n    }\n    .", " .", " {\n      top: -", "px;\n      height: calc(100% + ", "px);\n    }\n  }\n\n  .ProseMirror.resize-cursor {\n    cursor: col-resize;\n  }\n\n  /* =============== TABLE CONTEXTUAL MENU ================== */\n  .", " {\n    position: absolute;\n    right: 2px;\n    top: 2px;\n\n    > div {\n      background: ", ";\n      border-radius: ", "px;\n      border: 2px solid ", ";\n      display: flex;\n      height: ", "px;\n      flex-direction: column;\n    }\n    button {\n      flex-direction: column;\n      padding: 0;\n    }\n  }\n  .", " {\n    border-radius: ", "px;\n    background: white;\n    box-shadow: 0 4px 8px -2px ", ", 0 0 1px ", ";\n    display: block;\n    position: absolute;\n    width: 130px;\n    height: 64px;\n    top: 0;\n    left: ", "px;\n    padding: 5px;\n\n    > div {\n      padding: 0;\n    }\n  }\n  .", " {\n    border: 1px solid ", ";\n    border-radius: ", "px;\n    display: block;\n    width: 20px;\n    height: 20px;\n    position: relative;\n    left: -10px;\n\n    &::after {\n      content: '\u203A';\n      display: inline-block;\n      width: 1px;\n      position: relative;\n      left: 25px;\n      top: 9px;\n      color: ", ";\n    }\n  }\n"])), types_1.TableCssClassName.LAYOUT_BUTTON, N20A, N300, B300, editor_common_1.tableSharedStyle, types_1.TableCssClassName.ROW_CONTROLS_WRAPPER, types_1.TableCssClassName.NODEVIEW_WRAPPER, types_1.TableCssClassName.TABLE_CONTAINER, types_1.TableCssClassName.NODEVIEW_WRAPPER, types_1.TableCssClassName.TABLE_CONTAINER, types_1.TableCssClassName.NODEVIEW_WRAPPER, types_1.TableCssClassName.TABLE_CONTAINER, types_1.TableCssClassName.COLUMN_CONTROLS, exports.tableToolbarSize, types_1.TableCssClassName.COLUMN_CONTROLS_INNER, types_1.TableCssClassName.COLUMN_CONTROLS_BUTTON_WRAP, types_1.TableCssClassName.COLUMN_CONTROLS_BUTTON_WRAP, exports.tableBorderRadiusSize, types_1.TableCssClassName.COLUMN_CONTROLS_BUTTON_WRAP, types_1.TableCssClassName.CONTROLS_BUTTON, types_1.TableCssClassName.CONTROLS_BUTTON, editor_common_1.akEditorUnitZIndex, HeaderButton("\n        border-right: 1px solid " + exports.tableBorderColor + ";\n        border-bottom: none;\n        height: " + exports.tableToolbarSize + "px;\n        width: 100%;\n\n        ." + types_1.TableCssClassName.CONTROLS_BUTTON_OVERLAY + " {\n          position: absolute;\n          width: 50%;\n          height: 30px;\n          bottom: 0;\n          right: 0;\n        }\n        ." + types_1.TableCssClassName.CONTROLS_BUTTON_OVERLAY + ":first-child {\n          left: 0;\n        }\n      "), types_1.TableCssClassName.COLUMN_CONTROLS, types_1.TableCssClassName.CORNER_CONTROLS, DeleteButton("\n        top: -" + (exports.tableDeleteButtonSize + 4) + "px;\n      "), types_1.TableCssClassName.CONTROLS_INSERT_BUTTON_WRAP, exports.tableInsertColumnButtonSize, exports.tableInsertColumnButtonSize, editor_common_1.akEditorSmallZIndex, types_1.TableCssClassName.CONTROLS_INSERT_LINE, types_1.TableCssClassName.CONTROLS_INSERT_COLUMN, exports.tableInsertColumnButtonSize - 2, exports.tableInsertColumnButtonSize / 2, types_1.TableCssClassName.CONTROLS_INSERT_ROW, exports.tableDeleteButtonSize + 2, types_1.TableCssClassName.COLUMN_CONTROLS, types_1.TableCssClassName.CONTROLS_INSERT_COLUMN, InsertButton(), InsertLine("\n        width: 2px;\n        left: 8px;\n        top: " + (exports.tableInsertColumnButtonSize - 2) + "px;\n      "), InsertMarker("\n        bottom: 5px;\n        left: 7px;\n      "), types_1.TableCssClassName.ROW_CONTROLS, types_1.TableCssClassName.CONTROLS_INSERT_ROW, InsertButton(), InsertLine("\n        height: 2px;\n        top: 8px;\n        left: " + (exports.tableInsertColumnButtonSize - 2) + "px;\n      "), InsertMarker("\n        top: 7px;\n        right: 5px;\n      "), types_1.TableCssClassName.CORNER_CONTROLS, exports.tableToolbarSize + 1, exports.tableToolbarSize + 1, types_1.TableCssClassName.CONTROLS_CORNER_BUTTON, exports.tableToolbarSize + 1, exports.tableToolbarSize + 1, exports.tableBorderColor, exports.tableBorderRadiusSize, exports.tableToolbarColor, types_1.TableCssClassName.HOVERED_TABLE, types_1.TableCssClassName.CONTROLS_CORNER_BUTTON, types_1.TableCssClassName.CONTROLS_CORNER_BUTTON, types_1.TableCssClassName.CONTROLS_CORNER_BUTTON, exports.tableBorderSelectedColor, exports.tableToolbarSelectedColor, types_1.TableCssClassName.CONTROLS_CORNER_BUTTON, exports.tableBorderDeleteColor, exports.tableToolbarDeleteColor, types_1.TableCssClassName.TABLE_CONTAINER, types_1.TableCssClassName.CORNER_CONTROLS, types_1.TableCssClassName.CONTROLS_CORNER_BUTTON, editor_common_1.akEditorTableToolbarSize + editor_common_1.akEditorTableNumberColumnWidth, types_1.TableCssClassName.ROW_CONTROLS, types_1.TableCssClassName.CONTROLS_BUTTON, types_1.TableCssClassName.ROW_CONTROLS, exports.tableToolbarSize, types_1.TableCssClassName.ROW_CONTROLS_INNER, types_1.TableCssClassName.ROW_CONTROLS_BUTTON_WRAP, exports.tableBorderRadiusSize, types_1.TableCssClassName.ROW_CONTROLS_BUTTON_WRAP, types_1.TableCssClassName.ROW_CONTROLS_BUTTON_WRAP, types_1.TableCssClassName.CONTROLS_BUTTON, types_1.TableCssClassName.CONTROLS_BUTTON, editor_common_1.akEditorUnitZIndex, types_1.TableCssClassName.CONTROLS_INSERT_BUTTON_WRAP, exports.tableInsertColumnButtonSize / 2, exports.tableInsertColumnButtonSize - 2, exports.tableInsertColumnButtonSize, exports.tableInsertColumnButtonSize, editor_common_1.akEditorSmallZIndex, types_1.TableCssClassName.CONTROLS_INSERT_LINE, DeleteButton("\n        bottom: -" + exports.tableInsertColumnButtonSize / 2 + "px;\n        left: -" + (exports.tableDeleteButtonSize + 6) + "px;\n      "), HeaderButton("\n        border-bottom: 1px solid " + exports.tableBorderColor + ";\n        border-right: 1px solid " + exports.tableBorderColor + ";\n        border-radius: 0;\n        height: 100%;\n        width: " + (exports.tableToolbarSize + 1) + "px;\n\n        ." + types_1.TableCssClassName.CONTROLS_BUTTON_OVERLAY + " {\n          position: absolute;\n          width: 30px;\n          height: 50%;\n          right: 0;\n          bottom: 0;\n        }\n        ." + types_1.TableCssClassName.CONTROLS_BUTTON_OVERLAY + ":first-child {\n          top: 0;\n        }\n      "), types_1.TableCssClassName.NUMBERED_COLUMN, editor_common_1.akEditorTableToolbarSize - 1, editor_common_1.akEditorTableToolbarSize, editor_common_1.akEditorTableNumberColumnWidth + 1, editor_common_1.akEditorTableBorder, types_1.TableCssClassName.NUMBERED_COLUMN_BUTTON, editor_common_1.akEditorTableBorder, editor_common_1.akEditorTableBorder, theme_1.fontSize(), exports.tableToolbarColor, N200, editor_common_1.akEditorTableBorder, editor_common_1.akEditorTableBorder, types_1.TableCssClassName.WITH_CONTROLS, types_1.TableCssClassName.COLUMN_CONTROLS, types_1.TableCssClassName.CORNER_CONTROLS, types_1.TableCssClassName.ROW_CONTROLS, types_1.TableCssClassName.NUMBERED_COLUMN, types_1.TableCssClassName.NUMBERED_COLUMN_BUTTON, types_1.TableCssClassName.NUMBERED_COLUMN_BUTTON, types_1.TableCssClassName.NUMBERED_COLUMN_BUTTON, types_1.TableCssClassName.NUMBERED_COLUMN_BUTTON, types_1.TableCssClassName.HOVERED_TABLE, exports.tableBorderSelectedColor, exports.tableBorderSelectedColor, exports.tableToolbarSelectedColor, editor_common_1.akEditorUnitZIndex, N0, types_1.TableCssClassName.NUMBERED_COLUMN_BUTTON, exports.tableToolbarDeleteColor, exports.tableBorderDeleteColor, R500, editor_common_1.akEditorUnitZIndex, types_1.TableCssClassName.TABLE_RIGHT_SHADOW, types_1.TableCssClassName.TABLE_LEFT_SHADOW, editor_common_1.akEditorSmallZIndex, types_1.TableCssClassName.TABLE_LEFT_SHADOW, N40A, types_1.TableCssClassName.TABLE_RIGHT_SHADOW, N40A, editor_common_1.tableMarginTop + 8, editor_common_1.tableMarginTop - 1, types_1.TableCssClassName.TABLE_NODE_WRAPPER, types_1.TableCssClassName.SELECTED_CELL, types_1.TableCssClassName.HOVERED_CELL, exports.tableBorderSelectedColor, types_1.TableCssClassName.SELECTED_CELL, editor_common_1.akEditorSmallZIndex, exports.tableCellSelectedColor, types_1.TableCssClassName.SELECTED_CELL, types_1.TableCssClassName.HOVERED_CELL, exports.tableBorderDeleteColor, types_1.TableCssClassName.SELECTED_CELL, exports.tableCellDeleteColor, types_1.TableCssClassName.COLUMN_CONTROLS_WRAPPER, types_1.TableCssClassName.ROW_CONTROLS_WRAPPER, editor_common_1.tableMarginTop - 1, types_1.TableCssClassName.ROW_CONTROLS_WRAPPER, types_1.TableCssClassName.TABLE_LEFT_SHADOW, editor_common_1.akEditorUnitZIndex, types_1.TableCssClassName.COLUMN_CONTROLS_WRAPPER, types_1.TableCssClassName.ROW_CONTROLS_WRAPPER, exports.tableToolbarSize, types_1.TableCssClassName.TABLE_NODE_WRAPPER, exports.tableInsertColumnButtonSize / 2, exports.tableInsertColumnButtonSize / 2, exports.tableInsertColumnButtonSize / 2, exports.tableInsertColumnButtonSize / 2, editor_common_1.akEditorUnitZIndex - 1, isIE11 ? 'none' : 'auto', types_1.TableCssClassName.COLUMN_RESIZE_HANDLE, types_1.TableCssClassName.RESIZING, types_1.TableCssClassName.TABLE_NODE_WRAPPER, isIE11 ? 'none' : 'auto', !isIE11 ? styles_1.scrollbarStyles : '', types_1.TableCssClassName.COLUMN_RESIZE_HANDLE, exports.tableBorderSelectedColor, editor_common_1.akEditorUnitZIndex, types_1.TableCssClassName.WITH_CONTROLS, types_1.TableCssClassName.COLUMN_RESIZE_HANDLE, exports.tableToolbarSize, exports.tableToolbarSize, types_1.TableCssClassName.CONTEXTUAL_MENU_BUTTON, N20, theme_1.borderRadius(), N0, exports.contextualMenuTriggerSize + 2, types_1.TableCssClassName.CONTEXTUAL_SUBMENU, theme_1.borderRadius(), N60A, N60A, exports.contextualMenuDropdownWidth, types_1.TableCssClassName.CONTEXTUAL_MENU_ICON, N30, theme_1.borderRadius(), N90);
exports.tableFullPageEditorStyles = styled_components_1.css(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  .ProseMirror .", " > table {\n    .", ".danger, .", ".danger {\n      border: 1px solid ", ";\n      background: ", ";\n    }\n    .", ".danger:after {\n      background: ", ";\n    }\n    margin-left: 0;\n    margin-right: 0;\n    width: 100%;\n  }\n"], ["\n  .ProseMirror .", " > table {\n    .", ".danger, .", ".danger {\n      border: 1px solid ", ";\n      background: ", ";\n    }\n    .", ".danger:after {\n      background: ", ";\n    }\n    margin-left: 0;\n    margin-right: 0;\n    width: 100%;\n  }\n"])), types_1.TableCssClassName.TABLE_NODE_WRAPPER, types_1.TableCssClassName.SELECTED_CELL, types_1.TableCssClassName.HOVERED_CELL, exports.tableBorderDeleteColor, exports.tableCellDeleteColor, types_1.TableCssClassName.SELECTED_CELL, exports.tableCellDeleteColor);
exports.tableCommentEditorStyles = styled_components_1.css(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  .ProseMirror .", " > table {\n    margin-left: 0;\n    margin-right: 0;\n\n    ", ";\n  }\n"], ["\n  .ProseMirror .", " > table {\n    margin-left: 0;\n    margin-right: 0;\n\n    ", ";\n  }\n"])), types_1.TableCssClassName.TABLE_NODE_WRAPPER, styles_1.scrollbarStyles);
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=styles.js.map