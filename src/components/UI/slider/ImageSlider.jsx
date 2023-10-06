import React, { useState } from "react";

const ImageSlider = ({ slides }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const nextSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      <img
        src={slides[currentSlideIndex].image}
        alt={slides[currentSlideIndex].description}
        className="w-full h-auto rounded"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center bg-opacity-75 bg-gray-800 gap-3">
        <button
          onClick={prevSlide}
          className="p-2 bg-white text-gray-800 rounded-full"
        >
          &lt;
        </button>
        <div className="text-white">
          <h3 className="text-xl font-bold">
            {slides[currentSlideIndex].name}
          </h3>
          <p>{slides[currentSlideIndex].description}</p>
        </div>

        <button
          onClick={nextSlide}
          className="p-2 bg-white text-gray-800 rounded-full"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
