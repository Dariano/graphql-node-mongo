const { GraphQLNonNull, GraphQLBoolean} = require('graphql')
const blogPostInputType = require('../../types/blog-post-input');
const BlogPostModel = require('../../../models/blog-post')


module.exports = {
    type: GraphQLBoolean,
    args: {
        data: {
            nome: 'data',
            type: new GraphQLNonNull(blogPostInputType)
        }
    },
    async resolve: (root, params, options) => {
        const blogPostModel = new BlogPostModel(params.data)
        const newBlogPost = await blogPostModel.save()

        if(!newBlogPost) throw new Error('Erro ao adicionar novo blog post')

        return true
    }
}