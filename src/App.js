import React from "react";
import "./resources/styles.css";
import { scrollElement } from "react-scroll";
import Header from "./components/header_footer/Header";
import Featured from "./components/featured/Featured";
import TimeUntil from "./components/featured/TimeUntil";
import VenueInfo from "./components/venueInfo/VenueInfo";
import Highlights from "./components/highlights/Highlights";
import Pricing from "./components/pricing/Pricing";
import Location from "./components/location/index";
import Footer from "./components/header_footer/Footer";

const App = () => {
  return (
    <div className="App" style={{ height: "1500px" }}>
      <Header />

      <scrollElement name="header">
        <Featured />
      </scrollElement>
      <TimeUntil />

      <scrollElement name="info">
        <VenueInfo />
      </scrollElement>

      <scrollElement name="highlights">
        <Highlights />
      </scrollElement>

      <scrollElement name="pricing">
        <Pricing />
      </scrollElement>

      <scrollElement name="location">
        <Location />
      </scrollElement>
      <Footer />
    </div>
  );
};

export default App;
