import React from 'react';
import { GeoJSON } from 'react-leaflet';

const overpass = require('query-overpass');

export default class Attractions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      geojson: undefined,
      searchKey: props.searchParams[0] || undefined,
      searchValue: props.searchParams[1] || undefined,
      mapBounds: props.mapBounds,
    };
  }

  // update props if there was a change
  componentDidUpdate(prevProps) {
    if (prevProps.searchParams[0] !== this.props.searchParams[0] || prevProps.searchParams[1] !== this.props.searchParams[1]) {
      this.setState({ searchKey: this.props.searchParams[0], searchValue: this.props.searchParams[1] }, () => {
        // need to clear the points on the map first
        this.setState({ geojson: undefined }, () => {
          this.runQuery();
        });
      });
    }

    if (prevProps.mapBounds !== this.props.mapBounds) {
      this.setState({ mapBounds: this.props.mapBounds });
    }
  }

  componentDidMount() {
    this.runQuery();
  }

  dataHandler = (error, osmData) => {
    alert(`${osmData.features.length} results returned`);
    if (!error && osmData.features !== undefined) {
      this.setState({ geojson: osmData });
    }
    if (error) {
      console.log(error.message);
      alert(error.message);
    }
  };

  runQuery = () => {
    if (this.state.searchKey && this.state.searchValue) {
      const east = this.state.mapBounds['_northEast'].lat;
      const north = this.state.mapBounds['_northEast'].lng;
      const south = this.state.mapBounds['_southWest'].lng;
      const west = this.state.mapBounds['_southWest'].lat;

      const query = `[out:json];\n
      area[name="Canada"]->.a;\n
      (node(area.a)[${this.state.searchKey}=${this.state.searchValue}](${west},${south},${east},${north}););\n
      out body;>;out skel qt;`;

      const options = {
        flatProperties: true,
        overpassUrl: 'https://overpass-api.de/api/interpreter',
      };
      overpass(query, this.dataHandler, options);
    }
  }

  onEachFeature = (feature, layer) => {
    const popupContent = `Name: ${feature.properties.name} <br>`;
    const popupOptions = {
      'maxWidtgh': '400',
      'width': '200',
      'className': 'popupCustom'
    };
    layer.bindPopup(popupContent, popupOptions);
  }

  render() {
    return this.state.geojson ? <GeoJSON data={this.state.geojson} onEachFeature={this.onEachFeature} /> : null;
  }
}
