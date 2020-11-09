import React from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import _ from 'lodash';

import mapStyles from './mapStyles';

import Search from './Search';
import Establishment from './Establishment';
import Locate from './Locate';

// Additional libraries that we want to use along with the Google Maps API
// These libraries must also be enabled within the google cloud project
const libraries = ['places'];

// Set the width and height of the map on the page
const mapContainerStyle = {
  width: '100vw',
  height: '95vh',
};

const defaultZoom = 8;

// Set to vancouver
const center = {
  lat: 49.28273,
  lng: -123.120735,
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

export default function Map() {
  const mapRef = React.useRef();
  const [marker, setMarker] = React.useState(null);
  const [selected, setSelected] = React.useState(null);

  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(16);
  }, []);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || process.env.GOOGLE_MAPS_API_KEY,
    libraries,
  });

  // Add markers to the map based on the search results
  const handleMarkers = ({
    lat,
    lng,
    name,
    types,
    url,
    formatted_address,
    open_now,
  }) => {
    setMarker({
      lat: lat,
      lng: lng,
      name: name,
      type: types[0],
      url: url,
      formatted_address: formatted_address,
      open_now: open_now,
    });
  };

  const handleCloseClick = () => {
    setSelected(null);
  };

  if (loadError) return 'Error Loading Map';
  if (!isLoaded) return 'Loading Map';

  return (
    <div>
        <ul>
				  <li><a href="/">Home</a></li>
				  <li><a href="SignIn">Sign-in</a></li>
				  <li><a href="Register" on>Register</a></li>
				  <li><a href="Stats" on>Stats</a></li>
          <li><a className="active" href="Map">Map</a></li>
				</ul>
      <Search panTo={panTo} handleMarkers={handleMarkers} />
      <Locate panTo={panTo} />
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={defaultZoom}
        center={center}
        options={options}
        onLoad={onMapLoad}
      >
        {/* MARKER */}
        {!_.isEmpty(marker) && (
          <Marker
            key={`${marker.lat}-${marker.lng}`}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => {
              setSelected(marker);
            }}
          />
        )}

        {/* INFO WINDOW */}
        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={handleCloseClick}
          >
            <Establishment selected={selected} />
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}
