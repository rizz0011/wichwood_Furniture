import React from "react";
import "./Services.css";


const Services = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-content">
      <div className="service-item" >
          <h2>Sofa Repair & Upholstery</h2>
          <p>We provide high-quality sofa repair services to extend the life of your furniture.</p>
          <article className="contact__option">
          <a href="https://wa.me/+918088941575?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20Sofa%20Repair...?">
            Send a message
          </a>
        </article>

        </div>
        <div className="service-item">
          <h2>Recliner Repair Specialist</h2>
          <p>We offer a variety of recliner options for ultimate comfort in your living space.</p>
          <article className="contact__option">
          <a href="https://wa.me/+918088941575?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20Recliner%20Service...?">
            Send a message
          </a>
        </article>
        </div>
        <div className="service-item">
          {/* <img src={AboutImg} alt="Service 2" className="service-image" /> */}
          <h2>Dining Chair Upholstery</h2>
          <p>We offer a variety of dining chairs that combine comfort and elegance.</p>
          <article className="contact__option">
          <a href="https://wa.me/+918088941575?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20Dining%20Chair%20Service...?">
            Send a message
          </a>
        </article>
        </div>
        <div className="service-item">
          {/* <img src={AboutImg} alt="Service 1" className="service-image" /> */}
          <h2>Sofa Manufacturing</h2>
          <p>
            We specialize in creating luxurious and modern sofas that are both
            stylish and comfortable. Our team uses high-quality materials and
            the latest techniques to ensure every piece meets our high
            standards.
          </p>
          <article className="contact__option">
          <a href="https://wa.me/+918088941575?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20Sofa%20Manufacturing%20Service...?">
            Send a message
          </a>
        </article>
        </div>
        <div className="service-item">
          {/* <img src={AboutImg} alt="Service 2" className="service-image" /> */}
          <h2>Customised Bed & Headboard</h2>
          <p>
            Our custom headboards are designed to complement any bedroom decor.
            Choose from a variety of styles and materials to create the perfect
            look for your space.
          </p>
          <article className="contact__option">
          <a href="https://wa.me/+918088941575?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20Bed%20&%20Headboard%20Service...?">
            Send a message
          </a>
        </article>
        </div>
       

        <div className="service-item">
          {/* <img src={AboutImg} alt="Service 2" className="service-image" /> */}
          <h2>Wood Polish</h2>
          <p>We offer wood refinishing services to restore the original beauty of your wooden furniture.</p>
          <article className="contact__option">
          <a href="https://wa.me/+918088941575?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20Wood%20Polish%20Service...?">
            Send a message
          </a>
        </article>

        </div>
             


       



       
        {/* <div className="service-item">
          <img src={AboutImg} alt="Service 3" className="service-image" />
          <h2>Furniture Repair</h2>
          <p>
            Whether your furniture needs minor repairs or a complete overhaul,
            our skilled craftsmen can restore it to its original beauty. We
            handle everything from upholstery to structural repairs.
          </p>
        </div> */}
        {/* <div className="service-item">
          <img src={AboutImg} alt="Service 3" className="service-image" />
          <h2>Wood Refinishing</h2>
          <p>
            We offer wood refinishing services to restore the original beauty of
            your wooden furniture. Our team meticulously sands, stains, and
            seals each piece to bring out its natural charm and extend its life.
            Trust us to revive your furniture and make it look as good as new.{" "}
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Services;
