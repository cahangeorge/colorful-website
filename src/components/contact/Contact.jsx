import React from 'react';
import './contact.scss';

export default function Contact() {
    return (
        <div className='section-help' id='contact'>
            <h2 class="display-4 text-center font-monospace my-5" id="contact" data-aos="fade-down">Contact</h2>
            <p class="text-center font-monospace fs-4 mb-5 col-9 col-sm-8 col-md-8 col-lg-7 col-xl-6" data-aos="fade-down">If your business or you need a website, just contact me through the following form and you will receive a reply as soon as possible.</p>

            <form action="mailto:cahangeorge@gmail.com" method="post" enctype="text/plain">
                <input type="text" name="username" placeholder="Name" class="m-3 p-2 rounded col-8 col-sm-6 col-md-5 col-xl-4" data-aos="zoom-in" />
                <input type="email" name="useremail" placeholder="Email" class="m-3 p-2 rounded col-8 col-sm-6 col-md-5 col-xl-4" data-aos="zoom-in" />
                <textarea name="usermessage" rows="10" placeholder="Message" class="m-3 p-2 rounded col-8 col-sm-6 col-md-5 col-xl-4" data-aos="zoom-out" />
                <input type="submit" value="Submit" class="sending m-3 p-2 rounded col-4 col-sm-2 col-md-2 col-xl-1" data-aos="zoom-out" />
            </form>
        </div>
    )
}
