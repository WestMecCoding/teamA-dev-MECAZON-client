import styles from "../styles/Product.css";
// export default function ProductImages() {

// }

// test

import React, { useState } from "react";

const ProductImages = () => {
  const [hoveredImage, setHoveredImage] = useState(""); // State for hovered image

  // List of image URLs (or you could import these from an array)
  const images = [
    "/images/product1.jpg",
    "/images/product2.jpg",
    "/images/product3.jpg",
    "/images/product4.jpg",
  ];

  // Default image for larger screen when no thumbnail is hovered
  const defaultImage = "/images/product1.jpg";

  return (
    <div className="product-images">
      <div className="large-image">
        <img
          src={hoveredImage || defaultImage} // Use hovered image or default
          alt="Large Product"
        />
      </div>

      <div className="thumbnail-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className="thumbnail"
            onMouseEnter={() => setHoveredImage(image)} // Update state on hover
            onMouseLeave={() => setHoveredImage("")} // Clear hover state when not hovering
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImages;

// end test