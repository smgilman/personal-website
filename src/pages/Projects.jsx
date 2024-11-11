import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Projects.css'; // Assuming you have a CSS file for Projects

function Projects() {
    const projects = [
        {
            title: "How To Upload Grades",
            description: "A comprehensive guide for generating and uploading student feedback files and grades for CSC 216/217.",
            link: "/how-to-upload-grades",
            technologies: ["Excel", "Java", "Markdown"]
        },
        // Add your other projects here
    ];

    return (
        <div className="projects-container">
            <h1>Projects</h1>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <Link to={project.link} key={index} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="technologies">
                            {project.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Projects;