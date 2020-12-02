import React from 'react'
import { GeoJSON } from 'react-leaflet'

export default class HealthRegions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      geojson: undefined
    };
  }

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
             this.state.geojson ? <GeoJSON data={this.state.geojson}/>: null
        )
    }
}

