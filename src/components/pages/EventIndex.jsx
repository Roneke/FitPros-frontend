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
            className="focus-teal-950 my-5 h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none "
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
        <div
          key={event.id}
          className="card border w-1/3 p-4 rounded-md shadow-lg mb-4 bg-gray-800 sm:flex md:flex"
        >
          <div class="sm:flex-shrink-0 md:flex-shrink-0">
            <img
              src={event.image}
              className="imagine w-full sm:w-56 md:w-56 lg:w-56"
              alt=""
            />
          </div>
          <div className="righty ml-3 md:mt-0 md:ml-6 sm:ml-3">
            <div class="grid grid-cols-2 gap-4">
              <h2 className="text-gray-100 mt-2 mb-4 uppercase tracking-wide text-lg text-600 font-bold">
                {event.name}
              </h2>

              <p className="text-gray-600 mb-1">
                <span className="font-medium text-gray-200 mb-1 uppercase tracking-wide text-400 cardheading">
                  Time:
                </span>{" "}
                {event.time}
              </p>
            </div>
            {/* heading */}

            <div class="lefting">
              <div class="date-ribbon border-2 border-gray-200 mr-4">
                <h2 className="text-gray-100 mb-1">
                  <span className="text-gray-100  text-600 font-bold tracking-wide text-xl text-600 ">
                    Date:
                  </span>{" "}
                  {event.date}
                </h2>
              </div>
            </div>
            <p className="text-gray-100 mb-1">
              <span className="text-gray-100 font-medium">Location:</span>{" "}
              {event.address} {event.city}, {event.state} {event.zipcode}
            </p>
            <p className=" mb-2 mt-2 mr-6 text-gray-300 md:w-3/4 lg:w-3/4">
              <span className="text-lg md:w-3/4 lg:w-3/4 leading-tight font-semibold text-gray-200 hover:underline">
                Details:
              </span>{" "}
              {event.details}
            </p>
          </div>
          <div class="lefting h-16 mb-2">
            <button className="btn bg-transparent uppercase  hover:bg-red-500 text-gray-100 font-semibold hover:text-black py-2 px-4 border-2 border-red-500 hover:border-transparent mb-2 mr-4">
              Join
            </button>
          </div>
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
