const mongoose = require('mongoose');


const postSchema = mongoose.Schema({
    userId : {
        type : String ,
        required : true
    },
    contents : {
        type : String,
        required : true
    },
    upvotes : [
        {
            type : String
        }
    ],
    downvotes : [
        {
            type : String 
        }
    ],
    comments : [
        {
            type : mongoose.Schema.Types.ObjectId , ref : 'comment',
        }
    ]

} , {timestamps : true});


module.exports = mongoose.model('post' , postSchema);