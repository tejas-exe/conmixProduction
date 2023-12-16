import React from "react";
import { Helmet } from "react-helmet";
import { Link, Element, scroller } from "react-scroll";
import { AboutUs } from "./components/aboutUs/aboutUs";
import { Header } from "./components/header/header";
import { Home } from "./components/home/home";
import Products from "./components/products/products";
import Contacts from "./components/contactUs/contactUs";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/Footer/footer";
import WhyUs from "./components/whyus/whyus";
import Services from "./components/serviceProjects/services";

function App() {
  const scrollToElement = (element) => {
    console.log("--------->", element);
    scroller.scrollTo(element, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  const pages = ["Home", "About Us", "Why Us", "Products", "Contact"];
  return (
    <>
      {/* helmet */}
      <Header />
      <Navbar scrollToElement={scrollToElement} />
      <Element name="Home">
        <Home />
      </Element>
      <Element name="About Us">
        <AboutUs />
      </Element>
      <Element name="Why Us">
        <WhyUs />
      </Element>
      <Element name="Products">
        <Products />
      </Element>
      <Element name="services">
        <Services />
      </Element>
      <Element name="Contact">
        <Contacts />
      </Element>
      <Footer />
    </>
  );
}

export default App;
