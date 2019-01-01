var express = require("express"); // call express
var bodyParser = require("body-parser");
var nodemailer = require("nodemailer");
var app = express();
var path = require('path');
var robots = require('express-robots-txt');
var sitemap = require('express-sitemap');
var expressHbs = require('express-handlebars');

app.set('port', (process.env.PORT || 3022))
app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');
app.use(express.static("public"));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(robots({ UserAgent: '*', Disallow: '' }))

app.get('/', function(req, res, next){
       res.render('main/index') 
})

app.get('/over-3dwd', function(req, res, next){
       res.render('main/over') 
})

app.get('/diensten', function(req, res, next){
       res.render('main/diensten') 
})

app.get('/portfolio', function(req, res, next){
       res.render('main/portfolio') 
})

app.get('/contact', function(req, res, next){
       res.render('main/contact') 
})

app.get('/blog', function(req, res, next){
       res.render('main/blog') 
})

app.listen(app.get('port'), function() {
    console.log('starting');
});
