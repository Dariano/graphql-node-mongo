const {GraphQLNonNull, GraphQLID} = require('graphql')
const blogPostType = require('../../types/blog-post');
const BlogPostModel = require('../../../models/blog-post');
const getProjection = require('../../get-projection');


module.exports = {
    type: blogPostType,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    async resolve: (root, params, options) => {
        const projection = getProjection(options.fieldASTs[0])
        const removedBlogPost = await BlogPostModel.findByIdRemove(params._id,  {
            select: projection
        })
        .exec()

        if(!removedBlogPost) throw new Error('Erro ao remover o blog post')

        return removedBlogPost
    }
}