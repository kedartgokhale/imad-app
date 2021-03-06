var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    artical1:{
    heading:'Artical 1!!',
    content:
    `<p class="a2">
            this is the course in which students willl learn basic web development.this is the course in which students willl learn basic web development.this is the course in which students willl learn basic web development.this is the course in which students willl learn basic web development.this is the course in which students willl learn basic web development.
        </p>
      
         <p>
            this is the course in which students willl learn basic web development.this is the course in which students willl learn basic web development.this is the course in which students willl learn basic web development.this is the course in which students willl learn basic web development.this is the course in which students willl learn basic web development.
        </p>
        <div class="a1">
            <ol>
                <li>Web</li>
                <li>Asiignment</li>
                <li>Course</li>
                
            </ol>
        </div>
    
    `
  },
     artical2:{
      heading:'Artical 2!!',
    content:
    `<p class="a2">
            this is the course in which students willl learn basic web development.this is the course in which students willl learn basic web development.this is the course in which students willl learn basic web development.this is the course in which students willl learn basic web development.this is the course in which students willl learn basic web development.
        </p>
      
         <p>
            this is the course in which students willl learn basic web development.this is the course in which students willl learn basic web development.this is the course in which students willl learn basic web development.this is the course in which students willl learn basic web development.this is the course in which students willl learn basic web development.
        </p>
        <div class="a1">
            <ol>
                <li>Web</li>
                <li>Asiignment</li>
                <li>Course</li>
                
            </ol>
        </div>
    
    `
      
  },
     artical3:{
      heading:'Artical 3!!',
    content:
    `<p class="a2">
            this is the course in which students willl learn basic web development.this is the course in which students willl learn basic web development.this is the course in which students willl learn basic web development.this is the course in which students willl learn basic web development.this is the course in which students willl learn basic web development.
        </p>
      
         <p>
            this is the course in which students willl learn basic web development.this is the course in which students willl learn basic web development.this is the course in which students willl learn basic web development.this is the course in which students willl learn basic web development.this is the course in which students willl learn basic web development.
        </p>
        <div class="a1">
            <ol>
                <li>Web</li>
                <li>Asiignment</li>
                <li>Course</li>
                
            </ol>
        </div>
    
    `
  }
};
  function createTemp(data)
  {
      var heading=data.heading;
      var content=data.content;
  var htmlTemplate=`
           <!doctype html>
<html>
    <link href="/ui/style.css" rel="stylesheet" />
    <body>
        <a href="/">Home</a>
        <hr/>
        <h1>
            Imad Course
        </h1>
        <h2>
            ${heading}
        </h2>
       
    </body>
    
    ${content}
   
</html>
     
  `;
    return htmlTemplate;  
  }
var counter=0;
app.get('/counter', function (req,res) {
    counter=counter+1;
    res.send(counter.toString());
});


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
      res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/main.js', function (req, res) {
      res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/:artName', function (req ,res){
    var artName =req.params.artName;
    res.send(createTemp(articles[artName]));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});