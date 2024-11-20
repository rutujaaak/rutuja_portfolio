import React from "react";
import 'C:/Users/Rutuja Kale/rutuja/src/components/solo.css';
import image2 from 'C:/Users/Rutuja Kale/rutuja/src/asset/kk.jpg';
// Corrected relative path

const Project = () => {
    return (
        <main>
            <section className="firstSection">
                <div className="right">
                    <img src={image2} alt="Portrait" /> {/* Added alt attribute for accessibility */}
                </div>
            </section>
           
            <div className="lef">
                <label htmlFor="myfile">Click here to watch some of my work </label>

                <div>
                    <a 
                        href="https://github.com/rutujaaak" 
                        className="button glow-button" 
                        target="_blank" 
                        rel="noopener noreferrer" // Added for security when using target="_blank"
                    >
                        click here
                    </a>
                </div>
            </div>
            
            <div className="leff">
                <label htmlFor="myfile">Visit my LinkedIn Page </label>
                <a 
                        href="https://www.linkedin.com/in/rutuja-kale-24b93a230" // Updated URL with full link
                        className="button glow-button" 
                        target="_blank" 
                        rel="noopener noreferrer" // Added for security when using target="_blank"
                    >
                        click here
                    </a>
            </div>
        </main>
    );
};

export default Project;
