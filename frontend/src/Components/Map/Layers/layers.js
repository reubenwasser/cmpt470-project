import React from 'react';
import { Marker, Popup, TileLayer, LayersControl, Circle, LayerGroup, FeatureGroup } from "react-leaflet";


import Attractions from './Attractions/attractions.js'


export default function Layers() {
    const center = [51.505, -0.09]

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
            <LayersControl.Overlay checked name="Layer group with circles">
            <LayerGroup>
                <Circle
                center={center}
                pathOptions={{ fillColor: 'blue' }}
                radius={200}
                />
                <Circle
                center={center}
                pathOptions={{ fillColor: 'red' }}
                radius={100}
                stroke={false}
                />
                <LayerGroup>
                <Circle
                    center={[51.51, -0.08]}
                    pathOptions={{ color: 'green', fillColor: 'green' }}
                    radius={100}
                />
                </LayerGroup>
            </LayerGroup>
            </LayersControl.Overlay>
            <LayersControl.Overlay name="Attractions">
            <FeatureGroup pathOptions={{ color: 'purple' }}>
                <Attractions />
            </FeatureGroup>
            </LayersControl.Overlay>
        </LayersControl>
    )}

