import React from 'react';

import '../css/SafetyForm.css';

// Going to add more to the form in the future
const options = [
  'All employees are wearing face coverings',
  'There are signs and markers for social distancing throughout the establishment',
  'Limited number of customers allowed',
  'Face coverings are mandatory for all customers',
  'Hand sanitizer is available throughout the establishment',
  'No-touch payment options are available',
];

export default function SafetyForm() {
  return (
    <div>
      <form>
        {options.map((option) => (
          <div key={option}>
            <input type='checkbox' id={option} value={option} />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
        <button className='submitButton'>Submit</button>
      </form>
    </div>
  );
}
