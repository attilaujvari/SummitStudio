import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import dummyText from "./DummyText";
import Main from "./components/Main";

const App = () => {
    return (
      <div className="App">
        <Navbar />

        <div className="SectionContainer">
            <Main id="home"/>
            {/*<Section*/}
            {/*    title="Home"*/}
            {/*    subtitle={dummyText}*/}
            {/*    dark={true}*/}
            {/*    id="home"*/}
            {/*/>*/}
            <Section
                title="Who we are"
                subtitle={dummyText}
                dark={false}
                id="about"
            />
            <Section
                title="Services"
                subtitle={dummyText}
                dark={true}
                id="services"
            />
            <Section
                title="Portfolio"
                subtitle={dummyText}
                dark={false}
                id="portfolio"
            />
            <Section
                title="Contact Us"
                subtitle={dummyText}
                dark={true}
                id="contact"
            />
        </div>
      </div>
    );
}

export default App
