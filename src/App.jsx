import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Content } from "./components/pages/Content";
import { Footer } from "./components/pages/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Content />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
