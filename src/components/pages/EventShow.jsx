import React, { useState, useEffect } from "react";
import axios from "axios";

export function EventShow() {
  const [allEvents, setAllEvents] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:3000/events.json");
        setAllEvents(response.data);
      } catch (error) {
        console.error("An error occurred while fetching data: ", error);
      }
    };
    fetchEvents();
  }, []);

  const handleIndexEvents = () => {
    console.log("handleIndexEvents");
    axios.get("http://localhost:3000/events.json").then((response) => {
      console.log(response.data);
      setAllEvents(response.data);
    });
  };

  const handleSearchInput = (event) => {
    const text = event.target.value;
    console.log(text);
    setSearchText(text);

    const filteredEvents = allEvents?.filter((event) => {
      return (
        // event.sport?.toLowerCase().includes(text?.toLowerCase()) ||
        event.name?.toLowerCase().includes(text?.toLowerCase())
        // event.date?.toLowerCase().includes(text?.toLowerCase()) ||
        // event.address?.toLowerCase().includes(text?.toLowerCase()) ||
        // event.details?.toLowerCase().includes(text?.toLowerCase()) ||
        // event.city?.toLowerCase().includes(text?.toLowerCase()) ||
        // event.zipcode?.toLowerCase().includes(text?.toLowerCase())
        // Add more fields to search in as necessary
      );
    });

    setFilteredEvents(filteredEvents);
  };

  const searchBar = () => {
    return (
      <div>
        <form>
          <label htmlFor="filter">Search </label>
          <input
            className="w-1/4 focus-teal-950 my-5 "
            placeholder="Search Event..."
            onChange={(e) => handleSearchInput(e)}
          ></input>
        </form>
      </div>
    );
  };

  // useEffect(handleIndexEvents(), []);

  const eventsToRender = searchText ? filteredEvents : allEvents;
  console.log(eventsToRender);

  const renderEvents = () => {
    return eventsToRender?.map((event) => {
      return (
        <div
          key={event.id}
          className="border w-1/3 p-4 rounded-md shadow-lg mb-4 bg-white"
        >
          <h2 className="text-xl font-semibold mb-2">{event.name}</h2>
          <p className="text-gray-600 mb-1">
            <span className="font-medium">Date:</span> {event.date}
          </p>
          <p className="text-gray-600 mb-1">
            <span className="font-medium">Time:</span> {event.time}
          </p>
          <p className="text-gray-600 mb-1">
            <span className="font-medium">Location:</span> {event.address}{" "}
            {event.city}, {event.state} {event.zipcode}
          </p>
          <p className="text-gray-600 mb-1">
            <span className="font-medium">Description:</span>{" "}
            {event.description}
          </p>
        </div>
      );
    });
  };

  return (
    <div>
      <h1>All Events</h1>
      {searchBar()}
      {renderEvents()}
      <div></div>
    </div>
  );
}
