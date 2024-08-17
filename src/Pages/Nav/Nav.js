import React from "react";
import "./Nav.css";
import { MdCall } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

function Nav() {
  const handleCall = () => {
    window.location.href = "tel:+91 8088941575";
  };

  return (
    <nav>
      <button onClick={handleCall}>
        <MdCall />
      </button>
      <button>
        <a href="https://wa.me/+918088941575?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20services...">
          <BsWhatsapp style={{ color: "white" }} />
        </a>
      </button>
    </nav>
  );
}

export default Nav;
