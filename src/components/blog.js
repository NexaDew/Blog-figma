import React from "react";
import './blog.css';
import blogblog from "../Assets/blogblog.png";
import blogblog1 from "../Assets/blogblog1.png";
import blogblog2 from "../Assets/blogblog2.png";
import blogblog3 from "../Assets/blogblog3.png";
import blogblog4 from "../Assets/blogblog4.png";
import blogblog5 from "../Assets/blogblog5.png";
import blogblog6 from "../Assets/blogblog6.png";




const blogDataa = [
  {
    image: blogblog1,
    title: 'Lörem ipsum patt kar i renyst',
    description: 'Lörem ipsum patt kar i renyst robotfälla. Tregyktig sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen',
  },
  {
    image: blogblog2,
    title: 'Lörem ipsum patt kar i renyst',
    description: 'Lörem ipsum patt kar i renyst robotfälla. Tregyktig sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen',
  },
  {
    image: blogblog3,
    title: 'Lörem ipsum patt kar i renyst',
    description: 'Lörem ipsum patt kar i renyst robotfälla. Tregyktig sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen',
  },
  {
    image: blogblog4,
    title: 'Lörem ipsum patt kar i renyst',
    description: 'Lörem ipsum patt kar i renyst robotfälla. Tregyktig sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen',
  },
  {
    image: blogblog5,
    title: 'Lörem ipsum patt kar i renyst',
    description: 'Lörem ipsum patt kar i renyst robotfälla. Tregyktig sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen',
  },
  {
    image: blogblog6,
    title: 'Lörem ipsum patt kar i renyst',
    description: 'Lörem ipsum patt kar i renyst robotfälla. Tregyktig sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen',
  },
  
];


function Blog() {
  return (
    <div className="blog-container">
      {/* Navigation */}
      <nav className="header-nav">
        <a href="Blog">Blog</a>
        <a href="About">About</a>
        <a href="Contact">Contact</a>
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
          <img
            src={blogblog}
            alt="City"
            className="blog-image"
          />
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

      
      <div className="article-section">
  <h2 className="article-title">Recent Posts</h2>
  <div className="article-grid">
    {blogDataa.map((blog, index) => (
      <div className="article-card" key={index}>
        <img src={blog.image} alt="Blog" className="article-image" />
        <div className="article-content">
          <h3 className="article-heading">{blog.title}</h3>
          <p className="article-text">{blog.description}</p>
          <button className="article-button">Read More</button>
        </div>
      </div>
    ))}
  </div>
</div>

<div className="last-con">
    <h3 className="hei">daily blog</h3>
    <p className="last">Lörem ipsum patt kar i renyst robotfälla. Tregyktig  sana, nuktigt i mandatpingis tes.<br></br>Analigt anede. Arat lagen.Lörem ipsum patt kar i renyst robotfälla. Tregyktig  sana,<br></br> nuktigt i mandatpingis tes. Analigt anede. </p>

</div>


    </div>
  );
}

export default Blog;
