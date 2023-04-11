import React from "react";
import Navbar from "../components/home/navbar";
import Main from "../components/home/main";
import Work from "../components/home/work";
import Video from "../components/home/video";
import Project from "../components/home/project";
import Contact from "../components/home/contact";
import Footer from "../components/home/footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <Work />
      <Video />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
