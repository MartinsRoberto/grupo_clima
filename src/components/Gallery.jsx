import React, { useEffect, useRef, useState } from 'react';
import Isotope from 'isotope-layout';
import './Gallery.css'

const IsotopeGrid = () => {
    const gridRef = useRef(null);
    const iso = useRef(null);
    const [filterKey, setFilterKey] = useState('*');

    useEffect(() => {
        iso.current = new Isotope(gridRef.current, {
            itemSelector: '.grid-item',
            layoutMode: 'fitRows',
        });

        return () => {
            iso.current.destroy();
        };
    }, []);

    useEffect(() => {
        if (iso.current) {
            iso.current.arrange({ filter: filterKey });
        }
    }, [filterKey]);

    const handleFilterKeyChange = (key) => () => {
        setFilterKey(key);
    };

    return (
        <section id='gallery'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2 className='text-color-blue'>Our Gallery</h2>
                        <h5 className='mb-5 fw-light'>Our gallery Our gallery Our gallery Our gallery</h5>
                    </div>
                </div>
                <div className="d-flex justify-content-center flex-wrap gap-3 mb-5">
                    <span className='shadow-sm rounded-pill px-3 py-2 btn-gallery' onClick={handleFilterKeyChange('*')}>Show All</span>
                    <span className='shadow-sm rounded-pill px-3 py-2 btn-gallery' onClick={handleFilterKeyChange('.category-a')}>Category A</span>
                    <span className='shadow-sm rounded-pill px-3 py-2 btn-gallery' onClick={handleFilterKeyChange('.category-b')}>Category B</span>
                </div>
                <div className="row" ref={gridRef}>
                    <div className="col-sm-6 col-md-4 grid-item category-a">
                        <div className='rounded overflow-hidden'>
                            <img className='img-thumbnail' src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Schwarzes_Nashorn-01.jpg" alt="Rhinoceros" />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 grid-item category-b">
                        <div className='rounded overflow-hidden'>
                            <img className='img-thumbnail' src="https://t2.ea.ltmcdn.com/pt/posts/3/9/2/caracteristicas_dos_elefantes_23293_0_600.jpg" alt="Elephant" />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 grid-item category-a">
                        <div className='rounded overflow-hidden'>
                            <img className='img-thumbnail' src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Schwarzes_Nashorn-01.jpg" alt="Rhinoceros" />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 grid-item category-b">
                        <div className='rounded overflow-hidden'>
                            <img className='img-thumbnail' src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Schwarzes_Nashorn-01.jpg" alt="Rhinoceros" />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 grid-item category-a">
                        <div className='rounded overflow-hidden'>
                            <img className='img-thumbnail' src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Schwarzes_Nashorn-01.jpg" alt="Rhinoceros" />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 grid-item category-b">
                        <div className='rounded overflow-hidden'>
                            <img className='img-thumbnail' src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Schwarzes_Nashorn-01.jpg" alt="Rhinoceros" />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 grid-item category-a">
                        <div className='rounded overflow-hidden'>
                            <img className='img-thumbnail' src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Schwarzes_Nashorn-01.jpg" alt="Rhinoceros" />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 grid-item category-b">
                        <div className='rounded overflow-hidden'>
                            <img className='img-thumbnail' src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Schwarzes_Nashorn-01.jpg" alt="Rhinoceros" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IsotopeGrid;
