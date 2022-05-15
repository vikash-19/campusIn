const express =  require('express') ;
const { postComment } = require('../controllers/comment');


const router =  express.Router()  ;

router.post('/comment' , postComment) ;

module.exports =  router ;