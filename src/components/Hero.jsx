import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import TestimonialsItem from './TestimonialsItem';


const Hero = () => {

    return (
        <div id='hero'>
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
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    },
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 1,
                        partialVisibilityGutter: 40
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
                <div className='w-100 bg-danger d-flex flex-column align-items-start justify-content-center' style={{ height: "80vh" }}>
                    <h1 className='text-white px-2 px-md-4 px-lg-5'>Air Conditioning Installation</h1>
                    <p className='text-white px-2 px-md-4 px-lg-5'>Air conditioning services encompass a wide range of activities related to the installation, maintenance, repair, and replacement of ACs.</p>
                </div>
                <div className='w-100 bg-danger d-flex flex-column align-items-start justify-content-center' style={{ height: "80vh" }}>
                    <h1 className='text-white px-2 px-md-4 px-lg-5'>Air Conditioning Installation</h1>
                    <p className='text-white px-2 px-md-4 px-lg-5'>Air conditioning services encompass a wide range of activities related to the installation, maintenance, repair, and replacement of ACs.</p>
                </div>
                <div className='w-100 bg-danger d-flex flex-column align-items-start justify-content-center' style={{ height: "80vh" }}>
                    <h1 className='text-white px-2 px-md-4 px-lg-5'>Air Conditioning Installation</h1>
                    <p className='text-white px-2 px-md-4 px-lg-5'>Air conditioning services encompass a wide range of activities related to the installation, maintenance, repair, and replacement of ACs.</p>
                </div>
            </Carousel>
        </div>
    );
}

export default Hero;
