import React, { useState, useEffect } from "react";
import axios from "axios";

export function EventIndex() {
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
            className="focus-teal-950 my-5 h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none bg-slate-200"
            placeholder="Search Events"
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
        <div className="grid-cols-2 gap-4">
          <div
            key={event.id}
            className="card
          border w-1/3 p-4 rounded-md shadow-lg mb-4 bg-gray-800 "
          >
            <img
              src={event.image}
              className="card-img-top w-full"
              alt="Card image cap"
            />
            <h2 className="text-gray-100 mb-4 text-center uppercase tracking-wide text-lg text-600 font-bold cardheading">
              {event.name}
            </h2>
            <p className="text-gray-100 mb-1 text-sm">
              <span className="text-gray-100  text-sm text-600 font-bold">
                Date:
              </span>
              {event.friendly_date}
            </p>
            <p className="text-gray-100 mb-1 text-sm">
              <span className="font-medium text-gray-100">Time:</span>{" "}
              {event.time}
            </p>
            <p className="mb-1 text-gray-100">
              <span className="font-medium text-gray-100">Location:</span>{" "}
              {event.address} {event.city}, {event.state} {event.zipcode}
            </p>
            <p className="text-gray-100 mb-1">
              <span className="font-medium text-gray-100">Details:</span>{" "}
              {event.details}
            </p>
            <button className="bg-transparent uppercase  hover:bg-red-500 text-gray-100 font-semibold hover:text-black py-2 px-4 border-2 border-red-500 hover:border-transparent mb-2 mr-4 ">
              JOIN
            </button>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <h1 className="heading text-center font-extrabold">All Events</h1>
      {searchBar()}
      {renderEvents()}
      <div></div>
    </div>
  );
}
