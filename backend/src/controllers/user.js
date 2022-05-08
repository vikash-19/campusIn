
const User = require('../models/user');



exports.Signup = function(req , res) {
    //console.log(req.body);
    const newUser = new User({
        name : req.body.name,
        course : req.body.course,
        year : req.body.year,
        branch : req.body.branch,
        email : req.body.email,
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
