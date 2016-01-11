var express = require('express');

var app = express();

app.get('/json', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({'client' : 2}));
});

app.get('/html', function(req, res) {
     res.render('html.ejs');
});

function factorielle(n) {
  if(n==0) return 1;
  else return n*factorielle(n-1);
}

app.get('/factorielle', function(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  var i = 0;
  while(i < 10000) {
    console.log(factorielle(100));
    i++;
  }
  res.end("100! = ");
});

app.listen(8080);
