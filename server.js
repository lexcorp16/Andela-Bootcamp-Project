var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
	//This is the URL that displays the user signin page
    res.send("Hello Welcome to QuizApp")
});

app.post('/', function(req, res){
	//This is the URL that takes user login information and process it
	//When the user successfully signs in, it redirects the user to the quiz page
	//And redirects the user to the login page if signin fails
});

app.get('/register', function(req, res){
	//This is the URL that displays the user's registration page
});

app.post('/register', function(req, res){
	//This is the URL that the user submit registration page to.
});

app.get('/getquiz', function(req, res){
	//This is the quiz page. This page requires user authentication
	//Once is user has been successfully authenticated, it displays the question
	
});

app.post('submitquiz', function(req, res){
	//When a user is done with the quiz, this is the page the user submits to
	//This page gets the user's answers, processes and send back to result of the quiz
});

app.listen(3000, function () {
  console.log('Quizz App Listening on port 3000!')
})