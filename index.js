const path = require('path');
const expressEdge = require('express-edge');
const express = require('express');
const app = new express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Post = require('./database/models/post');

mongoose.connect('mongodb://localhost/unapologetically');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("Mongoose is running");
});

exports.test = function(req,res) {
  res.render('test');
};

app.use(express.static('public'));
app.use(expressEdge.engine);
app.set('views', __dirname + '/views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const storePost = require("./middleware/storePost")
app.use('/story/store', storePost)

app.get('/', (req,res) => {
	res.sendFile(path.resolve(__dirname,'pages/index.html'));
});

app.get('/about', (req,res) => {
	res.sendFile(path.resolve(__dirname,'pages/about.html'));
});

app.get('/story', async(req,res) => {
	const posts = await Post.find({})
	res.render('story', {
		posts
	})
});

app.post('/story/store', (req,res) => {
	var body = req.body;
	Post.create(req.body,(error,post) => {
		res.redirect('/story')
	})
});

app.get('/quiz', (req,res) => {
	res.sendFile(path.resolve(__dirname,'pages/quiz.html'));
})

app.get('/empathetic',(req,res) => {
	res.sendFile(path.resolve(__dirname,'pages/empathetic.html'));
});

app.listen(4000, ()=>{
	console.log("server is running on port 4000");
});