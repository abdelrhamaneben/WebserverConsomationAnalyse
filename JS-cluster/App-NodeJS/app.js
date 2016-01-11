var express = require('express');
var cluster = require('cluster');
var numCPUs = require('os').cpus().length;

var app = express();

function factorielle(n) {
  if(n==0) return 1;
  else return n*factorielle(n-1);
}



if (cluster.isMaster) {
  // Fork workers.
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', function(worker, code, signal) {
    console.log('worker ' + worker.process.pid + ' died');
  });
} else {
   app.get('/json', function(req, res) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({'client' : 2}));
    });

    app.get('/html', function(req, res) {
         res.render('html.ejs');
    });

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
}
