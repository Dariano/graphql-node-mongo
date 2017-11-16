const {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID
  } = require('graphql')

module.exports = new GraphQLInputObjectType({
    name: 'BlogPostInput',
    fields: {
        _id: { type: GraphQLID },
        title: { type: GraphQLString },
        description: { type: GraphQLString }
    }
})