const User = require('../models/user') ;
const Product = require('../models/product') ;
const Post = require('../models/post') ;


exports.sellProduct  = function(req , res){

    let tempUserId = req.body.userId 

    const newProduct =  new Product({
        userId : req.body.userId ,
        productName : req.body.productName,
        category : req.body.category,
        price : req.body.price,
        description : req.body.description
    }) 

    let productId
    newProduct.save(function(err , data){
        if(err){
            res.send(err) ;
        }
        else{

            productId =  data.id ;
            res.send(data) ;
            const newPost  = new Post({
                userId :tempUserId,
                contents : "Hey there, a new item has been listed! Please checkout! " 
            });
        
            newPost.save() ;

            User.findOne({userId : tempUserId},function(err,foundList){
                foundList.productIds.push(productId);
                foundList.save();
            });
        }
    })

// Adding a new Post of selling a product on the3 behalf of the user 


}
