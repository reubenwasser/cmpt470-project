import React from 'react';

import './Locate.css';

export default function Locate({ panTo }) {
  return (
    <div
      className='locate'
      onClick={() => {
        // Pans the map to the user's current location
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 20 20'
        fill='currentColor'
      >
        <path
          fillRule='evenodd'
          d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
          clipRule='evenodd'
        />
      </svg>
    </div>
  );
}
