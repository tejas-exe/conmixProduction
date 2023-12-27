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
    scroller.scrollTo(element, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Conmix RMC Somnath,Surat</title>
        <meta
          name="description"
          content="Provide high-quality ready mix concrete to clients."
        />

        <meta property="og:title" content="Conmix RMC - Ready Mix Concrete" />
        <meta
          property="og:description"
          content="Provide high-quality ready mix concrete to clients."
        />
      </Helmet>
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
