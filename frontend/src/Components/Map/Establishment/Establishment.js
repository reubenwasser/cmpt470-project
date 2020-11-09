import React from 'react';

import SafetyForm from '../SafetyForm/SafetyForm';

import './Establishment.css';

export default function Establishment({ selected }) {
  const [displayForm, setDisplayForm] = React.useState(false);
  const { name, type, url, formatted_address, open_now } = selected;

  const handleSafetyForm = (view) => {
    setDisplayForm(view);
  };

  const isOpen = () => {
    if (open_now) {
      return <p className='open'>Open</p>;
    } else {
      return <p className='close'>Closed</p>;
    }
  };

  return (
    <div className='infoWindow'>
      <h1>{name}</h1>
      <p className='type'>{type.charAt(0).toUpperCase() + type.slice(1)}</p>
      {open_now ? isOpen() : null}
      <p>{formatted_address}</p>
      <a href={url} target='_blank' rel='noreferrer'>
        <button>Google Maps</button>
      </a>
      <button
        className='submitSafetyRating'
        onClick={() => handleSafetyForm(true)}
      >
        Submit Safety Rating
      </button>
      {displayForm && (
        <div className='form'>
          <SafetyForm handleSafetyForm={handleSafetyForm} />
          <button className='closeForm' onClick={() => handleSafetyForm(false)}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}
