import React from "react";
import "./ImageGallery.css"
const images = [
  "assets/pexels-anurag-upadhyay-168783412-10984858.jpg",
  "assets/pexels-photopro-28886277.jpg",
  "assets/pexels-susmoy-dhaka-tv-922924886-23953117.jpg",
  "assets/pexels-anurag-upadhyay-168783412-10984858.jpg",
];
function ImageGallery() {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img
            src={image}
            alt={`Gallery item ${index + 1}`}
            className="gallery-img"
          />
        </div>
      ))}
    </div>
  );
}
export default ImageGallery;
