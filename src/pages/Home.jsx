import React from "react";
import About from './About';
import Projects from './Projects'

function Home() {
    return (
        <div>
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