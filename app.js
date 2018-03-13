var express = require('express');

var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));


app.get('/', function(req, res) {
  res.render('index');
});

app.get('/banner.jpg', function (req, res) {
    res.sendFile(path.resolve('assets/banner.jpg'));
});

app.get('/logo.jpg', function (req, res) {
    res.sendFile(path.resolve('assets/logo.jpg'));
});


app.get('/stars.png', function (req, res) {
    res.sendFile(path.resolve('assets/stars.png'));
});

app.get('/allcourses', function(req, res) {
  res.render('contact')
});

app.get('/contact', function(req, res) {
  res.sendFile(__dirname + '/contact.html')
});

app.get('/profile/:name', function(req, res) {
  res.render('profile');
});

app.listen(1200);
console.log('listining to port 1200');
