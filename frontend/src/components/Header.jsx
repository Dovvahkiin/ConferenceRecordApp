import React from "react";
import BannerImage from "./header/BannerImage";
import Navbar from "./header/Navbar";
import imageBanner from "../assets/images/bannerImageFile.png";

function Header() {
  return (
    <div>
      <BannerImage bannerLink="/" imageLink={imageBanner} />
      <Navbar />
    </div>
  );
}

export default Header;
