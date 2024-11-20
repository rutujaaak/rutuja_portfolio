import React from "react";
import KpImage from 'C:/Users/Rutuja Kale/rutuja/src/asset/12.jpg';  // Corrected relative path
import 'C:/Users/Rutuja Kale/rutuja/src/components/about.css'; // Import the updated CSS file for About page

const About = () => {
    return (
        <div className="container">
            <h1>About Me</h1>
            <section className="content">
                <div className="left">
                    <img src={KpImage} alt="Portrait" />
                </div>
                <div className="right">
                    <p>
                        I am Final Year CSE Engineering Student pursuing my btech in Computer Science and Engineering.
                        A passionate learner with eager of learning.
                    </p>
                    <p>
                        I come from a family that values both entrepreneurship and education; my father is a businessman, and my mother is a teacher.
                        Growing up in this environment, I have developed a strong work ethic, a commitment to learning, and a collaborative approach.
                        Alongside my two siblings, I’ve learned the importance of responsibility and teamwork, which I apply to my career endeavors.
                    </p>
                    <p>
                        In my free time, I enjoy expressing my creativity through painting and sketching, and expanding my perspective through reading.
                        These interests keep me balanced and inspired, helping me bring fresh ideas and focus to my work.
                    </p>
                    
                    <h2>Achievements</h2>
                    <div className="achievements-box">
                        <ul>
                            <li>Represented Maharashtra in the National CBSE Science Competition, where I designed and built an innovative solar-powered cycle operating on battery technology. This project earned a patent, showcasing my commitment to sustainable solutions and technical ingenuity.</li>
                            <li>Awarded Runner-Up in the Inter-College Badminton Competition as part of a group event, demonstrating teamwork and competitive spirit.</li>
                            <li>Active participation in Smart India Hackathon where we developed a prototype of an oil separator from water.</li>
                            <li>Competed in the Vaarroc International Competition, an event that allowed me to challenge myself alongside talented individuals from various backgrounds.</li>
                            <li>Achieved Power BI, Data Analyst Certifications from Coursera.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
