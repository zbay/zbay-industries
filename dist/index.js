'use strict';

var _server = require('react-dom/server');

var _reactRouter = require('react-router');

//a lot of this code is copied from React Router's server-side tutorial. Make sure to switch to the production one
// https://github.com/reactjs/react-router-tutorial/tree/master/lessons/13-server-rendering
var React = require('react');

var routes = require('./modules/routes');

function api(app) {
  // the app's route controllers

  var public_dir = './public/';

  /*app.get('/', function(req, res) {
    res.sendfile(public_dir + "/index.html");
  });*/

  app.get('*', function (req, res) {
    (0, _reactRouter.match)({ routes: routes, location: req.url }, function (err, redirect, props) {
      var appHtml = (0, _server.renderToString)(React.createElement(_reactRouter.RouterContext, props));
      res.send(renderPage(appHtml));
    });
  });

  function renderPage(appHtml) {
    return '\n    <!doctype html>\n    <html>\n    <link rel=\'stylesheet\' href=\'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css\'>\n    <link rel=\'stylesheet\' href=\'./css/main.css\'>\n    <meta charset=utf-8/>\n    <title>My First React Router App</title>\n    <link rel=stylesheet href=/index.css>\n    <div id=app>' + appHtml + '</div>\n    <script src="./js/main.js"></script>\n   ';
  }
}
module.exports = api;