const mongoose = require('mongoose');

const resourceSchema = mongoose.Schema({
    userId : {
        type : String,
        required : true
    },
    year : {
        type : String,
        required : true
    },
    semester : {
        type : String ,
        requiured : true
    },
    branch : {
        type : String ,
        required : true
    },
    subject : {
        type : String ,
        required : true
    },
    materialType :{
        type : String,
        enum : ['Quantum' , 'Notes' , 'TestPaper' , 'Other'],
        default : "Other"
    },
    resourceLink : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    }

} , {timestamps : true});


module.exports = mongoose.model("resource" , resourceSchema);