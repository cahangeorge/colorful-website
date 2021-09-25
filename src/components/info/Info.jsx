import React from 'react';
import './info.scss';

export default function Info() {
    return (
        <div className='wave-section' id='about'>
            <div class="wave-icons-1 my-3" data-aos="fade-down">
                <i class="fas fa-file-code display-3"></i>
                <i class="fas fa-laptop display-3"></i>
            </div>

            <h1 class="display-4 font-monospace text-center my-5 col-10 col-sm-9 col-md-8 col-lg-7 col-xl-6" data-aos="fade-down">A trusted software development company!!!</h1>

            <p class="text-center font-monospace fs-4 mb-5 mt-3 col-10 col-sm-9 col-md-8 col-lg-7 col-xl-6" data-aos="fade-up">Our goals are to make your website as simple, efficient and secure as possible. </p>

            <div class="wave-icons-2 my-3" data-aos="fade-up">
                <i class="fas fa-shield-alt display-3"></i>
                <i class="fas fa-mobile-alt display-3"></i>
            </div>
        </div>
    )
}
