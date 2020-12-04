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

    // componentDidMount() {
        function getColor(d) {
            return d > 5000
              ? COLOR_4
              : d > 1000
              ? COLOR_3
              : d > 500
              ? COLOR_2
              : d > 50
              ? COLOR_1
              : COLOR_0;
          }

          var legend = L.control({position: 'bottomright'});

          legend.onAdd = function (map) {
          
              var div = L.DomUtil.create('div', 'info legend'),
                  grades = [0, 50, 500, 1000, 5000];
                 // labels = [];
          
    for (var i = 0; i < grades.length; i++) {
        console.log("what's going on here ")
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');

        }
    

    return div;
          
          };
          
        legend.addTo(map);
        return null;
    }
 


 