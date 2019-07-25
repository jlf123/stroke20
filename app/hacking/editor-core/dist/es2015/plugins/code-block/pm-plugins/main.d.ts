import { EditorState, Plugin, PluginKey } from 'prosemirror-state';
export declare type CodeBlockState = {
    element?: HTMLElement;
    toolbarVisible?: boolean | undefined;
};
export declare const getPluginState: (state: EditorState<any>) => CodeBlockState;
export declare const setPluginState: (stateProps: Object) => (state: EditorState<any>, dispatch: (tr: any) => void) => boolean;
export declare type CodeBlockStateSubscriber = (state: CodeBlockState) => any;
export declare const pluginKey: PluginKey<any>;
export declare const createPlugin: ({ portalProviderAPI, dispatch, providerFactory, }: {
    portalProviderAPI: any;
    dispatch: any;
    providerFactory: any;
}) => Plugin<any>;