const { GraphQLList } = require('graphql')
const blogPostType = require('../../types/blog-post')
const getProjection = require('../../get-projection')
const BlogPostModel = require('../../../models/blog-post')

module.exports = {
    type: new GraphQLList(blogPostType),
    args: {},
    resolve(root, params, options) {
        const projection = getProjection(options.fieldASTs[0]);

        return BlogPostModel
            .find()
            .select(projection)
            .exec();
    }
};