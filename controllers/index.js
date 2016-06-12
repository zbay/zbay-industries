function routers(app){ //all of the api's route controllers
var newPosts = require("./newPosts.js"); newPosts(app);
var getPosts = require("./getPosts.js"); getPosts(app);
}
module.exports = routers;