const mongoose = require('mongoose');


const postSchema = mongoose.Schema({
    UserId : {
        type : mongoose.Schema.Types.ObjectId , ref : 'user',
        required : true
    },
    contents : {
        type : String,
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
    ],
    comments : [
        {
            type : mongoose.Schema.Types.ObjectId , ref : 'comment',
        }
    ]

} , {timestamps : true});


module.exports = mongoose.model('post' , postSchema);