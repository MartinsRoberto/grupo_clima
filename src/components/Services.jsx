import React from 'react'

const Services = () => {
    return (
        <section id='services'>
            <div className="container">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <h2 className='text-center text-color-blue'>Serviços disponíveis</h2>
                        <h5 className='text-center mb-5 fw-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur officia blanditiis dolorem deserunt eum placeat doloribus vero, quibusdam ex repellat vel, iure, dolore animi libero velit incidunt asperiores suscipit et?</h5>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className='shadow p-4 rounded d-flex justify-content-center align-items-center flex-column mb-5'>
                            <img src="https://zrtechsolutions.com/demo/html/airconditioning/assets/images/icons/s1.svg" alt="" className='mb-3 img-fluid' width="50" />
                            <h5 className='mb-3 text-color-blue'>Instalação</h5>
                            <p className='text-center text-secondary'>New AC construction or replacement, ensuring proper techniques and building code compliance.</p>
                            <button className='btn btn-primary'>Veja mais</button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='shadow p-4 rounded d-flex justify-content-center align-items-center flex-column mb-5'>
                            <img src="https://zrtechsolutions.com/demo/html/airconditioning/assets/images/icons/s1.svg" alt="" className='mb-3 img-fluid' width="50" />
                            <h5 className='mb-3 text-color-blue'>Manutenção</h5>
                            <p className='text-center text-secondary'>New AC construction or replacement, ensuring proper techniques and building code compliance.</p>
                            <button className='btn btn-primary'>Veja mais</button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='shadow p-4 rounded d-flex justify-content-center align-items-center flex-column mb-5'>
                            <img src="https://zrtechsolutions.com/demo/html/airconditioning/assets/images/icons/s1.svg" alt="" className='mb-3 img-fluid' width="50" />
                            <h5 className='mb-3 text-color-blue'>Reparo</h5>
                            <p className='text-center text-secondary'>New AC construction or replacement, ensuring proper techniques and building code compliance.</p>
                            <button className='btn btn-primary'>Veja mais</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services