const mongoose = require('mongoose');


const productSchema = mongoose.Schema({
    userId : {
        type  : String ,
        required : true
    },

    productName : {
        type : String,
        required : true
    },

    category : {
        type : String,
        required : true  
    },


    price : {
        type : Number,
        required : true
    },

    soldState : {
        type : Boolean,
        default : false
    },

    description : {
        type : String 
    } ,

    images : [
        {
            type : String 
        }
    ]

} , {timestamps : true});


module.exports = mongoose.model('product' , productSchema);