import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";

import TestimonialsItem from "./TestimonialsItem";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <motion.section
      id="testimonials"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h2 className="text-center text-color-blue">Testimonials</h2>
            <h5 className="text-center mb-2 fw-light">PEOPLE LOVE US</h5>
          </div>
          <div className="col-md-2"></div>
        </div>
        <div className="row">
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
                items: 2,
                partialVisibilityGutter: 30,
              },
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 3,
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
            <TestimonialsItem
              stars={1}
              name="AAAAAA"
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur officia blanditiis dolorem deserunt eum placeat doloribus vero, quibusdam ex repellat vel, iure, dolore animi libero velit incidunt asperiores suscipit et?"
            />
            <TestimonialsItem
              stars={2}
              name="BBBBBB"
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur officia blanditiis dolorem deserunt eum placeat doloribus vero, quibusdam ex repellat vel, iure, dolore animi libero velit incidunt asperiores suscipit et?"
            />
            <TestimonialsItem
              stars={3}
              name="CCCCCCCC"
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur officia blanditiis dolorem deserunt eum placeat doloribus vero, quibusdam ex repellat vel, iure, dolore animi libero velit incidunt asperiores suscipit et?"
            />
            <TestimonialsItem
              stars={4.5}
              name="DDDDDD"
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur officia blanditiis dolorem deserunt eum placeat doloribus vero, quibusdam ex repellat vel, iure, dolore animi libero velit incidunt asperiores suscipit et?"
            />
          </Carousel>
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
