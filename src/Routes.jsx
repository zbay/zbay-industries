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
var BlogWrapper = require("./Components/Blog/BlogWrapper");
var NflCoachVizOffense = require("./Components/Visualizations/NflCoachVizOffense");
var NflCoachVizDefense = require("./Components/Visualizations/NflCoachVizDefense");

var BlogListWrapper = React.createClass({
    render: function(){
        return (<BlogList page={this.props.routeParams.page || "1"} category={null} query={null}/>);
    }
});

var BlogCategoryWrapper = React.createClass({
  render: function(){
    return (<BlogList page={this.props.routeParams.page || "1"} category={this.props.routeParams.category} query={null}/>);
  }
});

var BlogSearchWrapper = React.createClass({
  render: function(){
    return (<BlogList page={this.props.routeParams.page || "1"} category={null} query={this.props.routeParams.query}/>);
  }
});

var BlogPostWrapper = React.createClass({
    render: function(){
        return (<BlogPostStandalone id={this.props.routeParams.id}/>);
    }
});

module.exports = (
  <Router history={BrowserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="portfolio" component={Portfolio}/>
      <Route path="blog/" component={BlogWrapper}>
        <Route path="posts" component={BlogListWrapper}/>
        <Route path="posts/:page" component={BlogListWrapper}/>
        <Route path="posts/category/:category/:page" component={BlogCategoryWrapper}/>
        <Route path="posts/category/:category" component={BlogCategoryWrapper}/>
        <Route path="posts/search/:query/:page" component={BlogSearchWrapper}/>
        <Route path="posts/search/:query/" component={BlogSearchWrapper}/>
        <Route path="post/:id" component={BlogPostWrapper}/>
      </Route>
      <Route path="newPost" component={NewPost}/>
      <Route path="visualizations/nfl_coaches_offense" component={NflCoachVizOffense}/>
      <Route path="visualizations/nfl_coaches_defense" component={NflCoachVizDefense}/>
      <Route path="*" status={404} component={BadLink}/>
    </Route>
  </Router>
);