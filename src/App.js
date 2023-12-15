import React from "react";
import { Helmet } from "react-helmet";
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
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Conmix RMC - Ready Mix Concrete</title>
        <meta
          name="description"
          content="Provide high-quality ready mix concrete to clients."
        />

        {/* OpenGraph tags for social media */}
        <meta property="og:title" content="Conmix RMC - Ready Mix Concrete" />
        <meta
          property="og:description"
          content="Provide high-quality ready mix concrete to clients."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="URL_TO_YOUR_SOCIAL_MEDIA_IMAGE" />
        <meta property="og:url" content="URL_TO_YOUR_WEBSITE" />

        {/* Twitter card tags for social media */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Conmix RMC - Ready Mix Concrete" />
        <meta
          name="twitter:description"
          content="Provide high-quality ready mix concrete to clients."
        />
        <meta name="twitter:image" content="URL_TO_YOUR_SOCIAL_MEDIA_IMAGE" />

        {/* Viewport settings */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Favicon */}
        <link rel="icon" type="image/png" href="URL_TO_YOUR_FAVICON" />

        {/* Other meta tags as needed */}
      </Helmet>

      <Header />
      <Navbar />
      <Home />
      <AboutUs />
      <WhyUs />
      <Products />
      <Services />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
