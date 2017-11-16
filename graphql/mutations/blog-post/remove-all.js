const { GraphQLBoolean } = require('graphql')
const blogPost = require('../../../models/blog-post');

module.exports = {
    type: GraphQLBoolean,
    resolve: (root, params, options) => {
        return blogPost
            .remove({})
            .exec()
    }
}