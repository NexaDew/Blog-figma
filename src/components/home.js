import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import image1 from "../Assets/image1.png";
import image2 from "../Assets/image2.png";
import image3 from "../Assets/image3.png";
import image4 from "../Assets/image4.png";
import image5 from "../Assets/image5.png";
import image6 from "../Assets/image6.png";
import bloghome1 from "../Assets/bloghome1.png";
import bloghome2 from "../Assets/bloghome2.png";
import bloghome3 from "../Assets/bloghome3.png";


const blogData = [
  {
    image: bloghome1,
    title: 'Lörem ipsum patt kar i renyst',
    description: 'Lörem ipsum patt kar i renyst robotfälla. Tregyktig sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen',
  },
  {
    image: bloghome2,
    title: 'Lörem ipsum patt kar i renyst',
    description: 'Lörem ipsum patt kar i renyst robotfälla. Tregyktig sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen',
  },
  {
    image: bloghome3,
    title: 'Lörem ipsum patt kar i renyst',
    description: 'Lörem ipsum patt kar i renyst robotfälla. Tregyktig sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen',
  },
  
];



function Home() {
  return (
    <div className="home-container">
      

      <section className="hero">
      <header className="navbar">
        
        <nav>
          <Link to="/work">Work</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
        </nav>
      </header>
        <div className="text-content">
          <p className="name">Linus Kigai</p>
          <h1>Bringing<br />Concept to Life</h1>
          <p className="description">
            Lörem ipsum ditijybel beras fassade.<br></br> Prel munira. Transperson bere
            då <br></br>heterovalens. Kiling intraktig. Plasm äng refunde krøbäling.
          </p>
        </div>
      </section>
      <div className="iconspics">
        <img src={image1} alt="iconss" className="icons"/>
        <img src={image2} alt="iconss" className="icons"/>
        <img src={image3} alt="iconss" className="icons"/>
        <img src={image4} alt="iconss" className="icons"/>
        <img src={image5} alt="iconss" className="icons"/>
        <img src={image6} alt="iconss" className="icons"/>


        </div>
      <div className="urban-container">
      <div className="urban-hero">
        <div className="urban-text">URBAN PLANNING</div>
      </div>

  
      </div>
      <div className="graphics-container">
      <div className="graphics-hero">
        <div className="graphics-text">GRAPHICS DESIGN</div>
      </div>
      </div>

      <div className="arts-container">
      <div className="arts-hero">
        <div className="arts-text">Arts</div>
      </div>
      </div>


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
    

      </div>

           


      
    
  );
}

export default Home;