// Start with SVG
var svgWidth = 960;
var svgHeight = 500;

var margin = {
    top: 20,
    right: 40,
    bottom: 60,
    left: 100
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

//  Create an SVG wrapper, append an SVG group that will hold our chart, and shfit the latter by left and top margins.
var svg = d3
  .select(".scatter")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight)
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);
var chart = svg.append("g"); 

//  Retrieve data from the CSV file and execute everything below
d3.csv("data.csv", (function(err, demographicData) {
    if (err) throw err;

    demographicData.forEach(function(data) {
        
    })
}
