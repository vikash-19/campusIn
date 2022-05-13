
const User = require('../models/user');



exports.Signup = function(req , res) {


    console.log(req.body);
    const newUser = new User({
        name : req.body.name,
        course : req.body.course,
        year : req.body.year,
        branch : req.body.branch,
        userId : req.body.email.split("@")[0],
        contactNumber : req.body.contact
    });
    newUser.save(function(err , _user) {
        if(err) {
            res.send(err); // msg : please try again later
        } else {
            res.send({user : _user}); // direct to post page
        }
    })
}

exports.Signin = function(req , res){
    let userId = req.query.email.split("@")[0] ;
    User.find({userId } , function(error , result){
        if(error){
            res.send(error.msg) ;
        }
        else{
            res.send(result)
        }
    })
};
