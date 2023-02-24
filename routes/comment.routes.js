const Router = require('express')
const router = new Router()
const CommentController = require('../controller/comment.controller')

router.post('/comment', CommentController.createComment)
router.get('/comment', CommentController.getComment)

module.exports = router