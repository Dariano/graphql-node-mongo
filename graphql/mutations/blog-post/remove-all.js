const { GraphQLBoolean } = require('graphql')
const BlogPostModel = require('../../../models/blog-post');

module.exports = {
    type: GraphQLBoolean,
    resolve: (root, params, options) => {
        return BlogPostModel
            .remove({})
            .exec()
    }
}