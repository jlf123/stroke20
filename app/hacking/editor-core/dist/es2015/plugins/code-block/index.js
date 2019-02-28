import * as React from 'react';
import EditorCodeIcon from '@atlaskit/icon/glyph/editor/code';
import { codeBlock } from '@atlaskit/adf-schema';
import { createPlugin } from './pm-plugins/main';
import { getToolbarConfig } from './toolbar';
import keymap from './pm-plugins/keymaps';
import ideUX from './pm-plugins/ide-ux';
import { messages } from '../block-type/types';
var codeBlockPlugin = function (options) {
    if (options === void 0) { options = {}; }
    return ({
        nodes: function () {
            return [{ name: 'codeBlock', node: codeBlock }];
        },
        pmPlugins: function () {
            return [
                { name: 'codeBlock', plugin: createPlugin },
                {
                    name: 'codeBlockIDEKeyBindings',
                    plugin: function () { return (options.enableKeybindingsForIDE ? ideUX : undefined); },
                },
                {
                    name: 'codeBlockKeyMap',
                    plugin: function (_a) {
                        var schema = _a.schema;
                        return keymap(schema);
                    },
                },
            ];
        },
        pluginsOptions: {
            quickInsert: function (_a) {
                var formatMessage = _a.formatMessage;
                return [
                    {
                        title: formatMessage(messages.codeblock),
                        priority: 700,
                        icon: function () { return (React.createElement(EditorCodeIcon, { label: formatMessage(messages.codeblock) })); },
                        action: function (insert, state) {
                            var schema = state.schema;
                            return insert(schema.nodes.codeBlock.createChecked());
                        },
                    },
                ];
            },
            floatingToolbar: getToolbarConfig,
        },
    });
};
export default codeBlockPlugin;
//# sourceMappingURL=index.js.map