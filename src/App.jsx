import React from "react";
import { Helmet } from "react-helmet";
import { Element, scroller } from "react-scroll";
import { AboutUs } from "./components/aboutUs/aboutUs";
import { Header } from "./components/header/header";
import { Home } from "./components/home/home";
import Products from "./components/products/products";
import Contacts from "./components/contactUs/contactUs";
import Grainient from "./components/grainient/Grainient";
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
    <div className="site-shell">
      <div className="site-background" aria-hidden="true">
        <Grainient
          className="site-grainient"
          color1="#ff9f9f"
          color2="#ffffff"
          color3="#F43F5E"
          timeSpeed={0.25}
          colorBalance={0.0}
          warpStrength={1.0}
          warpFrequency={5.0}
          warpSpeed={2.0}
          warpAmplitude={50.0}
          blendAngle={0.0}
          blendSoftness={0.05}
          rotationAmount={500.0}
          noiseScale={2.0}
          grainAmount={0.1}
          grainScale={2.0}
          grainAnimated={false}
          contrast={1.5}
          gamma={1.0}
          saturation={1.0}
          centerX={0.0}
          centerY={0.0}
          zoom={0.9}
        />
      </div>
      <div className="site-content">
      <Helmet>
        <meta charSet="utf-8" />
        {/* <title>Conmix RMC Somnath,Surat</title> */}
        <meta
          name="description"
          content="Provide high-quality ready mix concrete to clients."
        />
        <meta
          name="keywords"
          content="Conmix RMC Somnath,Surat Provide high-quality ready mix concrete to clients."
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
      </div>
    </div>
  );
}

export default App;
