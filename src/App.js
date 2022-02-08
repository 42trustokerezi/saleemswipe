import Blog from "./components/Blog/Blog";
import Hero from "./components/Hero/Hero";
import Learn from "./components/Learn/Learn";
import Navbar from "./components/Navbar/Navbar";
import Team from "./components/Team/Team";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Team/>
      <Learn />
      <Blog />
    </div>
  );
}

export default App;
