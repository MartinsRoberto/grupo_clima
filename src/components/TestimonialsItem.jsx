import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const TestimonialsItem = ({ name, text, stars }) => {
  const renderStars = (stars) => {
    const fullStars = Math.floor(stars);
    const halfStar = stars % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={`full-${index}`} color="gold" />
        ))}
        {halfStar && <FaStarHalfAlt color="gold" />}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={`empty-${index}`} color="gold" />
        ))}
      </>
    );
  };

  return (
    <div className="my-5 me-3">
      <div className="py-4 px-4 rounded shadow-sm bg-light">
        <h3 className="text-center">{name}</h3>
        <div className="text-center mb-3">{renderStars(stars)}</div>
        <p className="text-center">{text}</p>
      </div>
    </div>
  );
};

export default TestimonialsItem;
