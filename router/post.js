/**
 * 文章相关的接口
 */
/**
 * 用户相关的接口
 */
 const express = require('express')
 const router = express.Router()
 const postController = require('../controller/post-controller')
 
 
 // publish a post
router.post('/publish',postController.publish())

// get all posts
router.post('/all',postController.all())

// get exactly post
router.post('/query',postController.query())
 
 
 module.exports = router