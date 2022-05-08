const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
// Routes
const ResourceRoute = require('./routes/resources');
const UserRoute = require('./routes/user');

app.use(bodyParser.urlencoded({extended:true}));
let url = 'mongodb+srv://akm:<password>@cluster0.fdwj2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(url , {useNewUrlParser: true }).then(function() {
    console.log("databse connected");
});

app.use('/api' , ResourceRoute);
app.use('/api' , UserRoute);

app.get('/' , (req , res) => {
    res.send('hello');
})

app.listen(3000 , function() {
    console.log('Server is running on port 3000');
})