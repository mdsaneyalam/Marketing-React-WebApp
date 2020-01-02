import React from 'react';

const intro = () => {
    return(
        <section id="intro">
            <div className="intro-container">
                <div id="introCarousel" className="carousel  slide carousel-fade" data-ride="carousel">

                    <ol className="carousel-indicators"></ol>

                    <div className="carousel-inner" role="listbox">
                        

                        


                    <div className="carousel-item">
                        <div className="carousel-background"><img src="./intro-carousel/4.jpg" alt="Inage"/></div>
                            <div className="carousel-container">
                                <div className="carousel-content">
                                    <h2>JavaScript SDET Masters classNameroom Course</h2>
                                    <p>120+ Hours of classNameroom learning with expert mentors</p>
                                    <a href="#featured-services" className="btn-get-started scrollto">Get Started</a>
                                </div>
                            </div>
                        </div>

                    </div>



                    <a className="carousel-control-prev" href="#introCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon ion-chevron-left" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>

                    <a className="carousel-control-next" href="#introCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon ion-chevron-right" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>

                </div>
            </div>    
        </section>
        
    );
}

export default intro;