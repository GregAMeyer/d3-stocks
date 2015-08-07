//don't forget to change the template url and selects back to main graph
/* data
app.directive('mainGraph', function ($rootScope, AuthService, AUTH_EVENTS, $state) {

    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'js/common/directives/main-graph/main-graph.html',
      link: function (scope, element, attrs) {
//------ SVG SETTINGS AND SCALES -------------------------
        var margin = 40,
        width = 960 - margin*2,
        height = 500 - margin*2;
        var svg = d3.select("#maingraph")
                    .append("svg")
                    .attr("id", "graph")
                    .attr("width", width)
                    .attr("height", height);
        var xScale = d3.time.scale()
             .domain( 
              [new Date(data[0].Week), new Date(data[data.length - 1].Week)])
             .range([0, width]);
        var yScale = d3.scale.linear()
             .domain( 
                [0, d3.max(data, function(d) { return d.Price; }) ]
                )
             .range([height, 0])
             .nice();
        var colorScale = d3.scale.ordinal()
            .range(["#98abc5", "#8a89a6", "#6b486b", "#a05d56", "#d0743c"])
            .domain(d3.keys(data[0]).filter(function(key) { 
              return key !== "Price" && key !== "Week"
              //only get keys that refer to different google trend search queries 
              //[apple watch, apple inc, iphone, itunes, etc]
            }));
*/
//------ AXES ----------------------
/*
        var xAxis = d3.svg.axis()
                          .scale(xScale)
                          .orient("bottom");
        var yAxis = d3.svg.axis()
                          .scale(yScale)
                          .orient("left")
                          .ticks(10);
//------ GRAPH -------------------------
        var graph = d3.select("#graph")
            .attr("width", width + margin*2)
            .attr("height", height + margin*2)
            .append("g")
            .attr("transform", "translate(" + margin + "," + margin + ")");
        graph.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
             .call(xAxis);
        graph.append("g")
            .attr("class", "y axis")
            .call(yAxis);
*/
//------ STOCK PRICE LINE ---------------------------
/*
        var lineFunc = d3.svg.line()
          .x(function(d) {
            return xScale(new Date(d.Week));
          })
          .y(function(d) {
            return yScale(d.Price);
          })
          .interpolate('linear');
        var line = graph.selectAll(".line")
          .data(data)
          graph.append('svg:path')
          //svg.append('svg:path')
          .attr('d', lineFunc(data))
          .attr('fill', 'none')
          .attr('class', 'line')
          .attr('stroke-width', 3)
          .attr('stroke', "#77876B");
          //data = the data in AAPL.js
          data.forEach(function(d) {
            var y0 = 0;
            //colorScale.domain() = [apple watch, apple inc, iphone, itunes, etc]
            //d.searches = new array on each element in data
            // [ {name: apple watch, y0: 0, y1: 0+searchValue},
            //   {name: apple inc, y0: 0, y1: 0+searchValue}   ]
            d.searches = colorScale.domain().map(function(name) { return {name: name, y0: y0, y1: y0 += +d[name]}; });

            //d.total = new property on each element that should represent sum of each search value
            //d.total = d.searches[d.searches.length - 1].y1;
            // var total = 0;
            // d.searches.forEach(function(obj){
            //   total+=obj.y1
            // })
            // d.total = total;
            d.total = d.searches[0].y1+d.searches[1].y1+d.searches[2].y1+d.searches[3].y1+d.searches[4].y1
            // ^^^ make this flexible later but this should work for now
          });
*/
//------ STACKED BARS -------------------------
/*
        var Mentions = graph.selectAll(".Mentions")
            .data(data)
            .enter().append("g")
            .attr("class", "g")
            .attr( "transform", function(d) { return "translate("+ xScale(new Date(d.Week))+")"} );
        Mentions.selectAll("rect")
            .data(function(d) { return d.searches; })
            .enter()
            .append("rect")
            .attr("width", function(d){ return (width/data.length)-1 } )
            .attr("y", function(d) { return yScale(d.y1)/4 + (height)/1.3333; })
            .attr("height", function(d) { return yScale(d.y0)/4 - yScale(d.y1)/4; })
            .style("fill", function(d) { return colorScale(d.name); });
*/
//------ LEGEND ---------------------------  
/*      
        var legend = graph.selectAll(".legend")
            .data(colorScale.domain().slice().reverse())
            .enter().append("g")
            .attr("class", "legend")
            .attr("transform", function(d, i) { return "translate("+ -width + "," + i * 20 + ")"; });
        legend.append("rect")
            .attr("x", width+5)
            .attr("y", 10)
            .attr("width", 18)
            .attr("height", 18)
            .style("fill", colorScale);
        legend.append("text")
            .attr("x", width+30)
            .attr("y", 18)
            .attr("dy", ".35em")
            //.style("text-anchor", "front")
            .text(function(d) { return d; });
//////responsive/////////
        function resize() {
          // Update graph using new width and height (code below)
          console.log('resizing')
          ////////////
          var width = parseInt(d3.select("#graph").style("width")) - margin*2;
          var height = parseInt(d3.select("#graph").style("height")) - margin*2;
          var xScale = d3.time.scale()
             .domain( 
              [new Date(data[0].Week), new Date(data[data.length - 1].Week)])
             .range([0, width]);
          var yScale = d3.scale.linear()
             .domain( 
                [0, d3.max(data, function(d) { return d.Price; }) ]
                )
             .range([height, 0])
             .nice();
          ////////////
          graph.select('.x.axis')
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);
          graph.select('.y.axis')
            .call(yAxis);
          graph.selectAll('.line')
            .attr("d", line);
        }
        d3.select(window).on('resize', resize); 
  }
}});
*/
