import {Component} from 'react';
import { init } from 'ityped';
import Particles from 'react-tsparticles';
import './intro.scss';

export default class Intro extends Component {
    componentDidMount() {
        const myElement = document.querySelector('#myElement');
        init(myElement, {
            showCursor: false,
            strings: ['Welcome to BIOLOS-CODE!', "Let's show you a few things!"],
            backDelay: 1500,
            backSpeed: 60
        })
    }

    render() {
        return (
            <div className='intro position-relative' id='intro' data-aos='zoom-in'>
                <h1 id="myElement" className="rounded position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center text-center shadow-lg m-0 mx-auto p-3 col-12 col-sm-10 col-md-9 col-lg-8 col-xl-7"></h1>
                <Particles
                            id="tsparticles"
                            options={{
                                background: {
                                    color: {
                                    value: "#fff",
                                    },
                                },
                            fpsLimit: 60,
                            interactivity: {
                                detectsOn: "canvas",
                                events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                                },
                                modes: {
                                bubble: {
                                    distance: 400,
                                    duration: 2,
                                    opacity: 1,
                                    size: 40,
                                },
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                                },
                            },
                            particles: {
                                color: {
                                value: "#FC9305",
                                },
                                links: {
                                color: "#FC9305",
                                distance: 150,
                                enable: true,
                                opacity: 1,
                                width: 0.5,
                                },
                                collisions: {
                                enable: true,
                                },
                                move: {
                                direction: "none",
                                enable: true,
                                outMode: "bounce",
                                random: false,
                                speed: 4,
                                straight: false,
                                },
                                number: {
                                density: {
                                    enable: true,
                                    value_area: 800,
                                },
                                value: 25,
                                },
                                opacity: {
                                value: 1,
                                },
                                shape: {
                                type: "circle",
                                },
                                size: {
                                random: true,
                                value: 5,
                                },
                            },
                            detectRetina: true,
                            }}
                        />
            </div>
        )
    }
}
