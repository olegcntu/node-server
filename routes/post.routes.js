const Router = require('express')
const router = new Router()
const PostController = require('../controller/post.controller')

router.post('/post', PostController.createPost)
router.get('/post/:id', PostController.getPostsById)
router.get('/post', PostController.getPosts)
router.delete('/post',PostController.deletePostById)

module.exports = router