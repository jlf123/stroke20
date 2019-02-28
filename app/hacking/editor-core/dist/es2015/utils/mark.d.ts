import { Node, Mark, MarkType } from 'prosemirror-model';
import { SelectionRange, EditorState, Transaction } from 'prosemirror-state';
import { JSONDocNode } from '@atlaskit/editor-json-transformer';
export declare const isMarkAllowedInRange: (doc: Node<any>, ranges: SelectionRange<any>[], type: MarkType<any>) => boolean;
export declare const isMarkExcluded: (type: MarkType<any>, marks?: Mark<any>[] | null | undefined) => boolean;
export declare const removeBlockMarks: (state: EditorState<any>, marks: (MarkType<any> | undefined)[]) => Transaction<any> | undefined;
export declare function removeQueryMarksFromJSON(json: JSONDocNode): JSONDocNode;
