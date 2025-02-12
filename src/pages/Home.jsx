import React from "react";
import About from './About';
import Projects from './Projects'

function Home() {
    return (
        <div>
            <section id="about" className="about-section">
                <div className="about-content">
                    <img
                        src="/me.png"
                        alt="Me! (Sharon Gilman)"
                        className="about-image"
                    />
                    <div className="about-text">
                        <p>
                            Hello! My name is Sharon Gilman. I am a recent Industrial and Systems Engineering graduate from 
                            North Carolina State University with a passion for building scalable programs. I have experience 
                            in Java, Javascript, Python, and React.
                        </p>
                        <p>
                            When I’m not coding, I enjoy hiking, reading, and playing video games. My goal is to continually 
                            grow as a developer and make meaningful contributions to the projects I work on.
                        </p>
                    </div>
                </div>
            </section>

            <section id="projects">
                <Projects />
            </section>
            
        </div>
    );
}

export default Home;