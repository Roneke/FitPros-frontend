import React from "react";

export function EventNew() {
  return (
    <div id="event-new">
      <h2 className="mb-4 text-lg text-gray-900 ">Add An Event</h2>
      <form action="#">
        <div clasName="grid gap-4 sm:grid-col-2 sm:gap-6">
          <label
            for="sport"
            className="block mb-2 text-sm font-medium text-gray-900 dark"
          >
            Sport
          </label>
          <select
            id="category"
            className="bg-gray-50 border-gray-300 text-grey-900"
          >
            <option selected=""> Select a sport</option>
            <option selected="">Cycling</option>
            <option selected=""> Running</option>
            <option selected=""> Basketball</option>
            <option selected=""> Walking</option>
            <option selected=""> Tennis</option>
            <option selected="">Soccer</option>
          </select>
          <div></div>
        </div>
      </form>
    </div>
  );
}
