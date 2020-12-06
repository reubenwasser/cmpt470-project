import React from "react";
import { MapContainer } from "react-leaflet";
import EsriLeafletGeoSearch from "react-esri-leaflet/plugins/EsriLeafletGeoSearch";

import './Map.css';
import Layers from './Layers/Layers.js'
import Legend from './Legend/Legend'


class Map extends React.Component {
//Vancouver coordinates
  state = {
    lat: 49.28273,
    long: -123.120735,
    zoom: 7
  };

  render() {
    const position = [this.state.lat, this.state.long];
    return (
      <div>
        <div className="header">
          <ul className="nav">
            <li className="navHome"><a href="/">Home</a></li>
            <li className="navStat"><a href="Stats">Stats</a></li>
            <li className="navMap"><a class="active" href="Map">Map</a></li>
            <li className="navReg"><a href="Register" on>Register</a></li>
            <li className="navSign"><a href="SignIn">Sign-in</a></li>
          </ul>
        </div>
        <div className="map">
          <MapContainer center={position} zoom={this.state.zoom} scrollWheelZoom={true} maxZoom={20}>
            <EsriLeafletGeoSearch 
            eventHandlers={{
              requeststart: () => console.log('Started request...'),
              requestend: () => console.log('Ended request...'),
              results: (r) => console.log(r)
            }}/>
              <Layers />
              {/* Legend actin wierd */}
              <Legend />
          </MapContainer>
        </div>
      </div>
    );
  }
}

export default Map;
