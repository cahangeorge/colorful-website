import React from 'react';
import './projects.scss';

import image1 from '../../image1.png';
import image2 from '../../image2.png';

export default function Projects() {
    return (
        <div className='projects my-5' id='projects'>
            <div class="project-1">
                <div class="box-img shadow-lg rounded p-4 my-5 col-12 col-sm-11 col-md-8 col-lg-5 col-xl-5" data-aos="flip-down">
                    <img class="img-fluid" src={image1} alt="" />
                </div>
                <div class="box-p shadow-lg rounded p-4 my-5 col-12 col-sm-11 col-md-8 col-lg-5 col-xl-5" data-aos="flip-up">
                    <p class="fs-4 font-monospace text-center">We create your website to run on multiple devices using the latest technologies available.</p>
                    <div class="icons">
                        <i class="fab fa-html5 display-3 m-2"></i>
                        <i class="fab fa-css3-alt display-3 m-2"></i>
                        <i class="fab fa-js-square display-3 m-2"></i>
                        <i class="fab fa-bootstrap display-3 m-2"></i>
                    </div>
                </div>
            </div>

                <div class="project-2">
                <div class="box-img shadow-lg rounded p-4 my-5 col-12 col-sm-11 col-md-8 col-lg-5 col-xl-5" data-aos="flip-down">
                    <img class="img-fluid" src={image2} alt="" />
                </div>
                <div class="box-p shadow-lg rounded p-4 my-5 col-12 col-sm-11 col-md-8 col-lg-5 col-xl-5" data-aos="flip-up">
                    <p class="fs-4 font-monospace text-center">Our priority is to fulfill any wish!</p>
                    <div class="icons">
                        <i class="fab fa-react display-3 m-2"></i>
                        <i class="fab fa-sass display-3 m-2"></i>
                        <i class="fab fa-npm display-3 m-2"></i>
                        <i class="fab fa-node display-3 m-2"></i>
                    </div>
                </div>
                </div>

                <div class="project-2-pc">
                <div class="box-p shadow-lg rounded p-4 my-5 col-12 col-sm-11 col-md-8 col-lg-5 col-xl-5" data-aos="flip-up">
                    <p class="fs-4 font-monospace">Our priority is to fulfill any wish!</p>
                    <div class="icons">
                    <i class="fab fa-react display-3 m-2"></i>
                    <i class="fab fa-sass display-3 m-2"></i>
                    <i class="fab fa-npm display-3 m-2"></i>
                    <i class="fab fa-node display-3 m-2"></i>
                    </div>
                </div>
                <div class="box-img shadow-lg rounded p-4 my-5 col-12 col-sm-11 col-md-5 col-lg-5 col-xl-5" data-aos="flip-down">
                    <img class="img-fluid" src={image2} alt="" />
                </div>
            </div>
        </div>
    )
}
