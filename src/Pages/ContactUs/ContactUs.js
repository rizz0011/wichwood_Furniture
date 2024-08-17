import React from "react";
import { MdEmail } from "react-icons/md";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import "./ContactUs.css";

const ContactUs = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "51b18feb-1f0f-43e8-9acf-29437e84b5bf");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }

    // Clear the result message after 3 seconds
    setTimeout(() => {
      setResult("");
    }, 3000);
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <h3>Get in Touch</h3>
        <p>
          If you have any questions or inquiries, feel free to reach out to us.
          We are here to help you with all your furniture needs!
        </p>
      </div>

      <div className="contact__options">
        <article className="contact__option">
          <MdEmail />
          <h4>Email</h4>
          <h5>wichwoodsofa@gmail.com</h5>
          <a href="mailto:wichwoodsofa@gmail.com">Send a message</a>
        </article>

        <article className="contact__option">
          <BsWhatsapp />
          <h4>WhatsApp</h4>
          <a href="https://wa.me/+918088941575?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20services...">
            Send a message
          </a>
        </article>

        <article className="contact__option">
          <BsInstagram />
          <h4>Instagram</h4>
          <a href="https://instagram.com/wich_wood">Send a message</a>
        </article>
      </div>
      <form className="contact-form" onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="phoneNumber">Phone Number</label>
        <input type="number" id="phoneNumber" name="phoneNumber" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Send Message</button>
      </form>
      {result && (
        <div className="result-message">
          <span className="icon">✔️</span>
          <span>{result}</span>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
