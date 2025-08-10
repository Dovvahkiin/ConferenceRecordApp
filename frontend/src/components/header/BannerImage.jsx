import React from "react";
const styles = {
  margin: "0",
  padding: "0",
  border: "1px solid rgba(255, 255, 255, 1)",
};

function BannerImage(props) {
  return (
    <div>
      <a href={props.bannerLink}>
        <img style={styles} src={props.imageLink} alt="bannerIsMissing" />
      </a>
    </div>
  );
}

export default BannerImage;
