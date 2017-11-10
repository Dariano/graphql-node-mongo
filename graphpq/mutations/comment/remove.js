const { GraphQLNonNull, GraphQLID } = require('graphql')
const commentType = require('../../types/comment');
const getProjection = require('../../get-projection');
const comment = require('../../../models/comment');

module.exports = {
    type: commentType,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve: (root, params, options) => {
        const projection = getProjection(options.fieldASTs[0])
        const removedComment = await comment
            .findByIdAndRemove(params._id, {
                select: projection
            })
            .exec()

        if (!removedComment) throw new Error('Error removing blog post')

        return removedComment;

    }
}