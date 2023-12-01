import { AboutUs } from "./components/aboutUs/aboutUs";
import { Header } from "./components/header/header";
import { Home } from "./components/home/home";
import Products from "./components/products/products";
import Contacts from "./components/contactUs/contactUs";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/Footer/footer";
import WhyUs from "./components/whyus/whyus";
function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Home />
      <AboutUs />
      <WhyUs />
      <Products />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
