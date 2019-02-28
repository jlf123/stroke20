import { Selection } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import { InitData, RemoteData, ConnectionData, PresenceData, TelepointerData, SendableSelection, CollabEditOptions } from './types';
export declare const handleInit: (initData: InitData, view: EditorView<any>, options?: CollabEditOptions | undefined) => void;
export declare const handleConnection: (connectionData: ConnectionData, view: EditorView<any>) => void;
export declare const handlePresence: (presenceData: PresenceData, view: EditorView<any>) => void;
export declare const applyRemoteData: (remoteData: RemoteData, view: EditorView<any>, options?: CollabEditOptions | undefined) => void;
export declare const applyRemoteSteps: (json: any[], userIds: string[] | undefined, view: EditorView<any>, options?: CollabEditOptions | undefined) => void;
export declare const handleTelePointer: (telepointerData: TelepointerData, view: EditorView<any>) => void;
export declare const getSendableSelection: (selection: Selection<any>) => SendableSelection;
