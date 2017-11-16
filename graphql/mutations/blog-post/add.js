const { GraphQLNonNull, GraphQLBoolean} = require('graphql')
const blogPostInput = require('../../types/blog-post-input');
const blogPost = require('../../../models/blog-post')


module.exports = {
    type: GraphQLBoolean,
    args: {
        data: {
            nome: 'data',
            type: new GraphQLNonNull(blogPostInput)
        }
    },
    async resolve: (root, params, options) => {
        const blogPostModel = new blogPostModel(params.data)
        const newBlogPost = await blogPostModel.save()

        if(!newBlogPost) throw new Error('Erro ao adicionar novo blog post')

        return true
    }
}