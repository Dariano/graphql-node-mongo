const {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLID
  } = require('graphql')

module.exports = new GraphQLObjectType({
    name: 'BlogPost',
    fields: {
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        title: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString
        }
    }
})