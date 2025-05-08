// src/components/ImageSection.js
import React from 'react';
import './home.css';

const ImageSection = ({ imageUrl, text, textBottom = '20px' }) => {
  return (
    <div className="image-section-container">
      <div
        className="image-section-hero"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="image-section-text" style={{ bottom: textBottom }}>
          {text}
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
