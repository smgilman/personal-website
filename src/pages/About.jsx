import React from 'react';
import '../styles/About.css'

function About() {
    return (
        <div class="timeline">
            <div class="timeline-item">
                <h3>Undergraduate Teaching Assistant - North Carolina State University</h3>
                <p>August 2022 - Present</p>
                <p>
                    Supervise and monitor over 200 students in CSC 116 - Introduction to Computing: Java, and over 300 students in 
                    CSC 216/217 - Software Development Fundamentals. Communicate effectively with students, faculty, and 
                    administration regarding student progress and issues. Conduct weekly office hours to assist students in their 
                    studies. Support students in their development of critical thinking and problem solving skills. Grade 
                    assignments fairly by using rubrics provided by professors and faculty. Conduct weekly lab sessions where up 
                    to 30 students would be under the guidance of myself and one other TA.
                </p>
            </div>
            <div class="timeline-item">
                <h3>Undergraduate Research Assistant - North Carolina State University</h3>
                <p>January 2024 - June 2024</p>
                <p>
                    Utilized Dragonfly ORS software to identify defects in a titanium cylinder. Images were taken throughout the
                    additive manufacturing process, which were then imported as .tiff files and used for processing. Monitored the
                    condition of 3D printers in the production stage to detect defects and diagnose the root cause.
                </p>
            </div>
        </div>
    );
}

export default About;
