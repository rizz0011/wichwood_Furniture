import React, { useState, useEffect } from "react";
import "./Home.css";
import image from "../../../src/Assest/homePage.png";
import { Grid } from "@mui/material";

function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <div className="home-container">
      <Grid container spacing={1} className="home-content">
        <Grid item sm={12} md={6} className="home-text">
          <div className="brand_name">
            <span>Welcome to Wich Woods</span>
          </div>
          <div className="homeService">
            <span>All Kinds of Modern Sofa & Headboard Repair Services</span>
          </div>
          <div className="homeAbout">
            <span>
              Discover the premier choice for furniture repair and restoration.
              At Wich Woods, we specialize in modern sofas, headboards, and a
              wide array of luxurious furniture pieces.
            </span>
          </div>
        </Grid>
        <Grid item sm={12} md={6} className="home-image-container">
          {imageLoaded && <img src={image} alt="Home" className="home-image" />}
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
