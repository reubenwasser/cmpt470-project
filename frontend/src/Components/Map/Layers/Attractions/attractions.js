import React from "react";
import { GeoJSON } from "react-leaflet";
import ClusterLayer from "react-esri-leaflet/plugins/ClusterLayer";


const overpass = require("query-overpass");

class ExampleClusterComponent extends React.Component {
 
  render() {
    const style = {
      border: 'solid 2px darkgrey',
      borderRadius: '8px',
      backgroundColor: 'white',
      padding: '1em',
      textAlign: 'center'
    };
    const cluster = this.props.cluster;
 
    if (cluster.markers.length === 1) {
      return (
        <div style={style} >{cluster.markers[0].text}</div>
      );
    }
 
    return (
      <div style={style}>{cluster.markers.length} items</div>
    );
  }
 
}


export default class Attractions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      geojson: undefined
    };
  }

  componentDidMount() {
    const query = `[out:json];\
    area[name="Canada"]->.a;\
    (node(area.a)[tourism=museum];\
    relation[historic=castle](around:10000, 50.0874654,14.4212535););\
    out body;>;out skel qt;`;
    const options = {
      flatProperties: true,
      overpassUrl: 'https://overpass-api.de/api/interpreter'
    };
    overpass(query, this.dataHandler, options);
  }

  dataHandler = (error, osmData) => {
    if (!error && osmData.features !== undefined) {
      this.setState({ geojson: osmData });
    }
    if(error) {
      console.log(error.message);
      console.log(error.statusCode);
    }
  };

  render() {
    console.log("OVERPASS API BEING LOADED");
    return this.state.geojson ? <GeoJSON data={this.state.geojson}/>: null;
  }
}
