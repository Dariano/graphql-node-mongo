const { GraphQLList, GraphQLID, GraphQLNonNull } = require('graphql')
const blogPostType = require('../../types/blog-post')
const getProjection = require('../../get-projection')
const BlogPostModel = require('../../../models/blog-post')

module.exports = {
    type: blogPostType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params, options) {
        const projection = getProjection(options.fieldASTs[0])

        return BlogPostModel
            .findById(params.id)
            .select(projection)
            .exec()
    }
}