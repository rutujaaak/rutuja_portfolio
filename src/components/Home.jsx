import React, { useEffect, useState } from 'react';
import kImage from 'C:/Users/Rutuja Kale/rutuja/src/asset/k.jpg'; // Corrected image path
import 'C:/Users/Rutuja Kale/rutuja/src/components/home.css'; // Corrected CSS file path

const Main = () => {
  const [typedText, setTypedText] = useState('');
  const text = "Welcome to my portfolio";
  let index = 0;

  useEffect(() => {
    const typingEffect = () => {
      if (index < text.length) {
        setTypedText(prevText => prevText + text.charAt(index));
        index++;
        setTimeout(typingEffect, 100); // Recursively call typingEffect to add each character
      }
    };

    typingEffect(); // Start the typing effect when the component mounts
  }, []);

  return (
    <div>
      <main>
        <section className="firstSection">
          <div className="leftSection">
            I'm <span className="purple">Rutuja</span>,
            <div>Web Developer, SQL</div>
            <span id="element">Welcome to my portfolio</span>
          </div>
          <div className="rightSection">
            <img src={kImage} alt="Portrait" className="profile-image"/>
          </div>
        </section>

        <hr className="customHr" />

        <section className="secondSection">
          <h1>Work Experience</h1>
          <div className="box">
            <div className="vertical">
              <div className="vertical-title">Amazon Web Services</div>
              <div className="vertical-desc">
                I have hands-on experience with AWS services like EC2, S3, Lambda, and RDS, focusing on cloud infrastructure and automation.
              </div>
            </div>
            <div className="vertical">
              <div className="vertical-title">Web Development Internship</div>
              <div className="vertical-desc">
                Interned at Code Clause, crafting an online video platform, stopwatch, and to-do list using HTML, CSS, and JavaScript.
              </div>
            </div>
            <div className="vertical">
              <div className="vertical-title">SQL Developer</div>
              <div className="vertical-desc">
                Built a database-driven Employee Management System with features to update, view, and delete employee records.
              </div>
            </div>
            <div className="vertical">
              <div className="vertical-title">Power BI</div>
              <div className="vertical-desc">
                Developed a Power BI dashboard for real-time sales insights for a computer hardware business.
              </div>
            </div>
            <div className="vertical">
              <div className="vertical-title">Android Studio</div>
              <div className="vertical-desc">
                Developed a healthcare application with features like user login, lab test ordering, and appointment booking.
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer">
          
        </div>
        <div className="text-center">
          copyright&#169; www.rutujaportfolio.com | All rights reserved
        </div>
      </footer>
    </div>
  );
};

export default Main;
