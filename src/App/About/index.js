import React from 'react';
import './about.css'
import Navbar from '../2- common/navbar'
export default function AboutMe(props) {
    return (
        <React.Fragment>
         <div id='about'>
    
         </div>
       
            <section id='aboutme' className='outline-section about-section'>
                <section className='outer-rectangle'>
                    <h3>About</h3>
                    <section className='inner-rectangle'>

                        <section id='aboutMe'>

                            <p className='description'>I’m a web developer and I like to build things on the internet.
                    I’m passionate about all things web and digital creativity.</p>
                        </section>
                    </section>
                </section>
            </section>
        </React.Fragment>


    );
};