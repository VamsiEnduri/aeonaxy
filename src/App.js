import React from "react";
// import "./App.css";
import Header from "./Components/Header";
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";
import Banner from "./Components/Banner";
import BusinessPlans from "./Components/BusinessPlans";
import Payments from "./Components/Payments";
import Plans from "./Components/Plans";

const App = () => {
  return (
    <div className="text-sm">
      <Header />
      <Banner />
      <Plans />
      <BusinessPlans />
      <Payments />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
