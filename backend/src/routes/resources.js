const express = require('express');
const { addResource, getResources } = require('../controllers/resource');

const router = express.Router();

// router.get('/post' , getPost) ;

router.post('/resources' , addResource) ;
router.get("/resources",getResources)
module.exports = router;
