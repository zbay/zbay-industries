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

var meanURL = "../../viz_data/defensemeans.csv";
var medianURL = "../../viz_data/defensemedians.csv";

module.exports = React.createClass({
    componentDidMount: function(){
        this.visualize(this.state.currentCategory, this.state.renderPercent, this.state.currentAverage); //default render    
        d3.select(window).on('resize', this.resize); 
    },
    getInitialState: function(){
      return {"currentAverage": "mean", "currentCategory": "PassAttAgainst", "renderPercent": false};  
    },
    visualize: function(category, renderPercent, averageType){
    var infobox = d3.select(".card").append("div")
      .attr("class", "tooltip")
      .attr("id", "infobox")
      .style("opacity", 0);  
        var that = this;
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
       .text("Rank among current HCs and DCs");
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
        var yearWord = d["YrsExp"] == 1 ? "year" : "years";
         var rect = d3.select(this);
         rect.attr("class", "mouseover");
        infobox.transition()
          .duration(100)
          .style("opacity", 0.65)
          .style("left", (width*0.5) + "px")
          .style("top", (height*1.4) + "px");
          infobox.html("<br /><img class='logo' width='100' src='" + "../../img/logos/" + d["Team"] + ".png'" + "/><br /><br /><span class='name'>" + 
          (d["Coach"] != "Average" ? (d["Coach"]): ("NFL")) + ", " + (d["Coach"] != "Average" ? (d["Team"]): ("")) + " " + 
          (d["Coach"] != "Average" ? (d["Position"]) : ("average active HC or OC")) + "</span><br /><br /><span class='exactNumber'>" + 
          (renderPercent ? ((100 * d[category]).toFixed(2)) : (d[category]))
          + " " + that.statUnits(category) + "</span><br /><span class='expNum'>in " + d["YrsExp"] + " " + yearWord + " of DC or HC experience</span>");
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
        height = (window.innerHeight - margin.top - margin.bottom) * 0.8;
        var chartNode = document.getElementById("chart");
        while (chartNode.firstChild) {
            chartNode.removeChild(chartNode.firstChild);
        } //erase previous chart
        this.visualize(this.state.currentCategory, this.state.renderPercent, this.state.currentAverage);
    },
    statUnits: function(category){
    switch(category){
      case "PassAttAgainst":
        return "Pass attempts allowed per year";
      case "PassCmpAgainst":
        return "Pass completions allowed per year";
      case "CompletionPrctAllowed":
        return "Average annual completion % allowed";
      case "PassYdsAgainst":
        return "Passing yds allowed per year";
      case "PassTDsAgainst":
        return "Passing TDs allowed per year";
      case "Interceptions":
        return "Passes intercepted per year";
      case "Sacks":
        return "Sacks per year";
      case "SackYds":
        return "Sack yards per year";
      case "YdsPerDropbackAgainst":
        return "Average annual yds allowed per dropback";
      case "RushAttAgainst":
        return "Carries allowed per year";
      case "RushYdsAgainst":
        return "Rushing yds allowed per year";
      case "RushTDsAgainst":
        return "Rushing TDs allowed per year";
      case "FumsRecovered":
        return "Fumbles taken per year";
      case "YdsPerRushAgainst":
        return "Average annual YPC allowed";
      case "TotalYdsAllowed":
        return "Average offensive yds allowed per year";
      case "PlaysAllowed":
        return "Offensive plays allowed per year";
      case "YdsPerPlayAgainst":
        return "Average annual yds allowed per play";
      case "OffensivePtsAgainst":
        return "Offensive pts allowed per year (TDs and FGs)";
      case "FgsAgainst":
        return "Field goals allowed per year";
      case "TurnoversForced":
        return "Turnovers forced per year";
      case "DefReturnYds":
        return "Defensive return yds per year (FRs & INTs";
      case "DefPoints":
        return "Defensive pts per year (TDs & safeties)";
      case "TurnoverPrct":
        return "Average annual turnover %";
      case "RushPrctAgainst":
        return "Average annual % of plays against that are rushes";
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
      <div className="title"><span id="top">NFL Defensive Coach Rankings</span>
      <br />
      <Link to="/visualizations/nfl_coaches_offense">Switch to offense?</Link>
      </div>
      <br />
      <label>Pick a category: </label>&nbsp;
      <select name="category" id="statSelector" value={this.state.currentCategory} onChange={this.onCategoryChange}>
        <optgroup label="Passing">
          <option value="PassAttAgainst">Pass Attempts Against</option>
          <option value="PassCmpAgainst">Pass Completions Allowed</option>
          <option value="CompletionPrctAllowed">Completion % Allowed</option>
          <option value="PassYdsAgainst">Passing Yards Allowed</option>
          <option value="PassTDsAgainst">Passing TDs Allowed</option>
          <option value="Interceptions">Interceptions</option>
          <option value="Sacks">Sacks</option>
          <option value="SackYds">Sack Yardage</option>
          <option value="YdsPerDropbackAgainst">Yards Per Dropback Allowed</option>
        </optgroup>
        <optgroup label="Rushing">
          <option value="RushAttAgainst">Rushing Attempts Against</option>
          <option value="RushYdsAgainst">Rushing Yards Allowed</option>
          <option value="RushTDsAgainst">Rushing TDs Allowed</option>
          <option value="FumsRecovered">Fumble Recoveries</option>
          <option value="YdsPerRushAgainst">Yards Per Carry Allowed</option>
        </optgroup>
        <optgroup label="Overall">
          <option value="TotalYdsAllowed">Total Offensive Yards Allowed</option>
          <option value="PlaysAllowed">Offensive Plays Against</option>
          <option value="YdsPerPlayAgainst">Yards Per Play Allowed</option>
          <option value="OffensivePtsAgainst">Total Offensive Points Allowed</option>
          <option value="FgsAgainst">Field Goals Allowed</option>
          <option value="TurnoversForced">Turnovers Forced</option>
          <option value="DefReturnYds">Defensive Return Yards</option>
          <option value="DefPoints">Points Scored By Defense</option>
          <option value="TurnoverPrct">Turnover Rate</option>
          <option value="RushPrctAgainst">Rush Percentage</option>
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
        var that = this;
        var renderPercent = e.target.value.indexOf("Prct") > -1;
        that.setState({"currentCategory": e.target.value, "renderPercent": renderPercent});
        var chartNode = document.getElementById("chart");
        while (chartNode.firstChild) {
            chartNode.removeChild(chartNode.firstChild);
        } //erase previous chart
        that.visualize(e.target.value, renderPercent, that.state.currentAverage);
    },
    onAverageChange: function(e){
        var that = this;
        that.setState({"currentAverage": e.target.value});
        var chartNode = document.getElementById("chart");
        while (chartNode.firstChild) {
            chartNode.removeChild(chartNode.firstChild);
        } //erase previous chart
        that.visualize(that.state.currentCategory, that.state.renderPercent, e.target.value);
    }
});