var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var api = require('./controllers');
var mongoose = require('mongoose');
var db = mongoose.connection;
var Router = require('react-router');
var React = require('react');
var Routes = require('../jsx/routes');
var mongo = require('mongodb');
//https://ifelse.io/2015/08/27/server-side-rendering-with-react-and-react-router/ try this

//var dotenv = require('dotenv').load();

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost:27018/zbay-industries', function (err, db) {
  if (err) {
    throw new Error('Database failed to connect!');
  } else {
    console.log('Successfully connected to MongoDB.');

    app.use(express.static(path.join(__dirname, 'public')));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
      extended: true
    }));
    routes(app);

    console.log("Listening on Port 8080");
    var server = app.listen(process.env.PORT || 8080);
  }
});