import Signup from "../Signup";
import { EventNew } from "./EventNew";
import { EventShow } from "./EventShow";
import Login from "../Login";
import { Routes, Route } from "react-router-dom";
import { Main } from "../Main";
import Profile from "./Profile";

export function Content() {
  return (
    <div>
      <Routes>
        <Route path="/fitpros" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/event" element={<EventNew />} />
        <Route path="/showpage" element={<EventShow />} />
        <Route path="/home" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
