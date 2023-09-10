import * as React from "react";
import ReactMapGL, { Marker, Popup, GeolocateControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { EventShow } from "./pages/EventShow";
import axios from "axios";
// import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";

export function Main() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectEvent] = useState([]);

  const [viewState, setViewState] = useState({
    longitude: -73.996699,
    latitude: 40.700291,
    zoom: 12,
  });
  const handleIndexEvents = () => {
    console.log("handleIndexEvents");
    axios.get("http://localhost:3000/events.json").then((response) => {
      console.log(response.data);
      setEvents(response.data);
    });
  };
  useEffect(handleIndexEvents, []);
  return (
    <Box sx={{ width: "100vw", height: "100vh", display: "relatiive" }}>
      <div className="mapContainer" style={{ width: "100vw", height: "100vh" }}>
        <h1>Search Events</h1>
        <p className="event">Check Out Events Happening in your city</p>
        <ReactMapGL
          {...viewState}
          mapboxAccessToken=""
          width="100%"
          height="100%"
          onViewportChange={(viewState) => setViewState(viewState)}
          // transitionDuration="200"
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          {events.map((event) => (
            <Marker
              key={event.id}
              latitude={event.latitude}
              longitude={event.longtitude}
            >
              <button
                className="marker-btn"
                onClick={(e) => {
                  e.preventDefault;
                  selectedEvent(event);
                }}
              >
                <img src="src/assets/icons8-place-marker-50.png" alt="icon" />
              </button>
            </Marker>
          ))}
          {/* {selectEvent ? (
            <Popup 
            tipSize={5}
             anchor="top"
            latitude ={selectEvent.latitude[0]} longitude = {selectEvent.longitude[0]}
            onClose ={() => setSelectEvent(null)}}
            >
            <div>
              <h2>{selectEvent.event.name}</h2>
            </div>
            </Popup>
            ):null} */}
          <GeolocateControl></GeolocateControl>
        </ReactMapGL>
      </div>
    </Box>
  );
}
