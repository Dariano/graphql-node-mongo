const {GraphQLNonNull, GraphQLID} = require('graphql')
const blogPost = require('../../types/blog-post');
const blogPost = require('../../../models/blog-post');
const getProjection = require('../../get-projection');


module.exports = {
    type: blogPost,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    async resolve: (root, params, options) => {
        const projection = getProjection(options.fieldASTs[0])
        const removedBlogPost = await blogPost.findByIdRemove(params._id,  {
            select: projection
        })
        .exec()

        if(!removedBlogPost) throw new Error('Erro ao remover o blog post')

        return removedBlogPost
    }
}