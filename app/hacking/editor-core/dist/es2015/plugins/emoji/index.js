import * as React from 'react';
import EmojiIcon from '@atlaskit/icon/glyph/editor/emoji';
import { emoji, emojiQuery } from '@atlaskit/adf-schema';
import { WithProviders } from '@atlaskit/editor-common';
import { messages } from '../insert-block/ui/ToolbarInsertBlock';
import { createPlugin, emojiPluginKey } from './pm-plugins/main';
import inputRulePlugin from './pm-plugins/input-rules';
import keymap from './pm-plugins/keymap';
import { inputRulePlugin as asciiInputRulePlugin } from './pm-plugins/ascii-input-rules';
import ToolbarEmojiPicker from './ui/ToolbarEmojiPicker';
import EmojiTypeAhead from './ui/EmojiTypeAhead';
var emojiPlugin = {
    nodes: function () {
        return [{ name: 'emoji', node: emoji }];
    },
    marks: function () {
        return [{ name: 'emojiQuery', mark: emojiQuery }];
    },
    pmPlugins: function () {
        return [
            {
                name: 'emoji',
                plugin: function (_a) {
                    var providerFactory = _a.providerFactory, portalProviderAPI = _a.portalProviderAPI;
                    return createPlugin(portalProviderAPI, providerFactory);
                },
            },
            {
                name: 'emojiInputRule',
                plugin: function (_a) {
                    var schema = _a.schema;
                    return inputRulePlugin(schema);
                },
            },
            { name: 'emojiKeymap', plugin: function (_a) {
                    var schema = _a.schema;
                    return keymap(schema);
                } },
            {
                name: 'emojiAsciiInputRule',
                plugin: function (_a) {
                    var schema = _a.schema, providerFactory = _a.providerFactory;
                    return asciiInputRulePlugin(schema, providerFactory);
                },
            },
        ];
    },
    contentComponent: function (_a) {
        var editorView = _a.editorView, providerFactory = _a.providerFactory, popupsMountPoint = _a.popupsMountPoint, popupsBoundariesElement = _a.popupsBoundariesElement, popupsScrollableElement = _a.popupsScrollableElement;
        var renderNode = function (providers) {
            return (React.createElement(EmojiTypeAhead, { editorView: editorView, pluginKey: emojiPluginKey, emojiProvider: providers.emojiProvider, popupsMountPoint: popupsMountPoint, popupsBoundariesElement: popupsBoundariesElement }));
        };
        return (React.createElement(WithProviders, { providerFactory: providerFactory, providers: ['emojiProvider'], renderNode: renderNode }));
    },
    secondaryToolbarComponent: function (_a) {
        var editorView = _a.editorView, eventDispatcher = _a.eventDispatcher, providerFactory = _a.providerFactory, appearance = _a.appearance, popupsMountPoint = _a.popupsMountPoint, popupsBoundariesElement = _a.popupsBoundariesElement, popupsScrollableElement = _a.popupsScrollableElement, disabled = _a.disabled;
        var renderNode = function (providers) {
            // numFollowingButtons must be changed if buttons are added after ToolbarEmojiPicker to the message editor
            return (React.createElement(ToolbarEmojiPicker, { editorView: editorView, pluginKey: emojiPluginKey, emojiProvider: providers.emojiProvider, numFollowingButtons: 4, isReducedSpacing: true, isDisabled: disabled, popupsMountPoint: popupsMountPoint, popupsBoundariesElement: popupsBoundariesElement, popupsScrollableElement: popupsScrollableElement }));
        };
        return (React.createElement(WithProviders, { providerFactory: providerFactory, providers: ['emojiProvider'], renderNode: renderNode }));
    },
    pluginsOptions: {
        quickInsert: function (_a) {
            var formatMessage = _a.formatMessage;
            return [
                {
                    title: formatMessage(messages.emoji),
                    priority: 500,
                    icon: function () { return React.createElement(EmojiIcon, { label: formatMessage(messages.emoji) }); },
                    action: function (insert, state) {
                        var mark = state.schema.mark('emojiQuery');
                        var emojiText = state.schema.text(':', [mark]);
                        return insert(emojiText);
                    },
                },
            ];
        },
    },
};
export default emojiPlugin;
//# sourceMappingURL=index.js.map