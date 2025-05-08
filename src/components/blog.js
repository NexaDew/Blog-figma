import React from "react";
import "./blog.css";
import blogblog from "../Assets/blogblog.png";
import BlogCard from "../components/BlogCard"; 
import blogData from "../components/blogData";

function Blog() {
  return (
    <div className="blog-container">
      {/* Navigation */}
      <nav className="header-nav">
        <a href="/blog">Blog</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
      <div className="hiii"></div>

      {/* Category Tabs */}
      <div className="category-tabs">
        <span className="tab-active">Latest Blog</span>
        <span className="tab">Urban Planning</span>
        <span className="tab">Graphics Design</span>
        <span className="tab">Web Design</span>
        <span className="tab">UX/UI Design</span>
        <span className="tab">Technology</span>
      </div>

      {/* Main Blog Section */}
      <div className="blog-main">
        <div className="blog-image-wrapper">
          <img src={blogblog} alt="City" className="blog-image" />
          <div className="blog-overlay">
            <p className="overlay-category">Urban Planning</p>
            <h2 className="overlay-title">
              Lörem ipsum europlande krohiskap panstik, förväntis.
            </h2>
            <p className="overlay-desc">
              Lörem ipsum europlande krohiskap panstik, förväntis. Klicktivism plada.
              Ekrofilling hedår, medan al, monoktig härgjord. Supranylingar kask. Geologi byligt dikapobelt.
            </p>
            <button className="overlay-button">Read More</button>
          </div>
        </div>
      </div>

      {/* Show only the last 6 blogs */}
      <div className="article-section">
        <h2 className="article-title">Recent Posts</h2>
        <div className="article-grid">
          {blogData.slice(3).map((blog, index) => (
            <BlogCard
              key={index}
              image={blog.image}
              title={blog.title}
              description={blog.description}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="last-con">
        <h3 className="hei">daily blog</h3>
        <p className="last">
          Lörem ipsum patt kar i renyst robotfälla. Tregyktig sana, nuktigt i mandatpingis tes.
          <br />Analigt anede. Arat lagen. Lörem ipsum patt kar i renyst robotfälla. Tregyktig sana,
          <br />nuktigt i mandatpingis tes. Analigt anede.
        </p>
      </div>
    </div>
  );
}

export default Blog;
