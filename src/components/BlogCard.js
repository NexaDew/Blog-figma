import React from "react";
import "./blogCard.css"; 

const BlogCard = ({ image, title, description }) => {
  return (
    <div className="article-card">
      <img src={image} alt="Blog" className="article-image" />
      <div className="article-content">
        <h3 className="article-heading">{title}</h3>
        <p className="article-text">{description}</p>
        <button className="article-button">Read More</button>
      </div>
    </div>
  );
};

export default BlogCard;
