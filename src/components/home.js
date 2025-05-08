import React from "react";
import "./home.css";
import image1 from "../Assets/image1.png";
import image2 from "../Assets/image2.png";
import image3 from "../Assets/image3.png";
import image4 from "../Assets/image4.png";
import image5 from "../Assets/image5.png";
import image6 from "../Assets/image6.png";
import HomeSection from "../components/homeSection";
import blogData from "../components/blogData";
import Header from "./Header";
import ImageSection from "./ImageSection";
import third from "../Assets/third.png";
import rec4 from "../Assets/rec4.png";
import reg5 from "../Assets/reg5.png";
import IconImage from "./IconImage";

const navLinks = [
  { name: "Work", path: "/work" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" }
];
const iconImages = [image1, image2, image3, image4, image5, image6];

function Home() {
  return (
    <div className="home-container">
      <section className="hero">
      <Header links={navLinks} />
        <div className="text-content">
          <p className="name">Linus Kigai</p>
          <h1>Bringing<br />Concept to Life</h1>
          <p className="description">
            Lörem ipsum ditijybel beras fassade.<br />
            Prel munira. Transperson bere då <br />
            heterovalens. Kiling intraktig. Plasm äng refunde krøbäling.
          </p>
        </div>
      </section>
      
      <div className="iconspics">
        {iconImages.map((src, index) => (
          <IconImage key={index} src={src} alt={`icon-${index + 1}`} />
        ))}
      </div>

      
      <ImageSection imageUrl={third} text="URBAN PLANNING" />
      <ImageSection imageUrl={rec4} text="GRAPHICS DESIGN" />
      <ImageSection imageUrl={reg5} text="Arts" textBottom="40px" />

      {/* Show only first 3 blogs */}
      <HomeSection blogData={blogData.slice(0, 3)} />
    </div>
  );
}

export default Home;
