import React from 'react';
import { MapContainer } from 'react-leaflet';
import EsriLeafletGeoSearch from 'react-esri-leaflet/plugins/EsriLeafletGeoSearch';

import './Map.css';
import Layers from './Layers/Layers.js'
import Legend from './Legend/Legend'
import NavigationBar from '../NavigationBar/NavigationBar';


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
        <NavigationBar active='Map' isSignIn={true} />
        
        <div className='map'>
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
