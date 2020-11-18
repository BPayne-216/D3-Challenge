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
  .attr("transform", `translate(${margin.left}, ${margin.top})`)

var chart = svg.append("g"); 

d3.select(".scatter").append("div").attr("class","tooltip").style("opacity",0);

//  Retrieve data from the CSV file and execute everything below
d3.csv("data.csv", (function(err, demographicData) {
    if (err) throw err;

    demographicData.forEach(function(data) {
      data.poverty = +data.poverty;
      data.healthcare = +data.healthcare; 
    });
    //  Scale y and x to chart height and width
    var yScale = d3.scaleLinear().range([height,0]);
    var xScale = d3.scaleLinear().range([0,width]);

    //  Create initial axis functions
    var yAxis = d3.axisLeft(yScale);
    var xAxis = d3.axisBottom(xScale);
    //  Create y and x scale function
    yScale.domain([0, d3.max(demographicData, function(data)  {
        return +data.healthcare;
        }),
    ]);
    xScale.domain([9, d3.max(demographicData, function(data) {
        return +data.poverty;
        }),
    ]);

    var toolTip = d3.tip()
      .attr("class", "tooltip")
      .offset([80,-60])
      .html(function(data) {

      })
    }

