const mongoose = require('mongoose');


const commentSchema = mongoose.Schema({
    userId : {
        type : String,
        required : true
    },
    postId : {
        type : mongoose.Schema.Types.ObjectId , ref : 'post',
        required : true
    },
    content : {
        type : String , 
        required : true
    },
    upvotes : [
        {
            type : mongoose.Schema.Types.ObjectId , ref : 'user'
        }
    ],
    downvotes : [
        {
            type : mongoose.Schema.Types.ObjectId , ref : 'user'
        }
    ]

} , {timestamps : true});


module.exports = mongoose.model('comment' , commentSchema);