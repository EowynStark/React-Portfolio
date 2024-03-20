import React from 'react';

function Portfolio() {
    const projects = [
        {
            name: 'Work Day Schedule App',
            description: 'This application is designed to allow a user to add any events to any block of time in a given day.',
            link: 'https://eowynstark.github.io/Work-Day-Scheduler/',
            repo: 'https://github.com/EowynStark/Work-Day-Scheduler' 
        },
        {
            name: 'Note Taker App',
            description: 'This application is designed to help a user take notes and keep track of them as they are written.',
            link: 'https://calm-spire-67925-ce7b0d46bdc0.herokuapp.com/',
            repo: 'https://github.com/EowynStark/Note-Taker'
        },
        {
            name: 'Employee Tracker App',
            description: 'This application is designed to help a user who owns a business keep track of their employees in a dynamic way. (Backend Development only)',
            link: 'https://app.screencastify.com/v3/watch/dKFeWYgznS7GBTtrvOrw', // add link to deployed project
            repo: 'https://github.com/EowynStark/Employee-Tracker' // add link to GitHub repo
        },
    ];
    return (
        <div className='p-3 mb-2 bg-warning text-dark'>
            <h2>Professional Portfolio</h2>
            <div className='p-3 mb-2 bg-warning text-dark'>
                {projects.map((project, index) => (
                    <div className='p-3 mb-2 bg-warning text-dark card' style={{weight:'30rem'}} key={index}>
                        <h3>{project.name}</h3>
                        {/* <img src={project.image} className="card-img-top" alt={project.name} /> */}
                        <p>{project.description}</p>
                        <a href={project.link} target= '_blank' rel='noopener noreferrer'>Link to finished project</a>
                        <a href={project.repo} target='_blank' rel='noopener noreferrer'>Link to GitHub repository</a>
                    </div>
                ))}
            </div>
            </div>
    );
}

export default Portfolio;