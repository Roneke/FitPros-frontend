import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import { EventNew } from "./components/pages/eventNew";
import { Footer } from "./components/pages/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/fitpros" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="event" element={<EventNew />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
