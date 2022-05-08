const mongoose = require('mongoose');

const resourceSchema = mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId , ref : "user",
        required : true
    },
    year : {
        type : Number,
        required : true
    },
    semester : {
        type : Number,
        required : true
    },
    branch : {
        type : String,
        required : true
    },
    subject : {
        type : String,
        required : true
    },
    resourceYear : {
        type : Number,
        required : true
    },
    materialType :{
        type : String,
        enum : ['Quantum' , 'Notes' , 'TestPaper'],
        default : "Notes"
    },
    dataLink : {
        type : String,
        required : true
    }

} , {timestamps : true});


module.exports = mongoose.model("resource" , resourceSchema);