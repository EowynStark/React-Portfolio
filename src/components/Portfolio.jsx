import React from 'react';

function Portfolio() {
    const projects = [
        {
            name: 'Project 1',
            description: 'This is a description of project 1',
            link: '', // add link to deployed project
            repo: '' // add link to GitHub repo
        },
        {
            name: 'Project 2',
            description: 'This is a description of project 2',
            link: '', // add link to deployed project
            repo: '' // add link to GitHub repo
        },
        {
            name: 'Project 3',
            description: 'This is a description of project 3',
            link: '', // add link to deployed project
            repo: '' // add link to GitHub repo
        },
    ];
    return (
        <section id='portfolio'>
            <h2>Professional Portfolio</h2>
            <div className='projects'>
                {projects.map((project, index) => (
                    <div className='project' key={index}>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target= '_blank' rel='noopener noreferrer'>Link to deployed project</a>
                        <a href={project.repo} target='_blank' rel='noopener noreferrer'>Link to GitHub repository</a>
                    </div>
                ))}
            </div>
            </section>
    );
}

export default Portfolio;