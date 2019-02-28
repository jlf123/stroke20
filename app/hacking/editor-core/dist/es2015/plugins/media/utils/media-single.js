import { Fragment } from 'prosemirror-model';
import { isImage } from '../../../utils';
import { insertNodesEndWithNewParagraph, shouldAppendParagraphAfterBlockNode, } from '../../../commands';
import { copyOptionalAttrsFromMediaState } from '../utils/media-common';
import { safeInsert } from 'prosemirror-utils';
export var insertMediaAsMediaSingle = function (view, node) {
    var state = view.state, dispatch = view.dispatch;
    var _a = state.schema.nodes, mediaSingle = _a.mediaSingle, media = _a.media;
    if (!mediaSingle) {
        return false;
    }
    // if not an image type media node
    if (node.type !== media ||
        (!isImage(node.attrs.__fileMimeType) && node.attrs.type !== 'external')) {
        return false;
    }
    var mediaSingleNode = mediaSingle.create({}, node);
    var nodes = [mediaSingleNode];
    return insertNodesEndWithNewParagraph(nodes)(state, dispatch);
};
export var insertMediaSingleNode = function (view, mediaState, collection) {
    if (collection === undefined) {
        return false;
    }
    var state = view.state, dispatch = view.dispatch;
    var grandParent = state.selection.$from.node(-1);
    var node = createMediaSingleNode(state.schema, collection)(mediaState);
    var shouldSplit = grandParent && grandParent.type.validContent(Fragment.from(node));
    if (shouldSplit) {
        insertNodesEndWithNewParagraph([node])(state, dispatch);
    }
    else {
        dispatch(safeInsert(shouldAppendParagraphAfterBlockNode(view.state)
            ? Fragment.fromArray([node, state.schema.nodes.paragraph.create()])
            : node)(state.tr));
    }
    return true;
};
export var createMediaSingleNode = function (schema, collection) { return function (mediaState) {
    var id = mediaState.id, dimensions = mediaState.dimensions, _a = mediaState.scaleFactor, scaleFactor = _a === void 0 ? 1 : _a;
    var _b = dimensions || {
        height: undefined,
        width: undefined,
    }, width = _b.width, height = _b.height;
    var _c = schema.nodes, media = _c.media, mediaSingle = _c.mediaSingle;
    var mediaNode = media.create({
        id: id,
        type: 'file',
        collection: collection,
        width: width / scaleFactor,
        height: height / scaleFactor,
        __key: id,
    });
    copyOptionalAttrsFromMediaState(mediaState, mediaNode);
    return mediaSingle.create({}, mediaNode);
}; };
//# sourceMappingURL=media-single.js.map