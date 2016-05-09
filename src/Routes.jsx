var React = require('react');
var ReactRouter = require('react-router');
var IndexRoute = require('react-router').IndexRoute;
var BrowserHistory = require('react-router/lib/browserHistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Main = require("./Components/Main");
var Home = require("./Components/StatelessContent/About");
var Portfolio = require("./Components/StatelessContent/Portfolio");
var BlogList = require("./Components/Blog/BlogList");
var BlogPost = require("./Components/Blog/BlogPost");
var BadLink = require("./Components/StatelessContent/BadLink");
var Admin = require("./Components/Admin/Login");
var NewPost = require("./Components/Admin/NewPost");

/*var BlogWrapper = React.createClass({
    render: function(){
        return (<BlogList page={this.props.routeParams.page ? (this.props.routeParams.page): "1"}/>);
    }
});
var BlogPostWrapper = React.createClass({
    render: function(){
        return (<BlogPost id={this.props.routeParams.id ? (this.props.routeParams.id): "1"}/>);
    }
});*/

/*      <Route path="blog/:page" component={BlogWrapper}/>
      <Route path="blogpost/:id" component={BlogPostWrapper}/>
      <Route path="admin" component={Admin}/>
      <Route path="newPost" component={NewPost}/>
            <Route path="*" status={404} component={BadLink}/>
      */

module.exports = (
  <Router history={BrowserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);