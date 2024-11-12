import React from "react";
import About from './About';
import Projects from './Projects'

function Home() {
    return (
        <div>
            <section id="me" className="me-section">
                <div className="me-content">
                    <img
                        src="/me.png"
                        alt="Me! (Sharon Gilman)"
                        className="me-image"
                    />
                    <div className="me-text">
                        <p>
                            Hello! My name is Sharon Gilman. I am a recent Industrial and Systems Engineering graduate from 
                            North Carolina State University with a passion for building scalable programs. I have experience 
                            in Java, Javascript, Python, and React. I love creating engaging, user-friendly web experiences.
                        </p>
                        <p>
                            When I’m not coding, I enjoy hiking, reading, and playing video games. My goal is to continually 
                            grow as a developer and make meaningful contributions to the projects I work on.
                        </p>
                    </div>
                </div>
            </section>

            <section id="about">
                <About />
            </section>

            <section id="projects">
                <Projects />
            </section>
            
        </div>
    );
}

export default Home;