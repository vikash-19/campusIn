const express = require('express');
const {Signup, Signin} = require("../controllers/user")

const router = express.Router();

router.post('/user' , Signup);
router.get('/user' , Signin) ;
module.exports = router;