import React from 'react';
import Team from '../components/Team/Team';
import Banner from "../components/Banner/Banner";
import Blog from "../components/Blog/Blog";
import Connect from "../components/Connect/Connect";
import Learn from "../components/Learn/Learn";
import Navbar from "../components/Navbar/Navbar";
import Footer from '../components/Footer/Footer';

export default function Home() {
  return <div>
      <Banner />
      <Team/>
      <Learn />
      <Blog />
      <Connect />
      <Footer/>
  </div>;
}
