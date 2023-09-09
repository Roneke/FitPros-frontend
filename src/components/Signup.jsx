import React from "react";
import { useState } from "react";
import loginImg from "../assets/fitness-trends.webp";
import axios from "axios";

export default function Signup() {
  const [errors, setErrors] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/fitpros";
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };
  return (
    <div className="relative w-full h-screen bg-zinc-900/90">
      <div className="hidden sm:block">
        <img
          className="absolute w-full h-full object-cover mix-blend-overlay"
          src={loginImg}
          alt=""
        />
      </div>
      <div className="flex justify-center items-center h-full">
        <form
          onSubmit={handleSubmit}
          className="max-w-[400px] w-full mx-auto bg-white p-4"
        >
          <h2 className="text-emerald-400 font-bold text-center text-4xl py-4">
            {" "}
            FitPros
          </h2>
          <div className="flex flex-col mb-4">
            <label>FirstName</label>
            <input
              name="first_name"
              className="border relative bg-gray-100 p-2"
              type="text"
            />
          </div>
          <div className="flex flex-col py-2">
            <label>Lastname</label>
            <input
              name="last_name"
              className="border  relative bg-gray-100 p-2"
              type="text"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label>Email</label>
            <input
              name="email"
              className="border relative bg-gray-100 p-2"
              type="text"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label>Password</label>
            <input
              name="password"
              className="border relative bg-gray-100 p-2"
              type="password"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label>Password Confirmation</label>
            <input
              name="password_confirmation"
              className="border relative bg-gray-100 p-2"
              type="password"
            />
          </div>
          <button
            className="border w-full mt-8 py-3 bg-emerald-400 hover:bg-emerald-300 text-white relative"
            // onClick={() => props.Signup(true)}
          >
            Register{" "}
          </button>
        </form>
      </div>
    </div>
  );
}
