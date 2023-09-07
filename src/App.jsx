import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import { EventNew } from "./components/pages/eventNew";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/fitpros" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="event" element={<EventNew />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
