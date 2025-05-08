import React, { useState } from "react";
import "./blog.css";
import blogblog from "../Assets/blogblog.png";
import BlogCard from "../components/BlogCard";
import blogData from "../components/blogData";
import CategoryTabs from "./CatagoryTabs";
import Header from "../components/Header";
import Footer from "./Footer";

const footerContent = {
  title: "daily blog",
  description: `Lörem ipsum patt kar i renyst robotfälla. Tregyktig sana, nuktigt i mandatpingis tes.
Analigt anede. Arat lagen. Lörem ipsum patt kar i renyst robotfälla. Tregyktig sana,
nuktigt i mandatpingis tes. Analigt anede.`
};

const navLinks = [
  { name: "Blog", path: "/blog" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/Contact" },
  
];
function Blog() {
  const [activeTab, setActiveTab] = useState("Latest Blog");

  return (
    <div className="blog-container">
      <Header links={navLinks} />

      {/* Category Tabs */}
      <CategoryTabs activeTab={activeTab} onTabChange={setActiveTab} />

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

      {/* Recent Blog Cards */}
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
      
      <Footer title={footerContent.title} description={footerContent.description} />
      
    </div>
  );
}

export default Blog;
