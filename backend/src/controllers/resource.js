const Resource = require('../models/resource');

exports.addResource = (req , res) => {
    const newReso = new Resource({
        userId : req.body.userId,
        year : req.body.year,
        branch : req.body.branch ,
        semester : req.body.semester,
        subject : req.body.subject,
        resourceLink : 'sdhvv' , //from other server
        description : req.body.description
    });
    newReso.save((err , data) => {
        if(err) {
            res.send(err);
        } else {
            res.send(data);
        }
    })
}