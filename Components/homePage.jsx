import React from "react";
import BannerHome from "./bannerhome";

const HomePage = () => {
  return (
    <div className="hero_area">
      <div className="hero_bg_box">
        <div className="bg_img_box">
          <img src="images/background.png" alt="" />
        </div>
      </div>
      <BannerHome />
    </div>
  );
};

export default HomePage;
