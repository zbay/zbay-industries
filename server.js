var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var Routes = require('./controllers');
var enforce = require('express-sslify');

app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

Routes(app);

console.log("Listening on Port 8080");
var server = app.listen(process.env.PORT || 8080);