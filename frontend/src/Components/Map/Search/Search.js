import React from 'react';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
  getDetails,
} from 'use-places-autocomplete';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox';

import '@reach/combobox/styles.css';
import './Search.css';

export default function Search({ panTo, handleMarkers }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      // prefer places to the user
      location: { lat: () => 49.28273, lng: () => -123.120735 },
      radius: 200 * 1000, // 200km
      types: ['establishment'],
    },
  });

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      const parameter = {
        placeId: results[0].place_id,
      };
      const {
        name,
        types,
        url,
        formatted_address,
        opening_hours, 
      } = await getDetails(parameter);
      // const open_now = opening_hours.isOpen(); 
      const open_now = opening_hours ? opening_hours.isOpen() : null;
      panTo({ lat, lng });
      handleMarkers({
        lat,
        lng,
        name,
        types,
        url,
        formatted_address,
        open_now,
      });
    } catch (error) {
      console.log('error: ', error);
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className='search'>
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          disabled={!ready}
          onChange={handleChange}
          placeholder='Search...'
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === 'OK' &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}
