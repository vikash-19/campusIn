
const Post = require('../models/post'); 
const User = require('../models/user') ;

exports.createPost =  function(req , res){

    let postId 
    const newPost  = new Post({
        userId : req.body.userId ,
        contents : req.body.contents 
    });

    newPost.save(function(err , data){
        if(err){
            res.send(err) ;
        }
        else{
            postId =  data.id ;
            res.send(data) ;
        }
    })


    User.findOne({userId : req.body.userId},function(err,foundList){
        foundList.postIds.push(postId);
        foundList.save();
      });


}


exports.getPost = (req ,  res) => {
    Post.find({} , (err , data)=>{
        if(err){
            res.send(err) ;
        }
        else{
            res.send(data) ;
        }
    })
}
