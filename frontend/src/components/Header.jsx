import React from "react";
import BannerImage from "./header/BannerImage";
import Navbar from "./header/Navbar";
import imageForBanner from "../assets/images/bannerImageFile.png";

function Header() {
  return (
    <div>
      <BannerImage imageLink={imageForBanner} />
      <Navbar />
    </div>
  );
}

export default Header;
