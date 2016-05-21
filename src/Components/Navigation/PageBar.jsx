"use strict";
var React = require('react');
var BrowserHistory = require('react-router/lib/browserHistory');

module.exports = React.createClass({
    propTypes: {
      page: React.PropTypes.string.isRequired
    },
    render: function(){
        var showPrev = false;
        var showNext = true;
        var that = this;
        if(Number(this.props.page) > 1){
            showPrev = true;
        }
        if(!this.props.hasNext){
            showNext = false;
        }
        return (
        <div id="pageBar" className="container">
        <div className="row">
        <div className="col-xs-2">
        {showPrev ? <button onClick={this.prevPage}>
        <span className="glyphicon glyphicon-arrow-left"></span><br />Page {"" + ((parseInt(that.props.page))-1)}
        </button> : <span></span>
        }
        </div>
        <div className="col-xs-8"></div>
        <div className="col-xs-2">
         {showNext ? <button onClick={this.nextPage}>
        <span className="glyphicon glyphicon-arrow-right"></span><br />Page {"" + ((parseInt(that.props.page))+1)}
        </button>: <span></span>
        }      
        </div>
        </div>
        </div>);
    },
    prevPage: function(){
        if(this.props.search && this.props.search.length > 0){
         BrowserHistory.push("/blog/posts/search" + this.props.search + "/" + (parseInt(this.props.page)-1));    
        }
        else if(this.props.category){
         BrowserHistory.push("/blog/posts/category/" + this.props.category + "/" + (parseInt(this.props.page)-1));   
        }
        else{
        BrowserHistory.push("/blog/posts/" + (parseInt(this.props.page)-1));
        }
    },
    nextPage: function(){
        if(this.props.search && this.props.search.length > 0){
         BrowserHistory.push("/blog/posts/search" + this.props.search + "/" (parseInt(this.props.page)+1));    
        }
        else if(this.props.category){
         BrowserHistory.push("/blog/posts/category/" + this.props.category + "/" + (parseInt(this.props.page)+1));   
        }
        else{
        BrowserHistory.push("/blog/posts/" + (parseInt(this.props.page)+1));
        }
    }
    });