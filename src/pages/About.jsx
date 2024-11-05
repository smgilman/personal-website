import React from 'react';

function About() {
    return (
        <section id="about" className="about-section">
      <div className="about-content">
        <img
          src="../images/me.png"
          alt="Me! (Sharon Gilman)"
          className="about-image"
        />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hello! My name is Sharon Gilman, a recent Industrial and Systems Engineering graduate from North Carolina State University 
            with a passion for building scalable programs. With experience in Java, Javascript, Python, and React, I love creating 
            engaging, user-friendly web experiences.
          </p>
          <p>
            When I’m not coding, I enjoy hiking, reading, and playing video games. My goal is to continually grow as a developer and 
            make meaningful contributions to the projects I work on.
          </p>
        </div>
      </div>
    </section>
    );
}

export default About;