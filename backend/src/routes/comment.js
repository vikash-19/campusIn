const express =  require('express') ;
const { postComment, getComment } = require('../controllers/comment');


const router =  express.Router()  ;

router.post('/comment' , postComment) ;
router.get('/comment' , getComment) ;

module.exports =  router ;