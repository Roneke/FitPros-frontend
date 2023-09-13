import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "./Modal.jsx";

export function Updateprofile() {
  const [user, setUser] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const updateUserProfile = () => {
    const updatedUserData = {};

    axios
      .patch("http://localhost:3000/current_user.json", updatedUserData)
      .then((response) => {
        console.log("Profile updated successfully:", response.data);
        closeModal(); // Close the modal after successful update
        // You may want to refresh the user's data by making another GET request here
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });
  };

  // axios.patch("http://localhost:3000/current_user.json", params).then((response) => {
  //   console.log(response.data);
  //   event.target.reset();
  //   window.location.href = "/"; s
  // });

  const handleShowUser = () => {
    axios.get("http://localhost:3000/current_user.json").then((response) => {
      setUser(response.data);
    });
  };
  useEffect(handleShowUser, []);
  //function to open modal
  const openModal = () => {
    setIsModalOpen(true);
    console.log("testing");
  };

  /// function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section>
      <div class="bg-white shadow rounded">
        <div class="relative">
          <img
            class="h-56 shadow rounded-t w-full object-cover object-center"
            src="https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div class="inset-0 m-auto w-24 h-24 absolute bottom-0 -mb-12 xl:ml-10 rounded border-2 shadow border-white">
            <img
              class="w-full h-full overflow-hidden object-cover rounded"
              src={user.profile_img}
              alt=""
            />
          </div>
        </div>
        <div class="px-5 xl:px-10 pb-10">
          <div class="flex justify-center xl:justify-end w-full pt-16 xl:pt-5"></div>
          <div class="pt-3 xl:pt-5 flex flex-col xl:flex-row items-start xl:items-center justify-between">
            <div class="xl:pr-16 w-full xl:w-2/3">
              <div class="text-center xl:text-left mb-3 xl:mb-0 flex flex-col xl:flex-row items-center justify-between xl:justify-start">
                <h2 class="mb-3 xl:mb-0 xl:mr-4 text-2xl text-emerald-600 font-medium tracking-normal">
                  {user.first_name} {user.last_name}
                </h2>

                <div class="text-sm  text-slate px-5 py-1 font-normal rounded-full">
                  {user.job_title} |{user.location}
                </div>
              </div>
              <p class="text-center xl:text-left mt-2 text-sm tracking-normal text-gray-600 leading-5">
                {user.bio}
              </p>
            </div>
            <div class="xl:px-10 xl:border-l xl:border-r w-full py-5 flex items-start justify-center xl:w-1/3">
              <div class="mr-6 xl:mr-10">
                <p class="text-gray-600 text-sm xl:text-xl leading-5">
                  <span className="text-emerald-600 font-semibold ">
                    Industry:
                  </span>
                  {user.industry}
                </p>
              </div>
              <div class="mr-6 xl:mr-10"></div>
            </div>
            <div class="w-full xl:w-2/3 flex-col md:flex-row justify-center xl:justify-end flex md:pl-6">
              <div class="flex items-center justify-center xl:justify-start mt-1 md:mt-0 mb-5 md:mb-0"></div>
              <button
                class="focus:outline-none ml-0 md:ml-5 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-3 md:px-6 py-2 text-sm"
                onClick={() => openModal()}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white shadow rounded">{/* <div class="relative"> */}</div>
      <div className="border w-1/3 p-4 rounded-md shadow-lg mb-4 bg-white">
        <h2 className="text-xl font-semibold mb-2"></h2>
        <p className="text-gray-600 mb-1">
          <span className="font-medium">Date:</span>
        </p>
        <p className="text-gray-600 mb-1">
          <span className="font-medium">Time:</span>
        </p>
        <p className="text-gray-600 mb-1">
          <span className="font-medium">Location:</span>
        </p>
        <p className="text-gray-600 mb-1">
          <span className="font-medium">Description:</span>
        </p>
      </div>
      <Modal show={isModalOpen} onClose={closeModal}>
        <div>
          <h2 class="text-xl text-gray-600 dark:text-gray-300 pb-2">
            Update Account
          </h2>
          <div>
            <label htmlFor="inputField text-gray-600 dark:text-gray-400">
              Industry
            </label>
            <input
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
              type="text"
              id="inputField"
            />
            <div>
              <label htmlFor="inputField ext-gray-600 dark:text-gray-400">
                JobTitle
              </label>
              <input
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                type="text"
                id="inputField"
              />
            </div>
            <div>
              <label htmlFor="inputField ext-gray-600 dark:text-gray-400">
                Location
              </label>
              <input
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                type="text"
                id="inputField"
              />
              <label htmlFor="inputField ext-gray-600 dark:text-gray-400">
                Bio
              </label>
              <input
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                type="text"
                id="inputField"
              />
              <button
                onClick={() => updateUserProfile()}
                data-modal-target="small-modal"
                data-modal-toggle="small-modal"
                class="block w-full md:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </section>
  );
}
