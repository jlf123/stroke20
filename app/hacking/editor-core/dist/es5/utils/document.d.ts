import { Node, Schema } from 'prosemirror-model';
import { Transaction } from 'prosemirror-state';
/**
 * Checks if node is an empty paragraph.
 */
export declare function isEmptyParagraph(node?: Node | null): boolean;
/**
 * Returns false if node contains only empty inline nodes and hardBreaks.
 */
export declare function hasVisibleContent(node: Node): boolean;
/**
 * Checks if a node has any content. Ignores node that only contain empty block nodes.
 */
export declare function isEmptyNode(node?: Node): boolean;
/**
 * Checks if a node looks like an empty document
 */
export declare function isEmptyDocument(node: Node): boolean;
export declare function processRawValue(schema: Schema, value?: string | object): Node | undefined;
export declare const getStepRange: (transaction: Transaction<any>) => {
    from: number;
    to: number;
} | null;
