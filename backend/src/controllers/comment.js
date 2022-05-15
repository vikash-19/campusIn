const Comment  =  require('../models/comment') ;
const user = require('../models/user');


exports.postComment =  function(req , res){
    // console.log("comment route is working  ")
    const newComment  =  new Comment({
        userId : req.body.userId ,
        postId : req.body.postId ,
        content : req.body.content
    })

    newComment.save(function(err , data){
        if(err){
            res.send(err) ;
        }
        else{
            user.findOne({userId : req.body.userId} , function(err , foundList){
                foundList.commentIds.push(data.id) ;
                foundList.save()  ;
            }) ;
            res.send(data) ;
        }
    })
}

exports.getComment =  function(req , res){
    let tempPostId =  req.query.postId ;
    Comment.find({postId : tempPostId } , function(err , data){
        if(err){
            res.send(err) ;
        }
        else{
            res.send(data) ;
        }
    })
}




