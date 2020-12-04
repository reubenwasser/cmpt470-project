import React from 'react'
import { GeoJSON } from 'react-leaflet'

const COLOR_0 = "#4dac26";
const COLOR_1 = "#b8e186";
const COLOR_2 = "#ffeda0";
const COLOR_3 = "#fdae61";
const COLOR_4 = "#d7191c";

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

function style(feature) {
  return {
    fillColor: getColor(feature.properties.CurrentCaseCount),
    weight: 1,
    opacity: 1,
    color: "white",
    dashArray: "3",
    fillOpacity: 0.8
  };
}

export default class HealthRegions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      geojson: undefined,
      selected: undefined,
      region: undefined,
      count: undefined
    };
  }

  onEachFeature = (feature, layer) => {
    const popupContent = `<strong>Health Region:</strong> ${feature.properties.ENGNAME} <br> 
                          <strong>Current Cases:</strong> ${feature.properties.CurrentCaseCount} <br>
                          <strong>New Cases Last 7 Days:</strong> ${feature.properties.NewCases7Day} <br>
                          <strong>New Cases Last 7 Days Per 100,000:</strong>
                           ${feature.properties.NewCaseRate100K7Day.toFixed(2)}`;
    const popupOptions =     
      {
      'maxWidth': '400',
      'width': '200',
      'className' : 'popupCustom'
      }
    if (feature.properties && feature.properties.popupContent) {
      popupContent += feature.properties.popupContent;
    }
    layer.bindPopup(popupContent, popupOptions);
  };

  // access api from https://resources-covid19canada.hub.arcgis.com/datasets/regionalhealthboundaries-1/geoservice?geometry=113.776%2C42.014%2C89.167%2C72.704
  async componentDidMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    //const url = "https://api.opencovid.ca/timeseries?stat=cases&loc=hr&date=15-11-2020";
    const url = "https://opendata.arcgis.com/datasets/3aa9f7b1428642998fa399c57dad8045_0.geojson";
    const response = await fetch(proxyurl + url);
    const data = await response.json();

    this.setState({geojson: data});
    console.log(data);
  }
    render() 
    {
        return(
          this.state.geojson ? <GeoJSON data={this.state.geojson} style={style} onEachFeature={this.onEachFeature} />: null
        )
    }
}

