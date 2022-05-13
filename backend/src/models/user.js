const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        type : String  ,
        trim : true ,
        required : true
    },
    course : {
        type : String , 
        trim : true ,
        required: true
    },
    year : {
        type : String  ,
        trim : true ,
        required : true
    },
    branch: {
        type : String,
        trim : true  
    },
    userId : {
        type : String  ,
        trim : true ,
        required : true,
        unique : true 
    },
    contactNumber : {
        type : String ,
        trim : true ,
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
    postIds : [
        {
            type : mongoose.Schema.Types.ObjectId , ref : 'post'
        }
    ],
    commentIds : [
        {
            type : mongoose.Schema.Types.ObjectId , ref : 'comment'
        }
    ],

    productIds : [
        {
            type : mongoose.Schema.Types.ObjectId , ref : 'product'
        }
    ]
} , {timestamps : true});



module.exports = mongoose.model('user' , userSchema);