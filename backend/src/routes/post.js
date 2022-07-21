const express = require('express');
const multer = require('multer');

  const upload = multer({dest : "./uploads"});

const { createPost, getPost } = require('../controllers/post');
const router = express.Router();

router.get('/post' , getPost) ;

router.post('/post' , upload.single('avatar') , createPost) ;

module.exports = router;
