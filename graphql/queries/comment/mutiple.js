const commentType = require('../../types/comment')
const getProjection = require('../../get-projection')
const CommentModel = require('../../../models/comment')

const {
    GraphQLList,
    GraphQLNonNull,
    GraphQLID
} = require('graphql')

module.exports = {
    type: new GraphQLList(commentType),
    args: {
        postId: {
            name: 'postId',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params, options) {
        const projection = getProjection(options.fieldASTs[0]);

        return CommentModel
            .find({
                postId: params.postId
            })
            .select(projection)
            .exec();
    }
}