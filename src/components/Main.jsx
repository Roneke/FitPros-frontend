import * as React from "react";
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";
// import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";

export function Main() {
  const [viewState, setViewState] = useState({
    longitude: -73.996699,
    latitude: 40.700291,
    zoom: 12,
  });
  return (
    <div className="mapContainer" style={{ width: "100vw", height: "100vh" }}>
      <h1>Search Events</h1>
      <p className="event">Check Out Events Happening in your city</p>
      <Map
        {...viewState}
        mapboxAccessToken=
        width="100%"
        height="100%"
        transitionDuration="200"
        mapStyle="mapbox://styles/mapbox/streets-v9"
      ></Map>
    </div>
  );
}
