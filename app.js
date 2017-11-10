const express = require('express')
const graphqlHTTP = require('express-graphql')
const mongoose = require('mongoose')

const app = express()

const schema = require('./graphql')

app.use('/graphql', graphqlHTTP(req => ({
    schema,
    pretty: true,
    graphql: true
})))

mongoose.connect('mongodb://mongo/graphql')

app.listen(8080, () => console.log('Servidor rodando na porta 8080'))