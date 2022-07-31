import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Services from "./Pages/Services";
import Terms from "./Pages/Terms";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="services" element={<Services />} />
        <Route path="terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
