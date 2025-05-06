import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import image1 from "../Assets/image1.png";
import image2 from "../Assets/image2.png";
import image3 from "../Assets/image3.png";
import image4 from "../Assets/image4.png";
import image5 from "../Assets/image5.png";
import image6 from "../Assets/image6.png";


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

           


      
    </div>
  );
}

export default Home;