var mysql = require('mysql');
var dotenv = require('dotenv').load();
var connection = mysql.createConnection(process.env.JAWSDB_URL);

module.exports = function(app) {
    app.post("/newPost", function(req, res){ //make a new post
    connection.query('SELECT * FROM users WHERE username=' + connection.escape(req.body.username) + ' AND password=SHA1(' + connection.escape(req.body.password) + ')', //authenticate user
    function(error1, row){
        if(error1 || !row || row.length < 1){
            res.json({"error": "Failed to connect to the database. Perhaps your username or password are incorrect."});
        }
        else{
    connection.query('INSERT INTO blogposts (title, content, category, timePosted) VALUES (' 
        + connection.escape(req.body.title) + ', ' 
        + connection.escape(req.body.content) + ', '
        + connection.escape(req.body.category) + ', "' 
        + new Date().toISOString().slice(0, 19).replace('T', ' ') + '");'
    , function(error, rows) {
        if(error){
            console.log(error);
            res.json({"error": error});
        }        
        else{
            res.json({"success": "Blog post successfully saved!"});
        }
    });   
        }
    });
    });

app.post("/addComment", function(req, res){ //post a comment
      connection.query('INSERT INTO comments (postNum, author, content, timePosted) VALUES ('
        + connection.escape(req.body.commentData.postNum) + ', ' 
        + connection.escape(req.body.commentData.author) + ', ' 
        + connection.escape(req.body.commentData.content) + ', "'
        + new Date().toISOString().slice(0, 19).replace('T', ' ') + '");'
      , function(error, rows){
        if(error){
            console.log(error);
            res.json({"error": error});
        }        
        else{
            connection.query('SELECT timePosted FROM comments ORDER BY timePosted DESC LIMIT 1', function(err, data){ //return the timestamp of the post you just made
                res.json({"timePosted":  data[0].timePosted});
            });
        }
      }
      );
});
}