import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Slideshow images
const images = [
  'images/f.jpg',   // Add your image paths here
  'images/h.jpg',
  'images/l.jpg'
];

const CombinedHomePage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="bg-[#ffe5b4] mt-0">
      {/* Image Slideshow */}
      <div className="relative flex justify-center my-5">
        <div className="w-full max-w-7xl h-[500px] relative">
          <img
            src={images[currentImage]}
            alt="Mind Mender"
            className="w-full h-full object-cover"  // Image fills the container
          />
          {/* Overlay the questions in the center of the images */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-40">
            <div className="hero-text text-center">
              <div>
                <span className="mha-hero-underline text-4xl font-bold">Mental Health</span>
              </div> 
              {/* Update the Link routes */}
              <Link to="/blogs" aria-label="Link to the Blogs page" className="block mt-4 text-2xl">
                What is it?
              </Link>
              <Link to="/healthproblems" aria-label="Link to the Health Problems page" className="block mt-2 text-2xl">
                How can you help yourself?
              </Link>
              <Link to="/healthproblems" aria-label="Link to the Health Problems page" className="block mt-2 text-2xl">
                How can you help others?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CombinedHomePage;





