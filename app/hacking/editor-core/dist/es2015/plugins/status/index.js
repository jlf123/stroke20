import * as React from 'react';
import { status } from '@atlaskit/adf-schema';
import LabelIcon from '@atlaskit/icon/glyph/label';
import { findDomRefAtPos } from 'prosemirror-utils';
import createStatusPlugin, { pluginKey } from './plugin';
import WithPluginState from '../../ui/WithPluginState';
import StatusPicker from './ui/statusPicker';
import { commitStatusPicker, updateStatus, createStatus } from './actions';
var baseStatusPlugin = function () { return ({
    nodes: function () {
        return [{ name: 'status', node: status }];
    },
    pmPlugins: function () {
        return [
            {
                name: 'status',
                plugin: createStatusPlugin,
            },
        ];
    },
    contentComponent: function (_a) {
        var editorView = _a.editorView;
        var domAtPos = editorView.domAtPos.bind(editorView);
        return (React.createElement(WithPluginState, { plugins: {
                statusState: pluginKey,
            }, render: function (_a) {
                var _b = _a.statusState, statusState = _b === void 0 ? {} : _b;
                var showStatusPickerAt = statusState.showStatusPickerAt;
                if (showStatusPickerAt === null) {
                    return null;
                }
                var target = findDomRefAtPos(showStatusPickerAt, domAtPos);
                var statusNode = editorView.state.doc.nodeAt(showStatusPickerAt);
                if (!statusNode || statusNode.type.name !== 'status') {
                    return null;
                }
                var _c = statusNode.attrs, text = _c.text, color = _c.color, localId = _c.localId;
                return (React.createElement(StatusPicker, { autoFocus: statusState.autoFocus, target: target, defaultText: text, defaultColor: color, defaultLocalId: localId, onSelect: function (status) {
                        updateStatus(status)(editorView);
                    }, onTextChanged: function (status) {
                        updateStatus(status)(editorView);
                    }, closeStatusPicker: function () {
                        commitStatusPicker()(editorView);
                    }, onEnter: function () {
                        commitStatusPicker()(editorView);
                    } }));
            } }));
    },
}); };
var createQuickInsertMenuItem = function () { return ({
    title: 'Status',
    priority: 700,
    keywords: ['lozenge'],
    icon: function () { return React.createElement(LabelIcon, { label: "Status" }); },
    action: createStatus(),
}); };
var decorateWithPluginOptions = function (plugin, options) {
    if (options.menuDisabled === true) {
        return plugin;
    }
    plugin.pluginsOptions = {
        quickInsert: [createQuickInsertMenuItem()],
    };
    return plugin;
};
var statusPlugin = function (options) {
    return decorateWithPluginOptions(baseStatusPlugin(), options);
};
export default statusPlugin;
//# sourceMappingURL=index.js.map