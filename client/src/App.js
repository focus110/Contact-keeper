import Navbar from "../src/components/layout/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { About, Home } from "./pages/index";

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={"404 Not Found"} />
          </Routes>{" "}
        </div>
      </>
    </BrowserRouter>
  );
}

export default App;
