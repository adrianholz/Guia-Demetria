import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home'
import Search from './Pages/Search'


function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="search" element={<Search />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
