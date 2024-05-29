import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./Hero.css";

const Hero = () => {
  return (
    <div id="hero">
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
            partialVisibilityGutter: 40,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={true}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <div className="carousel-item w-100 bg-danger d-flex flex-column align-items-start justify-content-center">
          <div className="z-0 position-absolute overlay"></div>
          <div className="position-absolute z-3 w-100">
            <div className="container">
              <h1 className="text-white">Air Conditioning Installation</h1>
              <p className="text-white">
                Air conditioning services encompass a wide range of activities
                related to the installation, maintenance, repair, and
                replacement of ACs.
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item w-100 bg-danger d-flex flex-column align-items-start justify-content-center">
          <div className="z-0 position-absolute overlay"></div>
          <div className="position-absolute z-3 w-100">
            <div className="container">
              <h1 className="text-white">Air Conditioning Installation</h1>
              <p className="text-white">
                Air conditioning services encompass a wide range of activities
                related to the installation, maintenance, repair, and
                replacement of ACs.
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item w-100 bg-danger d-flex flex-column align-items-start justify-content-center">
          <div className="z-0 position-absolute overlay"></div>
          <div className="position-absolute z-3 w-100">
            <div className="container">
              <h1 className="text-white">Air Conditioning Installation</h1>
              <p className="text-white">
                Air conditioning services encompass a wide range of activities
                related to the installation, maintenance, repair, and
                replacement of ACs.
              </p>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
