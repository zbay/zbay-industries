var mysql = require('mysql');
var dotenv = require('dotenv').load();
var perPage = 10;

module.exports = function(app) {
app.post("/getPosts", function(req, res){
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_NAME
});

connection.connect(function(err) {
  if (err) {
    res.json({"error": "Failed to connect to the database!"});
    connection.end();
  }
  else{
      connection.query("SELECT * FROM blogposts ORDER BY timePosted DESC LIMIT " 
        + perPage + " OFFSET " 
        + perPage * (req.body.page-1), function(error, rows){
         if(error){
            res.json({"error": "Failed to load posts from the database. Try reloading the page. If that fails, contact Zach Williams."});
            connection.end();
         } 
         else{
             res.json({"posts": rows});
             connection.end();
         }
      });
  }

}); 
});
app.post("/getPost", function(req, res){
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_NAME
});

connection.connect(function(err) {
  if (err) {
    res.json({"error": "Failed to connect to the database!"});
    connection.end();
  }
  else{
      connection.query("SELECT * FROM blogposts WHERE postnum = " + req.body.postNum + ";", function(error, row){
         if(error){
            res.json({"error": "Failed to load post from the database. Try reloading the page. If that fails, it was likely deleted."});
            connection.end();
         } 
         else{
             res.json({"postData": row});
             connection.end();
         }
      });
  }

}); 
});
}