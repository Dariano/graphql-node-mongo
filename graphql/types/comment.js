const {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLID
  } = require('graphql')

module.exports = new GraphQLObjectType({
    name: 'Comment',
    fields: {
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        postId: {
            type: new GraphQLNonNull(GraphQLID)
        },
        text: {
            type: GraphQLString
        }
    }
})