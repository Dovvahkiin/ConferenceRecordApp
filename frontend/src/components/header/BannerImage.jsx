import React from "react";
const styles = {
  maxWidth: "100%",
  height: "auto",
};

function BannerImage(props) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img style={styles} src={props.imageLink} alt="bannerIsMissing" />
    </div>
  );
}

export default BannerImage;
