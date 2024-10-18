import React from "react";
import "./Card.css"
function Card({ image, description, title }) {
  return (
    <>
      <div className="card">
        <img src={image} alt={title} className="card-image" />
        <div className="card-container">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
        </div>
      </div>
    </>
  );
}
export default Card;