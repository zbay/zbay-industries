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
var BlogPostStandalone = require("./Components/Blog/BlogPostStandalone");
var BadLink = require("./Components/StatelessContent/BadLink");
var NewPost = require("./Components/Admin/NewPost");

var BlogWrapper = React.createClass({
    render: function(){
        return (<BlogList page={this.props.routeParams.page || "1"}/>);
    }
});

var BlogPostWrapper = React.createClass({
    render: function(){
        console.log("rendering BPW");
        return (<BlogPostStandalone id={this.props.routeParams.id}/>);
    }
});

module.exports = (
  <Router history={BrowserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="portfolio" component={Portfolio}/>
      <Route path="blog" component={BlogWrapper}/>
      <Route path="blog/:page" component={BlogWrapper}/>
      <Route path="newPost" component={NewPost}/>
      <Route path="blogpost/:id" component={BlogPostWrapper}/>
      <Route path="*" status={404} component={BadLink}/>
    </Route>
  </Router>
);