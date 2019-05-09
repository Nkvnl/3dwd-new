var express = require("express"); // call express
var bodyParser = require("body-parser");
var nodemailer = require("nodemailer");
var app = express();
var path = require('path');
var Project = require('./models/project');
var mongoose = require('mongoose');
var robots = require('express-robots-txt');
var sitemap = require('express-sitemap');
var expressHbs = require('express-handlebars');

mongoose.connect('mongodb://niek:projects1@ds231956.mlab.com:31956/projects');
app.set('port', (process.env.PORT || 4034))
app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');
app.use(express.static("public"));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(robots({ UserAgent: '*', Disallow: '' }))

//MAIN

var project = {
       name:'Liefde geeft Licht',
       img:'../img/lgl.png',
       date:'Juni 2018',
       desc:'Dit is een extensie van de website van Lied van de Merel.',
       focus:'10% Backend / 90% Frontend',
       link:'https://www.liefdegeeftlicht.nl',
       tech:'HTML CSS JavaScript Node.js NGINX',
}

// addProject(project)

function addProject(project){
       var newProject =  new Project({
              name:project.name,
              img:project.img,
              date:project.date,
              desc:project.desc,
              focus:project.focus,
              link:project.link,
              tech:project.tech
       })
       newProject.save((err,res)=>{
              console.log(err ? err : res)
       })
}

app.get('/', function(req, res, next){
       res.render('main/index') 
})

app.get('/portfolio', function(req, res, next){
       Project.find({},(err,projects) => {
              res.render('main/portfolio',{projects:projects}) 
       })
})

app.get('/contact', function(req, res, next){
       res.render('main/contact') 
})

app.get('/overig', function(req, res, next){
       res.render('main/overig') 
})

app.listen(app.get('port'), function() {
    console.log('starting');
});
