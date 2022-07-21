
const Post = require('../models/post'); 
const User = require('../models/user') ;

const cloudinary = require('cloudinary');

cloudinary.config({ 
    cloud_name: 'campusin', 
    api_key: '612178527339326', 
    api_secret: 'euqR2dspSvjHzxkvOhgAVEmP0CA' 
  });

const AddData = (req , contentFile) => {

    let postId;
    const newPost  = new Post({
        userId : req.body.userId ,
        contents : req.body.contents ,
        files : contentFile
    });

    newPost.save(function(err , data){
        if(err){
            console.log(err);
            return -1;
        }
        else{
            postId = data._id ;
            
            User.findOne({userId : req.body.userId},function(error,foundList){
                if(foundList !== null) {
                    foundList.postIds.push(postId);
                    foundList.save();
                }
            });

            return 1;
        }
    })
    
}

exports.createPost = async function(req , res){

    if(req.file && (req.file.mimetype).includes('image')) {
        cloudinary.v2.uploader.upload(req.file.path,
        { public_id: req.file.filename }, 
        function(error, result) {
            let savedData = AddData(req , result.url);
            if(savedData == -1) {
                res.status(500).send('Error Occured');
            } else {
                res.status(200).send('Successful')
            }
        });
    }
    else if(req.file && req.file.mimetype.includes('video')) {
        // use cloudinary to upload video
    }
    
}


exports.getPost = (req ,  res) => {
    let start = req.query.next;
    let end = start + 10;
    Post.find({} , (err , data)=>{
        if(err){
            res.status(500).send(err);
        } else {
            let n = data.length;
            if(start >= n) {
                res.status(200).send([]);
            } else {
                if(n < end) {
                    end = n;
                }
                let requiredData = [];
                for(let i = start ; i < end ; i++)
                {
                    requiredData.push(data[i]);
                }
                res.status(200).send(requiredData);
            }
        }
    })
}
