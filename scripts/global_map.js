function global_map() {
    var width = 1000,
        height = 520;

    var svgCarte = d3.select('#visu_map')
                     .append( 'svg' )
                     .attr( 'width', width )
                     .attr( 'height', height );

    var infobulledate = d3.select('#visu_map').append('div')
                          .attr('class', 'hidden infobulle');
    var infobullerank = d3.select('#visu_map').append('div')
                          .attr('class', 'hidden infobulle');

    var g = svgCarte.append('g'); 

    var projection = d3.geoNaturalEarth1().scale(180)
                     .translate([width / 2, height / 1.9]);

    var color = d3.scaleLinear().domain([-10.0, -6.0, -3.0, -0.5, 0.0, 0.5, 3.0, 6.0, 10.0])
                  .range([d3.rgb("#0072ff"), 
                          d3.rgb("#3f95ff"), 
                          d3.rgb("#75b2ff"), 
                          d3.rgb("#b2d4ff"), 
                          d3.rgb('#ffffff'), 
                          d3.rgb('#ffaaaa'), 
                          d3.rgb('#f96363'), 
                          d3.rgb('#ff3f3f'), 
                          d3.rgb('#ff0000')]);

    var path = d3.geoPath().projection(projection);
    
    
    var moisCourant = 1922,
        ntop = 5;
        
    var svgRect = document.getElementsByTagName("svg")[0].getBoundingClientRect();

    var yib = 465;
        
    d3.json('world_countries.json', function(json) {
      d3.csv('cleaned_global_temperature_by_country.csv', function(data) {
        svgCarte.selectAll('path')
           .data(json.features)
           .enter()
           .append('path')
           .attr('d', path)
           .attr('update', 'pays');
        for (var i = 0; i < data.length; i++) {
          var dataState = data[i].pays;

          for (var j = 0; j < json.features.length; j++) {
            var jsonState = json.features[j].properties.name;
            if (dataState == jsonState) {
              json.features[j].properties.value = Object.values(data[i]);
              break;
            }
          }		
        }
        
        var moisTab = Object.keys(data[0]); 
        
        var bubbles = svgCarte.selectAll('.bubbles').data(json.features);

        var bubble = bubbles.enter()
        .append("g").attr("transform", function(d) {
          var p = projection(d3.geoCentroid(d));
          return "translate("+p+")";
        });
        
        bubble.append("text")
              .attr("dx", function(d){ return -d3.geoArea(d)*200; })
              .text(function(d) { return '0'; });
        d3.select('#curseur_map').on('input', function() {
          dateTab = moisTab[+this.value].split('-')
          annee = dateTab[0]
          mois = dateTab[1]
          jour = dateTab[2]
          moisCourant = +this.value;
          d3.select('#mois_map').html(jour+'/'+mois+'/'+annee);
          dessinerCarte(+this.value, ntop);
        });
        
        d3.select('#curseur_map_top_max').on('input', function() {
          d3.select('#top_max_map').html(+this.value);
          ntop = +this.value;
          dessinerCarte(moisCourant, +this.value);
        });
        
        function afficherInfoBulle(moisCourant, d, rank) {
            svgRect = document.getElementById("visu_map").getBoundingClientRect();

            if (rank != 0) {
                var rankib = infobullerank.classed('hidden', false)
                                        .attr('style', 'left:' + (d3.event.pageX+10) +
                                              'px; top:' + (d3.event.pageY-20) + 'px') ;
                if (d.properties.value && d.properties.value[moisCourant]!='') {
                    if (rank != 1) {
                        rankib.text(rank + 'ème pays le plus impacté');
                    } else {
                        rankib.text(rank + 'er pays le plus impacté');
                    }
                } else {
                  date.text('Rang : pas de données. ');
                }
            }
            var date = infobulledate.classed('hidden', false)
                               .attr('style', 'left:' + (d3.event.pageX+10) +
                                     'px; top:' + (d3.event.pageY+(rank == 0 ? -20 : -40)) + 'px') ;
            if (d.properties.value && d.properties.value[moisCourant]!='') {
              date.text( d.properties.name +' : '
                       + parseFloat(d.properties.value[moisCourant]).toFixed(2)
                       + '°C');
            } else {
              date.text( d.properties.name +' : pas de données. ');
            }
        }
        
        function getMaxCountries(moisCourant, n) {
            values = [];
            names = [];
            for (i = 0; i < json.features.length; i++) {
                if (json.features[i].properties.value && json.features[i].properties.value[moisCourant] != '') {
                    values.push(parseFloat(json.features[i].properties.value[moisCourant]));
                    names.push(json.features[i].properties.name);
                }
            }
            
            // tableau des valeurs max, décroissant
            maxVals = values.concat().sort((a,b) => b-a).slice(0,n);
            maxNames = [];
            
            for (i = 0; i < n; i++) {
                idx = values.indexOf(maxVals[i]);
                maxNames.push(names[idx]);
            }
            
            return maxNames;
        }
        
        function dessinerCarte(moisCourant, ntop) {
          carte = svgCarte.selectAll('path')
            .data(json.features);
            
          maxCountries = getMaxCountries(moisCourant, ntop);
          
          carte.attr('class', 'update').style('fill', function(d) {
            if (d.properties.value) {
              var value = parseFloat(d.properties.value[moisCourant]);
            }

            if (value) {
              return color(value);
            } else { 
              return '#c6c6c6';
            }
          }).on('mousemove', function(d) {
            afficherInfoBulle(moisCourant, d, maxCountries.indexOf(d.properties.name)+1);
          }).on('mouseout', function() {
            infobulledate.classed('hidden', true);
            infobullerank.classed('hidden', true);
          });
          
          carte.style('fill', function(d) {
            if (d.properties.value) {
              var value = parseFloat(d.properties.value[moisCourant]);
            }

            if (value) {
              return color(value);
            } else { 
              return '#c4c4c4';
            }
          }).on('mousemove', function(d) {
            this.style.opacity = 0.75;
            afficherInfoBulle(moisCourant, d, maxCountries.indexOf(d.properties.name)+1);
          }).on('mouseout', function() {
            this.style.opacity = 1.0;
            infobulledate.classed('hidden', true);
            infobullerank.classed('hidden', true);
          });
          
          svgCarte.selectAll('text').data(json.features)
          .text(function(d) { 
            if (d.properties.value && maxCountries.includes(d.properties.name)) {
              return maxCountries.indexOf(d.properties.name)+1;
            }
            return ''; 
          }).attr('class', 'rank_country')
            .attr('font-size', function(d) { 
            if (d.properties.value && maxCountries.includes(d.properties.name)) {
              return 18;
            }
            return 0.;
          }).style('fill', function(d) {
            if (d.properties.value) {
              var value = parseFloat(d.properties.value[moisCourant]);
            }

            if (value) {
              return '#000000';//color(value);
            } else { 
              return '#c6c6c6';
            }
          }).on('mousemove', function(d) {
            afficherInfoBulle(moisCourant, d, maxCountries.indexOf(d.properties.name)+1);
          }).on('mouseout', function() {
            infobulledate.classed('hidden', true);
            infobullerank.classed('hidden', true);
          });
        }
        
        dessinerCarte(moisCourant, ntop);
      });  
    });
}