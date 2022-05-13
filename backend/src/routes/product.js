const express = require('express');
const { sellProduct } = require('../controllers/product');

const router = express.Router();

router.get("/product" , (req , res)=>{
    res.send("product") ;
})

router.post("/product" , sellProduct) ;

module.exports = router;
