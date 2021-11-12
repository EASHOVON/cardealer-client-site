import React from 'react';

const Banner = () =>
{
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://www.infiniti.ca/content/dam/Infiniti/Canada/home-page/next-gen/INF_HP_Q60_Desktop_1500x555.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h2>Q60</h2>
                        <h5>Raise your pulse. The INFINITI Q60 coupe lets you take flight.
                            Starting at $50,995</h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://www.infiniti.ca/content/dam/Infiniti/Canada/home-page/next-gen/INF_HP_Q50_Desktop_1500x555.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h2>Q50</h2>
                        <h5>Enjoy luxury and performance, artfully balanced. Discover the Q50 sedan.
                            Starting at $44,295
                        </h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://www.infiniti.ca/content/dam/Infiniti/Canada/home-page/next-gen/INF_HP_QX55_Desktop_1500x555.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h2>QX55</h2>
                        <h5>Meet the all-new QX55, a return to the crossover coupe segment we pioneered.
                            Starting at $54,995</h5>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Banner;