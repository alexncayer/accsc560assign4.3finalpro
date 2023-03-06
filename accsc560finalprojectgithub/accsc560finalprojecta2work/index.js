//Alex Cayer 3-22-2023 CSC 560 Final Project Attempt 2
//Purpose of final project: To create an application that can allow people to add in video game statistics like
//game title, publisher, USA price, ESRB rating, own game, beat main story, units sold, and my personal rating
//out of ten. In this case, I mostly focused on titles from Nintendo, sales figures on their games, and other information based
//on the Nintendo eShop page and other sales figures for third party companies releasing their games on 
//the Nintendo Switch. There is only one exception, which is a game on the Nintendo 3DS, 
//which has its own eShop. 

//Import Express
let express = require('express');

//Application can then start.
let app = express();

//Importing CORS down below
var cors = require('cors');

//Chooses specific port to use
var port = process.env.PORT || 8080;

//Welcome message for testing purposes
app.get('/', (req, res) => res.send('Welcome to Express Test'));

//Helps start application at port number
app.listen(port, function () {
    console.log("Running accsc560projecta2 on Port" + port);
})

//Look over parts regarding application/json down below
app.use(express.json())
app.use(express.urlencoded({ extended: true})) //"parsing application/x-www-form-urlencoded" (Timalsina, 2020).

//Utilizing CORS down below. In green until ready to use.
app.use(cors());

//Import routes api itself
let apiRoutes = require("./routes")

//Utilzes routes above for application
app.use('/api', apiRoutes)

//Imports body parser
let bodyParser = require('body-parser');
//imports mongoose package
let mongoose = require('mongoose');

//sets up bodyparser
app.use(bodyParser.urlencoded ({
    extended: true
}));

//links up with mongoose.
const dbPath = 'mongodb://127.0.0.1/accsc560finalprojecta2work';
const options = {useNewUrlParser: true, useUnifiedTopology: true}
const mongo = mongoose.connect(dbPath, options);


mongo.then(() => {
    console.log('connected');
}, error => {
    console.log(error, 'error');
})