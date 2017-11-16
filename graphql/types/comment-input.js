const {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull
  } = require('graphql')

module.exports = new GraphQLInputObjectType({
    name: 'CommentInput',
    fields: {
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        postId: {
            type: new GraphQLNonNull(GraphQLID)
        },
        text: {
            type: new GraphQLNonNull(GraphQLString)
        }
    }
})