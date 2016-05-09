/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var http = __webpack_require__(2);
	var express = __webpack_require__(3);
	var bodyParser = __webpack_require__(4);
	var path = __webpack_require__(5);
	var app = express();
	var api = __webpack_require__(6);
	var mongoose = __webpack_require__(10);
	var db = mongoose.connection;
	var Router = __webpack_require__(8);
	var React = __webpack_require__(9);
	var Routes = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/Routes\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var mongo = __webpack_require__(11);
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
	    Routes(app);

	    console.log("Listening on Port 8080");
	    var server = app.listen(process.env.PORT || 8080);
	  }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("http");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _server = __webpack_require__(7);

	var _reactRouter = __webpack_require__(8);

	//a lot of this code is copied from React Router's server-side tutorial. Make sure to switch to the production one
	// https://github.com/reactjs/react-router-tutorial/tree/master/lessons/13-server-rendering
	var React = __webpack_require__(9);

	var routes = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/Routes\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

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

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("mongoose");

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("mongodb");

/***/ }
/******/ ]);