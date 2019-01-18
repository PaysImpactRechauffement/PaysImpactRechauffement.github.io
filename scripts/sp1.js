    function row1(d) {
     var obj = {
     year: +d.year,
     value: +d.value,
     month: +d.month
     }
     return obj
     }
     
   function run1 () {
      svg1.selectAll("path.period[opacity='0']")
      .attr("stroke-width", 10)
      .attr("stroke", "white")
      .transition().delay(function(d, index) {
        if (d[0].month === 1) {
          text1.transition().delay(Math.floor(index/12) * duration1).text(d[0].year)
        }
        //return index * duration1
        return Math.floor(index/12) * duration1 ;
      })
      .attr("opacity", 0.5)
      .attr("stroke-width", 2)
      .attr("stroke", function(d) {return color1(d[0].year)})
      .on("end", function(d,index){
         //d[d.length - 1]  if ((d[0].year === lastYear) && (d[0].month === lastMonth))
         if ((d[0].year === lastYear) 
           ) {
           console.log(d[1].year) ;
           console.log(lastYear) ;
           running1 = true;
           stop1() ;  
        }
        else 
          {if(d3.select("#checkbox").property("checked"))           
         { d3.select(this).attr("opacity", 1/1000000);}
            
          }
      })
    running1 = true;
      
    } 
    
   
    function stop1() {
     if (running1 == true)
       {
    text1.interrupt();
    svg1.selectAll("path.period").interrupt();
    svg1.selectAll("path.period:not([opacity ='0']) and path.period:not([opacity ='1/1000000'])")
    
      .transition().duration(100)
        .attr("stroke-width", 2)
        .attr("opacity", 0.5)
        .attr("stroke", function(d) {return color1(d[0].year)});
        
         running1 = false ;
         d3.select("#pause").text("Reprendre") ;
       }
      else{
        if(running1 == false)
          
        { if(d3.select("#checkbox").property("checked"))
          {
             svg1.selectAll("path.period:not([opacity ='0'])").attr("opacity",1/1000000);
          }
          d3.select("#pause").text( "Pause") ;
          run1() ;
        }
      }
    }

    function restart1()
    {
      
     text1.interrupt();
     svg1.selectAll("path.period").interrupt();
     svg1.selectAll("path.period:not([opacity='0'])").attr("opacity", 0);
     text1.transition().remove();
      svg1.selectAll("path.period").attr("opacity", 0);
     svg1.selectAll("path.period").transition().remove();
     run1() ;
      
    }
    
    function updatevitesse1(value)
    { 
      duration1 = 200-value ;
      d3.select('#vitesse').text(value);
      stop1() ;
      stop1() ;
      
    }
    
    
    function updateyear1(value)
    { if (running1 != null)
      {
      text1.interrupt();
     svg1.selectAll("path.period").interrupt();
     
    }
     
     if(d3.select("#checkbox").property("checked"))
       {
      svg1.selectAll("path.period")
      .attr("stroke-width", 2)
      .attr("stroke", function(d) {return color1(d[0].year)})
      .attr("opacity", function(d) {
        if (d[1].year == value) {
          return 0.5
        }
        else {
          if (d[1].year < value)
         {
           return 1/1000000 
         } 
          else
            {
          return 0 
          }
        }
      }) ;
       }
     
     else
       {
         svg1.selectAll("path.period")
      .attr("stroke-width", 2)
      .attr("stroke", function(d) {return color1(d[0].year)})
      .attr("opacity", function(d) {
        if (d[1].year <= value) {
          return 0.5
        }
        else {
          return 0
        }
      }) ;
         
       }
      text1.text(value) ;
      d3.select('#year').text(value);
    }
     
var svg1, duration1, color1, running1,text1;
function sp1() {
   
    svg1 = d3.select("#visu_sp1").append("svg")
      .attr("width", 400)
      .attr("height", 400)
      .attr("class", "circle")
      //.attr("viewBox", "0 0 " + width + " " + height)
      .attr("preserveAspectRatio", "xMidYMid meet")
      .append("g") 
      .attr("transform", "translate(" + (400/2 ) + "," + 400/2 + ")") ;
    
    var radius = 400 / 2 - 35 ;
    var width = 400 ;
    var height = 400 ;
    var temperatureData;
    duration1 =  100;
    //var color1 = d3.scaleSequential(d3.interpolateViridis).domain([1850, 2018]) ;
   
    //var color1 = d3.scaleLinear()
   // .domain([ 1850, 2018])
   // .range(["#66c","#c66"]);
    color1 = d3.scaleLinear().domain([1850,1870,1890,1920,1945,1980,1990,2018])
              .range([d3.rgb("#0c76f7"), 
                      d3.rgb("#4797fa"), 
                      d3.rgb("#73b0fb"), 
                      d3.rgb("#9bc7fc"),  
                      d3.rgb('#ff7f7f'), 
                      d3.rgb('#fe7b7b'), 
                      d3.rgb('#fe6666'), 
                      d3.rgb('#fe5252')]);

    
    var domain = [-0.75, 2];
    var unit = "°C";
    running1 = null ;
    var months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
    var timescale = d3.scaleLinear()
    .range([2/12 * Math.PI , 2 * Math.PI])
    .domain([1, 12]);
     var r = d3.scaleLinear()
    .range([0, radius])
    .domain(domain);
     var line = d3.radialLine()
    .radius(function(d) { return r(d.value) })
    .angle(function(d) { return timescale(d.month) });
    
    
    d3.select("#slider_vitesse").on("input", function() {
	  updatevitesse1(+this.value);
   });
    d3.select("#slider_year").on("input", function() {
	  updateyear1(+this.value);
   });

   
    d3.csv("global_temperatures.csv", row1, function(error, data) {
      if (error) throw error ;
      temperatureData = data ;
      //console.log(temperatureData[50]) ;
      lastYear = data[data.length - 1].year ;
      lastMonth = data[data.length - 1].month ; 
      //console.log(lastYear) ;
      //console.log(lastMonth) ;
      //console.log(r) ;
      var gr = svg1.append("g")
      .attr("class", "r axis")
      .selectAll("g")
        .data(r.ticks(4).slice(1))
        .enter().append("g") ;
    gr.append("circle")
      .attr("r", r )
      .attr('fill','none')
      .attr('stroke','black');
    gr.append("text")
      .attr("y", function(d) { return -r(d) - 4 })
      .style("text-anchor", "middle")
      .text(function(d) { return d + " " + unit });
      
      
       d3.selectAll("circle").attr("class", function(d) {
        if ((d === 1.5) || (d ===2.0)) {
          return "red";
        }
      })
      
     var leg = svg1.append("g")
        .attr("class", "r axis")
        .selectAll("g")
        .data(timescale.ticks(12).slice(0, 11))
        .enter().append("g") ;
      
      leg.append("text")
      .attr("y", -1.05 * radius)
      .attr("transform", function(d) { return "rotate(" + 30 * d + ")" })
      .style("text-anchor", "middle")
      .text(function(d) { return months[d - 1] }) ;
      
      text1 = svg1.append("text")
      .attr("class", "year")
      .attr("x", -17)
      .attr("dy", 5) ;
      
      data.forEach(function(item, index){
        if (index >= data.length - 1) { return }
        var currentData = data.slice(index, index + 2)
        if (currentData[1].year > lastYear) { return }
        
        var interpolate = d3.interpolate(
        currentData[0].value, currentData[1].value) ;
        
        var points = 4  ;
        
        var interpolatedData = d3.range(points + 1).map(function(index) {
        var obj = {
          "value": interpolate(index/points),
          "month": currentData[0].month + index/points,
          "year": currentData[0].year
        }
        return obj
      }) ;
        
        svg1.append("path")
        .datum(interpolatedData)
        .attr("class", "period")
        .attr("d", line)
        .attr("opacity", 0)
        .attr("fill", "none")

        
        
     })
      
      var pathSize = svg1.selectAll("path.period").size() ;
      last = d3.select(svg1.selectAll("path.period").nodes()[pathSize - 1]) ;
      
         
    })   
   
    
  }


