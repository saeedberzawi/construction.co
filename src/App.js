import React from "react";
import "./App.css";
import { About, Contact, Footer, Home, Message, Project } from "./containers";
import { Brand, Navbar, News, Ourteam } from "./components";
const App = () => {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Home />
      </div>
      <Brand />
      <About />
      <Ourteam />
      <Message />
      <Contact />
      <Project />
      <News />
      <Footer />
    </div>
  );
};

export default App;
