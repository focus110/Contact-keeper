import Navbar from "../src/components/layout/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { About, Home } from "./pages/index";
import ContactState from "./context/contact/ContactState";

function App() {
  return (
    <ContactState>
      <BrowserRouter>
        <>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={"404 Not Found"} />
            </Routes>
          </div>
        </>
      </BrowserRouter>
    </ContactState>
  );
}

export default App;
