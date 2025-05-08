
import React from "react";
import "./home.css"

const HomeSection = ({ blogData }) => {
  return (
    <div className="blog-section">
      <h2 className="section-title">Latest Blog</h2>
      <div className="card-container">
        {blogData.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.image} alt="Blog" className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{blog.title}</h3>
              <p className="card-description">{blog.description}</p>
              <button className="read-more">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSection;
