const { GraphQLBoolean } = require('graphql')

const comment = require('../../../models/comment');

module.exports = {
    type: GraphQLBoolean,
    resolve: (root, params, options) => {
        return comment.remove().exec()
    }
}