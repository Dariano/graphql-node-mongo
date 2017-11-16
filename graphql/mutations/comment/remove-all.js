const { GraphQLBoolean } = require('graphql')

const CommentModel = require('../../../models/comment');

module.exports = {
    type: GraphQLBoolean,
    resolve: (root, params, options) => {
        return CommentModel.remove().exec()
    }
}