import React from "react";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Services from "../../Pages/Service/Services";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import Footer from "../../Pages/Footer/Footer";
// import Contact from "../../Pages/Contact/Contact";
// import Gallery from "../../Pages/Gallery/Gallery";
// import Service from "../../Pages/Service/Service";
// import Nav from "../../Pages/Nav/Nav";
import Nav from "../../Pages/Nav/Nav";




function RouterLayout() {
  const sectionStyle = {
    margin: '10px 0'
  };

  return (
    <>
      {/* <Nav /> */}
    <Nav/>
      <div id="home" style={sectionStyle}>
        <Home />
      </div>
      <div id="services" style={sectionStyle}>
        <Services />
      </div>
      <div id="about" style={sectionStyle}>
        <About />
      </div>
    
      <div id="contact" style={sectionStyle}>
        <ContactUs />
      </div>
      <div id="footer" style={sectionStyle}>
        <Footer />
      </div>
      {/* <div id="about" style={sectionStyle}>
        <About />
      </div>
      <div id="services" style={sectionStyle}>
        <Service />
      </div>
      <div id="gallery" style={sectionStyle}>
        <Gallery />
      </div>
      <div id="contact" style={sectionStyle}>
        <Contact />
      </div> */}
    </>
  );
}

export default RouterLayout;
