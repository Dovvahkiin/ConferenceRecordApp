import React from "react";
import Navbar from "./Navbar";
import "../../styles/general.css";
import image from "/images/banner.jpg";

const headerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  position: "relative",
  margin: "0% 0% 5% 0%",
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
  height: "250px",
};

function Header() {
  return (
    <header style={headerStyle}>
      <div className="navBarWrap">
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
