import React from 'react'
import './Promotion.css'

const Promotion = () => {
    return (
        <section id='promotion'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-12 col-sm-12 text-left ">
                        <h2 className='mb-5 text-color-green'>24/7 SERVICES</h2>
                        <h5 className='mb-5 text-white'>Air conditioning services encompass a wide range of activities related to the installation, maintenance, repair, and replacement of ACs.</h5>
                    </div>
                    <div className="col-lg-5 col-md-12 col-sm-12  text-white">
                        <div className="p-4 rounded promo">
                            <h2>Best Offer!</h2>
                            <h3>Sunday Deal 50% Off<span>UPTO</span></h3>
                            <p>*installation, maintenance, repair, and replacement of ACs.</p>
                            <a href="#contact" className="btn btn-secondary">Book Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Promotion