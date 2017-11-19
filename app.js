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

mongoose.connect('mongodb://localhost:27017/graphql')

app.listen(3000, () => console.log('Servidor rodando na porta 3000'))