const express = require('express');
const { addResources } = require('../controllers/resources');


const router = express.Router();


router.get('/resources' , addResources);

module.exports = router;