const { GraphQLNonNull, GraphQLBoolean} = require('graphql')
const commentInputType = require('../../types/comment-input');
const CommentModel = require('../../../models/comment');

module.exports = {
    type: GraphQLBoolean,
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(commentInputType)
        }
    },
    async resolve(root, params, options) {
        const commentModel = new CommentModel(params.data)
        const newComment = await comment.save()

        if(!newComment) throw new Error('Erro ao adicionar um novo comentário')

        return true
    }
}