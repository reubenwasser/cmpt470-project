import React from 'react'
import { useMap } from 'react-leaflet'
import L from 'leaflet'

import './Legend.css'

const COLOR_0 = "#4dac26";
const COLOR_1 = "#b8e186";
const COLOR_2 = "#ffeda0";
const COLOR_3 = "#fdae61";
const COLOR_4 = "#d7191c";

export default function Legend() {
    const map = useMap();    

    React.useEffect(() => {
    // componentDidMount() {
        function getColor(d) {
            return d > 20
            ? COLOR_4
            : d > 10
            ? COLOR_3
            : d > 5
            ? COLOR_2
            : d > 1
            ? COLOR_1
            : COLOR_0;
          }

          var legend = L.control({position: 'bottomright'});

          legend.onAdd = function (map) {
          
            var div = L.DomUtil.create('div', 'info legend'),
                  grades = [0, 1, 5, 10, 20],
                  labels = [];
            let from;
            let to;
            labels.push("<p id='legend'>New Case Rate <br>Per 100K Last 7 Days:</p>");
          
    for (var i = 0; i < grades.length; i++) {
        from = grades[i];
        to = grades[i + 1];

        labels.push(
          '<i style="background:' +
            getColor(from + 1) +
            '"></i> ' +
            from +
            (to ? "&ndash;" + to : "+") + "<br>"
        );
      }
    div.innerHTML = labels.join("");
    

    return div;
          
          };
          
        legend.addTo(map);
    });
        return null;
}
 


 