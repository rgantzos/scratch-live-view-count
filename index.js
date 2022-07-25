const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const express = require('express')
const path = require('path');
const crypto = require('crypto');
const jsonfile = require('jsonfile');
var bodyParser = require('body-parser')
const busboy = require('busboy');
var cors = require('cors')
var jsonParser = bodyParser.json();

app = express();
const PORT = 3000;

app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({extend:true}));
app.engine('html', require('ejs').renderFile);
app.use(cors())
app.set('view engine', 'html');
app.set('views', __dirname);

app.get('/', function(req, res) {
  res.send('hello there')
})

app.listen(PORT, function (){
    console.log('Listening on Port 3000');
});
