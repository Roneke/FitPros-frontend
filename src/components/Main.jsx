import * as React from "react";
import ReactMapGL, {
  Marker,
  Popup,
  GeolocateControl,
  NavigationControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { EventShow } from "./pages/EventShow";
import axios from "axios";
// import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";

export function Main() {
  const [events, setEvents] = useState([]);
  const [popupInfo, setPopupInfo] = useState(null);

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
    <Box sx={{ width: "100vw", height: "80vh", display: "relatiive" }}>
      <div className="mapContainer" style={{ width: "100vw", height: "80vh" }}>
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
              onClick={(e) => {
                e.originalEvent.stopPropagation();
                setPopupInfo(event);
              }}
            >
              <button className="marker-btn">
                <img src="src/assets/Map-Marker.png" alt="icon" />
              </button>
            </Marker>
          ))}
          {popupInfo && (
            <Popup
              anchor="top"
              latitude={popupInfo.latitude}
              longitude={popupInfo.longtitude}
              onClose={() => setPopupInfo(null)}
            >
              <div>
                <h2>{popupInfo.name}</h2>
                <img src={popupInfo.image} />
              </div>
            </Popup>
          )}
          <GeolocateControl></GeolocateControl>
          <NavigationControl />
        </ReactMapGL>
      </div>
    </Box>
  );
}
