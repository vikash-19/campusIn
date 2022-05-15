const express = require('express');
const { addResource } = require('../controllers/resource');

const router = express.Router();

// router.get('/post' , getPost) ;

router.post('/resources' , addResource) ;

module.exports = router;
