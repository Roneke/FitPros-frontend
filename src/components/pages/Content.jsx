import Signup from "../Signup";
import { EventNew } from "./EventNew";
import { EventIndex } from "./EventIndex";
import Login from "../Login";
import { Routes, Route } from "react-router-dom";
import { Main } from "../Main";
import { Updateprofile } from "./Updateprofile";
// import { LogoutLink } from "./LogoutLink";

export function Content() {
  return (
    <div>
      <Routes>
        <Route path="/fitpros" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/event" element={<EventNew />} />
        <Route path="/showpage" element={<EventIndex />} />
        <Route path="/home" element={<Main />} />
        <Route path="/profile" element={<Updateprofile />} />
      </Routes>
    </div>
  );
}
