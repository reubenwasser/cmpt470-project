import React from 'react';

import './AttractionOverlay.css'

const keyValues = [
  { key: 'amenity', value: 'Amenity' },
  { key: 'tourism', value: 'Tourism' },
  { key: 'leisure', value: 'Leisure' }
];

const attractions = [
  [
    { key:'place_of_worship', value: 'Places Of Worship' },
    { key: 'restaurant', value: 'Restaurants' },
    { key: 'bank', value: 'Banks' },
    { key: 'pharmacy', value: 'Pharmacies'},
    { key: 'post_office', value: 'Post Offices' },
    { key: 'cafe', value: 'Cafes' },
    { key: 'community_centre', value: 'Community Centres' },
    { key: 'library', value: 'Libraries' },
  ],
  [
    { key: 'hotel', value: 'Hotels' },
    { key: 'attraction', value: 'Attractions' },
    { key: 'camp_site', value: 'Camp Sites' },
    { key: 'museum', value: 'Museums' },
    { key: 'gallery', value: 'Galleries' },
    { key: 'viewpoint', value: 'View Points' }
  ],
  [
    { key: 'sports_centre', value: 'Sports Centres' },
    { key: 'playground', value: 'Playgrounds' },
    { key: 'swimming_pool', value: 'Swimming Pool' },
    { key: 'golf_course', value: 'Golf Courses' },
    { key: 'pitch', value: 'Pitches' }
  ]
];

class AttractionOverlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 0,
      value: 0
    };
  }

  keyOnChange = (e) => {
    this.setState({ key: e.target.selectedIndex });
  }

  valueOnChange = (e) => {
    this.setState({ value: e.target.selectedIndex });
  }


  onSubmit = () => {
    this.props.handleSearchChange(keyValues[this.state.key].key, attractions[this.state.key][this.state.value].key);
  }

  render() {
    return (
      <div className='attractionOverlay'>
        <p id='heading'>Search for attractions:</p>
        <p id='helpText'>Ensure you have the attractions layer enabled.</p>
        <p id='helpText'>NOTE: The search may take awhile, you will be alerted when the search is done.</p>
        <select id='key' onChange={this.keyOnChange}>
          {keyValues.map((key, i) => {
            return <option key={key.key} id={i}>{key.value}</option>;
          })}
        </select>
        <select id='value' onChange={this.valueOnChange}> 
          {attractions[this.state.key].map((point, i) => {
            return <option key={point.key} id={i}>{point.value}</option>;
          })}
        </select>
        <button id="submit" onClick={this.onSubmit}>Search</button>
      </div>
    )
  }
}

export default AttractionOverlay;