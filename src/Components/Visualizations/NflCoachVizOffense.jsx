var React = require('react');
var Link = require('react-router').Link;
var d3 = require('d3');
 var margin = {
        top: 10,
        right: 10,
        bottom: 50,
        left: 75
};
var width = (window.innerWidth - margin.right - margin.left) * 0.9;
var height = (window.innerHeight - margin.top - margin.bottom) * 0.7;

var meanURL = "../../viz_data/offensemeans.csv";
var medianURL = "../../viz_data/offensemedians.csv";

module.exports = React.createClass({
    componentDidMount: function(){
        this.visualize(this.state.currentCategory, this.state.renderPercent, this.state.currentAverage); //default render    
        d3.select(window).on('resize', this.resize); 
    },
    getInitialState: function(){
      return {"currentAverage": "mean", "currentCategory": "PassAtt", "renderPercent": false};  
    },
    visualize: function(category, renderPercent, averageType){
    var infobox = d3.select(".card").append("div")
      .attr("class", "tooltip")
      .attr("id", "infobox")
      .style("opacity", 0);  
        let that = this;
          var dataURL = (averageType=="mean" ? (meanURL): (medianURL));
          var yAxisFormat = (renderPercent ? d3.format("%"): d3.format("d"));
        var chart = d3.select("#chart")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    d3.csv(dataURL, function(data){
      	 data.sort(function(a, b){
  	        return b[category] - a[category];
  	    });
  	   var barWidth = Math.floor(width / data.length);
  	   
  		var xScale = d3.scale.linear().domain([data.length, 0]).range([0, width * 0.98]);
  		
  		var yScale = d3.scale.linear().domain([d3.max(data, function(d){
  		  return (d[category] * 1.02);
  		}), d3.min(data, function(d){
  		  return (d[category]) * 0.95;
  		})])
  		.range([0, height]);
  		
  		var xAxis = d3.svg.axis()
      .scale(xScale)
      .orient("bottom")
      .ticks(Math.floor(((data.length)/5) * (width/1100)));

      var yAxis = d3.svg.axis()
      .scale(yScale)
      .orient("left")
      .ticks(Math.floor(10 * (height/650)))
      .tickFormat(yAxisFormat);
 chart.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
       .append("text")
       .attr("x", (width/2) - 120)
       .attr("y", 40)
       .text("Rank among current HCs and OCs");
chart.append("g")
      .attr("class", "y axis")
      .call(yAxis)
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", -70)
      .attr("x", -(height/2) + 130)
      .attr("dy", "0.8em")
      .style("text-anchor", "end")
      .text(that.statUnits(category));
      
      
      chart.selectAll(".bar")
      .data(data).enter()
      .append("rect")
      .attr("x", function(d, index){
        return xScale(index) - barWidth;
      })
      .attr("y", function(d){
        return yScale(d[category]);
      })
      .attr("width", barWidth)
      .attr("height", function(d){
          return height - yScale(d[category]);
        })
      .attr("id", function(d){
        if(d["Team"] == "NFL"){
          return "avgBar"
        }
        else{
          return "";
        }
      })
      .on("mouseover", function(d, i){
        console.log(d);
        var yearWord = d["YrsExp"] == 1 ? "year" : "years";
         var rect = d3.select(this);
         rect.attr("class", "mouseover");
        infobox.transition()
          .duration(100)
          .style("opacity", 0.65)
          .style("left", (width*0.5) + "px")
          .style("top", (height) + "px");
          infobox.html("<br /><img class='logo' width='100' src='" + "../../img/logos/" + d["Team"] + ".png'" + "/><br /><br /><span class='name'>" + 
          (d["Coach"] != "Average" ? (d["Coach"]): ("NFL")) + ", " + (d["Coach"] != "Average" ? (d["Team"]): ("")) + " " + 
          (d["Coach"] != "Average" ? (d["Position"]) : ("average active HC or OC")) + "</span><br /><br /><span class='exactNumber'>" + 
          (renderPercent ? ((100 * d[category]).toFixed(2)) : (d[category]))
          + " " + that.statUnits(category) + "</span><br /><span class='expNum'>in " + d["YrsExp"] + " " + yearWord + " of OC or HC experience</span>");
      })
      .on("mouseout", function() {
        var rect = d3.select(this);
        rect.attr("class", "mouseoff");
        infobox.transition()
          .duration(500)
          .style("opacity", 0);
      });
    });  
    },
    resize: function(){
        width = (window.innerWidth - margin.right - margin.left) * 0.9;
        height = (window.innerHeight - margin.top - margin.bottom) * 0.7;
        var chartNode = document.getElementById("chart");
        while (chartNode.firstChild) {
            chartNode.removeChild(chartNode.firstChild);
        } //erase previous chart
        this.visualize(this.state.currentCategory, this.state.renderPercent, this.state.currentAverage);
    },
    statUnits: function(category){
    switch(category){
      case "PassAtt":
        return "Pass attempts per year";
      case "RushAtt":
        return "Rush attempts per year";
      case "PassCmp":
        return "Pass completions per year";
      case "PassYds":
        return "Passing yards per year";
      case "RushYds":
        return "Team rushing yards per year";
      case "CompletionPrct":
        return "Average annual completion percentage";
      case "PassTDs":
        return "Passing TDs per year";
      case "PassInt":
        return "Interceptions thrown per year";
      case "YdsPerPass":
        return "Average annual yards per pass";
      case "YdsPerRush":
        return "Average annual yards per carry";
      case "TopRushAtt":
        return "Average annual carries by team leader";
      case "TopRushYds":
        return "Average annual rushing yards by team leader";
      case "RushTDs":
        return "Rushing TDs per year";
      case "TopRushTDs":
        return "Average annual rushing touchdowns by team leader";
      case "QbRuYds":
        return "Average QB rushing yards per year";
      case "TopWrRec":
        return "Average receptions by leading WR";
      case "TopTwoWrRec":
        return "Average receptions from team's two leading WRs";
      case "TopWrYds":
        return "Average receiving yards for leading WR";
      case "TopTwoWrYds":
        return "Average receiving yards for team's two leading WRs";
      case "TopWrTDs":
        return "Average receiving TDs by leading WR";
      case "TopTwoWrTDs":
        return "Average receiving TDs by team's two leading WRs";
      case "TopTeRec":
        return "Average receptions by leading TE";
      case "TopTeYds":
        return "Average receiving yards for leading TE";
      case "TopTeTDs":
        return "Average receiving TDs for leading TE";
      case "TopRbRecs":
        return "Average receptions by leading RB";
      case "TopRbReYds":
        return "Average receiving yards for leading RB";
      case "TopRushAttPrct":
        return "Average % of rush attempts by team leader";
      case "TopRushYdsPrct":
        return "Average % of rushing yards by team leader";
      case "TopRushTDsPrct":
        return "Average % of rushing TDs by team leader";
      case "TopWrRecPrct":
        return "Average % of receptions by leading WR";
      case "StartingWrRecPrct":
        return "Average % of receptions by team's two leading WRs";
      case "TopWrYdsPrct":
        return "Average % of receiving yards by leading WR";
      case "StartingWrYdsPrct":
        return "Average % of receiving yards by top two WRs";
      case "TopWrTDsPrct":
        return "Average % of receving TDs by leading WR";
      case "StartingWrTDsPrct":
        return "Average % of receving TDs by top two WRs";
      case "TopTeRecPrct":
        return "Average % of catches by leading TE";
      case "TopTeYdsPrct":
        return "Average % of receving yards by leading TE";
      case "TopTeTdsPrct":
        return "Average % of receiving TDs by leading TE";
      case "TopRbRecPrct":
        return "Average % of catches by leading RB";
      case "TopRbReYdsPrct":
        return "Average % of receiving yards by leading RB";
      default:
        return "units per year";
    }  
    },
    render: function(){
       return (
      <div id="nflViz">
      <br />
      <div className="card">
      <br />
      <div className="title"><span id="top">NFL Offensive Coach Rankings</span>
      <br />
      <Link to="/visualizations/nfl_coaches_defense">Switch to defense?</Link>
      </div>
      <br />
      <label>Pick a category: </label>&nbsp;
      <select name="category" id="statSelector" value={this.state.currentCategory} onChange={this.onCategoryChange}>
        <optgroup label="Passing">
          <option value="PassAtt">Pass Attempts</option>
          <option value="PassCmp">Pass Completions</option>
          <option value="CompletionPrct">Completion %</option>
          <option value="PassYds">Passing Yards</option>
          <option value="PassTDs">Passing TDs</option>
          <option value="PassInt">Interceptions</option>
          <option value="YdsPerPass">Yards Per Pass</option>
        </optgroup>
        <optgroup label="Rushing Totals">
          <option value="RushAtt">Total Rush Attempts</option>
          <option value="TopRushAtt">Rush Attempts by Leader</option>
          <option value="RushYds">Total Rush Yards</option>
          <option value="TopRushYds">Rush Yards By Leader</option>
          <option value="RushTDs">Total Rush TDs</option>
          <option value="TopRushTDs">Rush TDs By Leader</option>
          <option value="QbRuYds">QB Rush Yards</option>
          <option value="YdsPerRush">Yards Per Carry</option>
        </optgroup>
        <optgroup label="Receiving Totals">
          <option value="TopWrRec">Catches By Leading WR</option>
          <option value="TopTwoWrRec">Catches By Top Two WRs</option>
          <option value="TopWrYds">Yards By Leading WR</option>
          <option value="TopTwoWrYds">Yards By Top Two WRs</option>
          <option value="TopWrTDs">TDs By Leading WR</option>
          <option value="TopTwoWrTDs">TDs By Top Two WRs</option>
          <option value="TopTeRec">Catches By Leading TE</option>
          <option value="TopTeYds">Yards By Leading TE</option>
          <option value="TopTeTDs">TDs By Leading TE</option>
          <option value="TopRbRecs">Catches By Leading RB</option>
          <option value="TopRbReYds">Receivng Yards By Leading RB</option>
        </optgroup>
        <optgroup label="Rushing Proportions">
          <option value="TopRushAttPrct">% Rushes By Leader</option>
          <option value="TopRushYdsPrct">% Rush Yards By Leader</option>
          <option value="TopRushTDsPrct">% Rush TDs By Leader</option>
        </optgroup>
        <optgroup label="Receiving Proportions">
          <option value="TopWrRecPrct">% Catches By Leading WR</option>
          <option value="StartingWrRecPrct">% Catches By Top Two WRs</option>
          <option value="TopWrYdsPrct">% Yards By Leading WR</option>
          <option value="StartingWrYdsPrct">% Yards By Top Two WRs</option>
          <option value="TopWrTDsPrct">% TDs By Top WR</option>
          <option value="StartingWrTDsPrct">% TDs By Top Two WRs</option>
          <option value="TopTeRecPrct">% Catches By Leading TE</option>
          <option value="TopTeYdsPrct">% Yards By Leading TE</option>
          <option value="TopTeTdsPrct">% TDs By Leading TE</option>
          <option value="TopRbRecPrct">% Catches By Leading RB</option>
          <option value="TopRbReYdsPrct">% Receiving Yards By Leading RB</option>
        </optgroup>
      </select>
      <br /><br />
      <label>Average Type:</label>&nbsp;
      <select name="averageType" id="averageSelector" value={this.state.currentAverage} onChange={this.onAverageChange}>
        <option value="mean">Mean</option>
        <option value="median">Median</option>
      </select>
      <svg id="chart"></svg>
      <br />
    </div>
    <div id="acknowledgements">
      All data used in this visualization was derived from statistics freely available from&nbsp; 
      <a href="http://www.pro-football-reference.com/" target="_blank">Pro Football Reference</a>. The derived data can be found <a href="https://github.com/zbay/zbay-industries/tree/master/public/viz_data" target="_blank">on my Github</a>.<br /><br />
      All NFL logos used in this visualization were originally downloaded from <a href="http://www.sportslogos.net/" target="_blank">SportsLogos.net</a>.<br />
      </div>
      </div>
           ); 
    },
    onCategoryChange: function(e){
        let that = this;
        var renderPercent = e.target.value.slice(-4) == "Prct";
        that.setState({"currentCategory": e.target.value, "renderPercent": renderPercent});
        var chartNode = document.getElementById("chart");
        while (chartNode.firstChild) {
            chartNode.removeChild(chartNode.firstChild);
        } //erase previous chart
        that.visualize(e.target.value, renderPercent, that.state.currentAverage);
    },
    onAverageChange: function(e){
        let that = this;
        that.setState({"currentAverage": e.target.value});
        var chartNode = document.getElementById("chart");
        while (chartNode.firstChild) {
            chartNode.removeChild(chartNode.firstChild);
        } //erase previous chart
        that.visualize(that.state.currentCategory, that.state.renderPercent, e.target.value);
    }
});