import React from 'react'
import { GeoJSON } from 'react-leaflet'
import useSwr from 'swr'
import boundariesData from "../../../Data/healthboundaries.json"

// In this file we need to join the covid api data with the health region boundaries

const fetcher = (...args) => fetch(...args).then(response => response.json())

export default function HealthRegions() {

    // Cross origin request blocked for covid api not exactly sure why 
    // TODO: Remedy Cross origin request error
    const url = 
    "https://api.opencovid.ca/timeseries?stat=cases&loc=hr&date=15-11-2020"
    const {data, error} = useSwr(url, { fetcher })

    const covidData = data && !error ? data : [];
    // TODO: Join covid api data with HealthBoundaries.json

    console.log("getting boundaries data");
    return(
        // TODO: Get health regions to display as Polygons or GeoJSON
        <GeoJSON data={boundariesData} />
    )
}