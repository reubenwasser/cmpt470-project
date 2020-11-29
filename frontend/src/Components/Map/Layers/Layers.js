import React from 'react';
import { Marker, Popup, TileLayer, LayersControl, FeatureGroup } from "react-leaflet";
import MarkerClusterGroup from 'react-leaflet-markercluster';


import Attractions from './Attractions.js';
import HealthRegions from './HealthRegions.js';


export default function Layers() {
    const center = [51.505, -0.09];

    return (
        <LayersControl position="topright">
            <LayersControl.BaseLayer checked name="OpenStreetMap.Mapnik">
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="OpenStreetMap.BlackAndWhite">
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
            />
            </LayersControl.BaseLayer>
            <LayersControl.Overlay name="Marker with popup">
            <Marker position={center}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
            </LayersControl.Overlay>
            <LayersControl.Overlay checked name="Health Regions">
                <FeatureGroup pathOptions={{ color: 'red' }}>
                    <HealthRegions />
                </FeatureGroup>
            </LayersControl.Overlay>
            <LayersControl.Overlay name="Attractions">
            <FeatureGroup pathOptions={{ color: 'purple' }}>
                <MarkerClusterGroup>
                    <Attractions />
                </MarkerClusterGroup>
            </FeatureGroup>
            </LayersControl.Overlay>
        </LayersControl>
    )}

