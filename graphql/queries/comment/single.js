const {
    GraphQLList,
    GraphQLID,
    GraphQLNonNull
  } = require('graphql')

const { Types } = require('mongoose')

const commentType = require('../../types/comment')
const getProjection = require('../../get-projection')
const CommentModel = require('../../../models/comment')

module.exports = {
    type: commentType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params, options) {
        const projection = getProjection(options.fieldASTs[0]);

        return CommentModel
            .findById(params.id)
            .select(projection)
            .exec();
    }
}