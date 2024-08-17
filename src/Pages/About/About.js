import React from "react";
import "./About.css";
import AboutImg from "../../Assest/about.png";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1>About Us</h1>
        <p>
          Welcome to Wich Woods! Since our establishment in 2020, we have been
          dedicated to providing high-quality sofa manufacturing and repair
          services. Our commitment to excellence and customer satisfaction has
          earned us the trust of over 1000 customers.
        </p>
        <p>
          Our team of skilled craftsmen and designers are passionate about
          creating modern, stylish, and comfortable furniture that enhances the
          beauty of your home. We specialize in luxurious sofas, headboards,
          recliners, and more. Whether you need a new piece of furniture or want
          to repair and refurbish your existing ones, we are here to help.
        </p>
        <p>
          At Wich Woods, we believe that furniture should not only look good but
          also stand the test of time. That's why we use the finest materials
          and the latest techniques to ensure durability and longevity. Your
          satisfaction is our priority, and we strive to exceed your
          expectations with every project.
        </p>
        <p>
          Thank you for choosing us for your furniture needs. We look forward to
          serving you and helping you create the perfect living space.
        </p>
        {/* <h3>Why Choose Wich Woods?</h3>
        <p class="styled-paragraph">
          Expert Craftsmanship: With over three years of expertise, we bring
          unparalleled skill to every project.
          <br /> Trusted by Thousands: Since 2020, over 1000 satisfied customers
          have entrusted us with their cherished furniture.
          <br /> Comprehensive Services: From sofas to headboards, our
          meticulous repair services cater to all your furniture needs.
        </p> */}
      </div>
      {/* <div className="about-us-image-container">
        <img src={AboutImg} alt="About Us" className="about-us-image" />
      </div> */}
    </div>
  );
};

export default AboutUs;
