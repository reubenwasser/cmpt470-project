import React, { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import L from 'leaflet'
import Locate from "leaflet.locatecontrol";
//import { Icon } from "leaflet";

//import mapStyles from './mapStyles';
import './Map.css';

/*
import Search from './Search/Search';
import Establishment from './Establishment/Establishment';
import Locate from './Locate/Locate';

// Additional libraries that we want to use along with the Google Maps API
// These libraries must also be enabled within the google cloud project
const libraries = ['places'];

// Set the width and height of the map on the page
const mapContainerStyle = {
  width: '100vw',
  height: '95vh',
};

const defaultZoom = 8;

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};
*/

//Vancouver coordinates
const position = [49.28273, -123.120735]
const viewLevel = 11


export default function Map() {

  return (
  <div>
    <ul class="nav">
      <li class="navHome"><a href="/">Home</a></li>
      <li class="navStat"><a href="Stats">Stats</a></li>
      <li class="navMap"><a class="active" href="Map">Map</a></li>
      <li class="navReg"><a href="Register" on>Register</a></li>
      <li class="navSign"><a href="SignIn">Sign-in</a></li>
    </ul>
    <MapContainer center={position} zoom={11} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[49.28273, -123.120735]}>
      <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
      </Marker>
    </MapContainer>
  </div>
  );
}
