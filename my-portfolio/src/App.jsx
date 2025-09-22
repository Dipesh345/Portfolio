import React from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx"
import About from "./components/About.jsx"
import Resume from "./components/Resume.jsx"
import Portfolio from "./components/Portfolio.jsx"
import Contact from "./components/Contact.jsx"

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
