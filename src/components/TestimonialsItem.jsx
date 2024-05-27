import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const TestimonialsItem = ({ name, text, stars }) => {
    const renderStars = (stars) => {
        const fullStars = Math.floor(stars);
        const halfStar = stars % 1 !== 0;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        return (
            <>
                {[...Array(fullStars)].map((_, index) => <FaStar key={`full-${index}`} color="gold" />)}
                {halfStar && <FaStarHalfAlt color="gold" />}
                {[...Array(emptyStars)].map((_, index) => <FaRegStar key={`empty-${index}`} color="gold" />)}
            </>
        );
    };

    return (
        <div className='my-5 mx-2'>
            <div className="py-4 px-4 rounded shadow-sm">
                <p className='text-center'>{text}</p>
                <h3 className='text-center'>{name}</h3>
                <div className='text-center'>
                    {renderStars(stars)}
                </div>
            </div>
        </div>
    );
};

export default TestimonialsItem;
