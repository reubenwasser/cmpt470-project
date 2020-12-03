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
    };
  }

  componentDidUpdate(prevProps) {
    // compare prev props to the current props to see if there was a change
    if (prevProps.searchParams[0] !== this.props.searchParams[0] || prevProps.searchParams[1] !== this.props.searchParams[1]) {
      this.setState({ searchKey: this.props.searchParams[0], searchValue: this.props.searchParams[1] }, () => {
        this.runQuery();
      });
    }
  }

  componentDidMount() {
    this.runQuery();
  }

  dataHandler = (error, osmData) => {
    if (!error && osmData.features !== undefined) {
      console.log(osmData)
      this.setState({ geojson: osmData });
    }
    if (error) {
      console.log(error.message);
    }
  };

  runQuery = () => {
    if (this.state.searchKey && this.state.searchValue) {
      console.log('run query');

      const query = `[out:json];\n
      area[name="Canada"]->.a;\n
      (node(area.a)[${this.state.searchKey}=${this.state.searchValue}];);\n
      out body;>;out skel qt;`;

      // const referenceQuery = `[out:json];\
      // area[name="Canada"]->.a;\
      // (node(area.a)[tourism=museum];\
      // relation[historic=castle](around:10000, 50.0874654,14.4212535););\
      // out body;>;out skel qt;`;

      const options = {
        flatProperties: true,
        overpassUrl: 'https://overpass-api.de/api/interpreter',
      };
      overpass(query, this.dataHandler, options);
    }
  }

  render() {
    console.log('OVERPASS API BEING LOADED');
    return this.state.geojson ? <GeoJSON data={this.state.geojson} /> : null;
  }
}
