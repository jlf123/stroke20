"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var styled_components_1 = require("styled-components");
var theme_1 = require("@atlaskit/theme");
var Container = styled_components_1.default.li(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  background-color: ", ";\n  padding: 5px 8px;\n  cursor: pointer;\n  display: flex;\n"], ["\n  background-color: ",
    ";\n  padding: 5px 8px;\n  cursor: pointer;\n  display: flex;\n"])), function (props) {
    return props.selected ? theme_1.colors.N20 : 'transparent';
});
var NameWrapper = styled_components_1.default.span(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  overflow: hidden;\n"], ["\n  overflow: hidden;\n"])));
exports.Name = styled_components_1.default.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  color: ", ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"], ["\n  color: ", ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"])), theme_1.colors.N800);
exports.ContainerName = styled_components_1.default.div(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  color: ", ";\n  font-size: 12px;\n"], ["\n  color: ", ";\n  font-size: 12px;\n"])), theme_1.colors.N100);
var Icon = styled_components_1.default.span(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  min-width: 16px;\n  margin-top: 3px;\n  margin-right: 8px;\n"], ["\n  min-width: 16px;\n  margin-top: 3px;\n  margin-right: 8px;\n"])));
var RecentItem = /** @class */ (function (_super) {
    tslib_1.__extends(RecentItem, _super);
    function RecentItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleSelect = function (e) {
            e.preventDefault(); // don't let editor lose focus
            var _a = _this.props, item = _a.item, onSelect = _a.onSelect;
            onSelect(item.url, item.name);
        };
        _this.handleMouseMove = function () {
            var _a = _this.props, onMouseMove = _a.onMouseMove, item = _a.item;
            onMouseMove(item.objectId);
        };
        return _this;
    }
    RecentItem.prototype.render = function () {
        var _a = this.props, item = _a.item, selected = _a.selected;
        return (React.createElement(Container, { selected: selected, onMouseMove: this.handleMouseMove, onMouseDown: this.handleSelect },
            React.createElement(Icon, null,
                React.createElement("img", { src: item.iconUrl })),
            React.createElement(NameWrapper, null,
                React.createElement(exports.Name, null, item.name),
                React.createElement(exports.ContainerName, null, item.container))));
    };
    return RecentItem;
}(React.PureComponent));
exports.default = RecentItem;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=RecentItem.js.map