var mysql = require('mysql');
var dotenv = require('dotenv').load();
var perPage = 3;
var connection = mysql.createConnection(process.env.JAWSDB_URL);

module.exports = function(app) {
    
app.post("/getPosts", function(req, res){
      if(req.body.search){
      connection.query
      ("SELECT * FROM blogposts WHERE MATCH(title, content) AGAINST(" + connection.escape(req.body.search) +  
      ") ORDER BY timePosted DESC LIMIT " 
        + perPage + " OFFSET " 
        + perPage * connection.escape(req.body.page-1), function(error, rows){
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
      else if(req.body.category){
      connection.query("SELECT * FROM blogposts WHERE category = " + connection.escape(req.body.category) + " ORDER BY timePosted DESC LIMIT " 
        + perPage + " OFFSET " 
        + perPage * connection.escape(req.body.page-1), function(error, rows){
         if(error){
            res.json({"error": "Failed to load posts from the database. Try reloading the page. If that fails, contact Zach Williams."});
         } 
         else{
             res.json({"posts": rows});
         }
      });             
      }
      else{
      connection.query("SELECT * FROM blogposts ORDER BY timePosted DESC LIMIT " 
        + perPage + " OFFSET " 
        + perPage * connection.escape(req.body.page-1), function(error, rows){
         if(error){
            res.json({"error": "Failed to load posts from the database. Try reloading the page. If that fails, contact Zach Williams."});
         } 
         else{
             res.json({"posts": rows});
         }
      });   
      }
});

app.post("/getPost", function(req, res){
      connection.query("SELECT * FROM blogposts WHERE postnum = " + connection.escape(req.body.postNum) + ";", function(error, row){
         if(error){
            res.json({"error": "Failed to load post from the database. Try reloading the page. If that fails, it was likely deleted."});
         } 
         else{
             res.json({"postData": row});
         }
      });
});

app.post("/getComments", function(req, res){
      connection.query("SELECT * FROM comments WHERE postnum = " 
      + connection.escape(req.body.postNum) + " ORDER BY timePosted ASC;", function(error, rows){
         if(error){
            res.json({"error": "Failed to load comments from the database. Try reloading the page. If that fails, the post was likely deleted."});
         } 
         else{
             res.json({"comments": rows || []});
         }
      });
});
}
