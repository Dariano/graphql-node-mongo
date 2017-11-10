const { GraphQLNonNull, GraphQLBoolean} = require('graphql')
const commentInput = require('../../types/comment-input');
const comment = require('../../../models/comment');

module.exports = {
    type: GraphQLBoolean,
    args: {
        data: {
            name: 'data',
            type: GraphQLNonNull(commentInput)
        }
    },
    async resolve: (root, params, options) => {
        const commentModel = new comment(params.data)
        const newComment = await comment.save()

        if(!newComment) throw new Error('Erro ao adicionar um novo comentário')

        return true
    }
}