import React from "react";
import "./Team.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Instagram.css"

const Instagram = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="team" className="bg-light">
            <div className="">

                <div className="row bg-white rounded shadow py-5 ">
                    <motion.h2
                        ref={ref}
                        initial={{ opacity: 0, y: 100 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="text-color-blue text-center mb-5 px-5"
                    >
                        Como fazemos a limpeza no seu Ar-Condicionado!
                    </motion.h2>
                    <div className="row">
                        <div className="col-md-3"></div>

                        <div className="col-md-6">
                            <div class="video embed-responsive embed-responsive-16by9 text-center w-100 ">
                                <iframe class="embed-responsive-item w-100" src="https://www.youtube.com/embed/3WiVtp2AM6g" allowfullscreen></iframe>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Instagram;
