function routers(app){ //all of the app's route controllers

var public_dir = './public/';

app.get('*', function(req, res) {
  res.sendFile(public_dir + "/index.html", { root: __dirname });
});

}
module.exports = routers;