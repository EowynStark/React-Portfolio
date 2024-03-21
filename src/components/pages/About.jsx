import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
    return (
        <div className='p-3 mb-2 bg-warning text-dark'>
            <h2>About Me</h2>
            <div className="about-content">
                <div className="about-text">
                    <div className='card' style={{width: '18rem' }}>
                    <img src='public\download20231004145455.png' className='bg-warning card-img-top' alt='Andria Jean' />
                    </div>
                    <div className='card bg-warning text-center text-dark' style={{width:'30rem'}}>
                    <p>Welcome to my portfolio! Explore my page to get to know me and what I can bring to the virtual table.</p>
                    <p>
                        I am an aspiring full stack web developer with a background in creative writing. I have a passion for problem solving, creative endeavors, and learning as much as I can. Being a dedicated learner, I am always looking for ways to improve my skills. I am a team player and am always willing to help others. I am excited to bring my unique background and skills to a new team. Let's brainstorm the next big thing together!
                    </p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default About;