// src/components/Footer.js
import React from "react";
import "./blog.css";

function Footer({ title, description }) {
  return (
    <div className="last-con">
      <h3 className="hei">{title}</h3>
      <p className="last">
        {description.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    </div>
  );
}

export default Footer;
