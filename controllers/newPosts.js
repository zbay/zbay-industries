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
      
    connection.query('INSERT INTO blogposts (title, fullContent, summaryContent, category, timePosted) VALUES ("' 
        + req.body.title + '", "' 
        + req.body.content + '", "'
        + req.body.content.substr(0, 300) + '", "' 
        + req.body.category + '", ' + '"' + new Date().toISOString().slice(0, 19).replace('T', ' ') + '");'
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
}