const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        type : String  ,
        required : true
    },
    course : {
        type : String , 
        required: true
    },
    year : {
        type : String  ,
        required : true
    },
    branch: {
        type : String 
    },
    email : {
        type : String  ,
        required : true
    },
    contactNumber : {
        type : String ,
        required : true, 
        minLength : 10,
        maxLength : 10
    },
    contribution : {
        type : Number,
        default : 0
    },
    profilePicture : {
        type : String
    },
    posts : [
        {
            postId : {
                type : mongoose.Schema.Types.ObjectId , ref : 'post'
            },
            upvotes : Number,
            downvotes : Number
        }
    ],
    comments : [
        {
            commentId : {
                type : mongoose.Schema.Types.ObjectId , ref : 'comment'
            },
            upvotes : Number,
            downvotes : Number
        }
    ]
} , {timestamps : true});



module.exports = mongoose.model('user' , userSchema);