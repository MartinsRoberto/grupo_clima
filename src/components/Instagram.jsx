import React from "react";
import "./Team.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Instagram.css";

const Instagram = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="team" className="bg-light">
            <div className="">
                <div className="row bg-white rounded shadow pt-4 pt-sm-5">
                    <motion.h2
                        ref={ref}
                        initial={{ opacity: 0, y: 100 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="text-color-blue text-center mb-4 mb-sm-5 "
                    >
                        Como fazemos a limpeza no seu Ar-Condicionado!
                    </motion.h2>
                    <div className="row justify-content-center ms-1 ms-sm-0">
                        <div className="col-12 col-md-10 col-lg-8">
                            <div className="video-container">
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe
                                        className="embed-responsive-item"
                                        src="https://www.youtube.com/embed/3WiVtp2AM6g"
                                        allowFullScreen
                                        title="Video sobre limpeza de ar-condicionado"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default Instagram;
