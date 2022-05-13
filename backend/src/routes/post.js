const express = require('express');
const { createPost, getPost } = require('../controllers/post');
const router = express.Router();

router.get('/post' , getPost) ;

router.post('/post' , createPost) ;

module.exports = router;
