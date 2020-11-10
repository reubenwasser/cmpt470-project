import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import EsriLeafletGeoSearch from "react-esri-leaflet/plugins/EsriLeafletGeoSearch";

import './Map.css';

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
          <MapContainer center={position} zoom={this.state.zoom} scrollWheelZoom={true}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[49.28273, -123.120735]}>
            <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
            </Marker>
            <EsriLeafletGeoSearch
              position="topleft"
              eventHandlers={{
                requeststart: () => console.log('Started request...'),
                requestend: () => console.log('Ended request...'),
                results: (r) => console.log(r)
              }} />
            
          </MapContainer>
        </div>
    </div>
    );
  }
}

export default Map;
