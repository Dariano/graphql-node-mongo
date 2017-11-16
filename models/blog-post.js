const mongoose = require('mongoose')

const blogPostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
})

module.exports = mongoose.model('BlogPost', blogPostSchema)