const blogPost = require('./blog-post');
const comment = require('./comment')

module.exports = {
    ...blogPost,
    ...comment
}