import React from "react";
import BannerImage from "./BannerImage";
import Navbar from "./Navbar";
import imageForBanner from "../../assets/images/bannerImageFile.png";

function Header() {
  return (
    <div>
      <BannerImage imageLink={imageForBanner} />
      <Navbar />
    </div>
  );
}

export default Header;
