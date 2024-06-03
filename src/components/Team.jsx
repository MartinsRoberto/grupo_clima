import React from "react";
import "./Team.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Team = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="team">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 d-flex flex-column align-items-center align-items-lg-start justify-content-center">
            <motion.h2
              ref={ref}
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-color-blue"
            >
              Our team
            </motion.h2>
            <motion.h5
              ref={ref}
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-5 fw-light"
            >
              Our team Our team Our team
            </motion.h5>
            <motion.p
              ref={ref}
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center text-lg-start"
            >
              Our team is the heart of our company, a dedicated group of
              professionals who bring their expertise, passion, and commitment
              to every project. We are a diverse team of experienced Air
              conditioning specialists, each with a unique set of skills and a
              shared dedication to providing exceptional service.
            </motion.p>
          </div>
          <div className="col-lg-7">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
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
                <div className="carousel-item  rounded overflow-hidden a w-100 bg-danger d-flex flex-column align-items-start justify-content-center">
                  <div className="z-0 position-absolute overlay"></div>
                  <div className="position-absolute z-3 w-100">
                    <div className="container">
                      <h1 className="text-white">
                        Air Conditioning Installation
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="carousel-item  rounded overflow-hidden b w-100 bg-danger d-flex flex-column align-items-start justify-content-center">
                  <div className="z-0 position-absolute overlay"></div>
                  <div className="position-absolute z-3 w-100">
                    <div className="container">
                      <h1 className="text-white">
                        Air Conditioning Installation
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="carousel-item  rounded overflow-hidden c w-100 bg-danger d-flex flex-column align-items-start justify-content-center">
                  <div className="z-0 position-absolute overlay"></div>
                  <div className="position-absolute z-3 w-100">
                    <div className="container">
                      <h1 className="text-white">
                        Air Conditioning Installation
                      </h1>
                    </div>
                  </div>
                </div>
              </Carousel>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
