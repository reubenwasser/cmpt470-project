import React from "react";
import { MapContainer } from "react-leaflet";
import EsriLeafletGeoSearch from "react-esri-leaflet/plugins/EsriLeafletGeoSearch";


import './Map.css';
import Layer from './Layers/layers.js'

class Map extends React.Component {
//Vancouver coordinates
  state = {
    lat: 49.28273,
    long: -123.120735,
    zoom: 11
  };

  render() {
    const position = [this.state.lat, this.state.long];
    return (
      <div>
        <div className="header">
          <ul class="nav">
            <li class="navHome"><a href="/">Home</a></li>
            <li class="navStat"><a href="Stats">Stats</a></li>
            <li class="navMap"><a class="active" href="Map">Map</a></li>
            <li class="navReg"><a href="Register" on>Register</a></li>
            <li class="navSign"><a href="SignIn">Sign-in</a></li>
          </ul>
        </div>
        <div className="map">
          <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
            <EsriLeafletGeoSearch />
            <Layer />
          </MapContainer>,
        </div>
      </div>
    );
  }
}

export default Map;
