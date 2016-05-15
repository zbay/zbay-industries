var mysql = require('mysql');

module.exports = function(app) {
    app.post("/newPost", function(req, res){
    var connection = mysql.createConnection({
        host: 'localhost',
        user: req.body.username,
        password: req.body.password,
        database : process.env.DB_NAME
    });
    connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  else{
      console.log(new Date());
      console.log(new Date().toISOString().slice(0, 19).replace('T', ' '));
      
    connection.query('INSERT INTO blogposts (title, fullContent, category, timePosted) VALUES ("' 
        + req.body.title + '", "' 
        + req.body.content + '", "'
        + req.body.category + '", ' 
        + '"' + new Date().toISOString().slice(0, 19).replace('T', ' ') + '");'
    , function(error, rows) {
        if(error){
            console.log(error);
            res.json({"error": error});
            connection.end();
        }        
        else{
            res.json({"success": "Blog post successfully saved!"});
            connection.end();
        }
    });
  }
});
    });

app.post("/addComment", function(req, res){
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_NAME
}); 
        connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  else{
      console.log(JSON.stringify(req.body.commentData));
      connection.query('INSERT INTO comments (postNum, author, content, timePosted) VALUES ("'
        + req.body.commentData.postNum + '", "' 
        + req.body.commentData.author + '", "' 
        + req.body.commentData.content + '", "'
        + new Date().toISOString().slice(0, 19).replace('T', ' ') + '");'
      , function(error, rows){
        if(error){
            console.log(error);
            res.json({"error": error});
            connection.end();
        }        
        else{
            res.json({"success": "Comment successfully saved!"});
            connection.end();
        }
      }
      );
  }
  });
});
}