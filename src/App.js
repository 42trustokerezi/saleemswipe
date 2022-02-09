
import Blog from "./components/Blog/Blog";
import Connect from "./components/Connect/Connect";
import Hero from "./components/Hero/Hero";
import Learn from "./components/Learn/Learn";
import Navbar from "./components/Navbar/Navbar";
import Team from "./components/Team/Team";
import Home from './pages/Home'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      
        
        <Navbar/>
        <Home/>
     

      
    </div>
  );
}

export default App;
