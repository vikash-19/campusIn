const mongoose = require('mongoose');


const productSchema = mongoose.Schema({
    UserId : {
        type : mongoose.Schema.Types.ObjectId , ref : 'user',
        required : true
    },
    name : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    soldState : {
        type : Boolean,
        default : true
    }


} , {timestamps : true});


module.exports = mongoose.model('product' , productSchema);