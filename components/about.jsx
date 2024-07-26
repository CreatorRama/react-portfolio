import React from 'react';
import background from '../assets/background.jpg';
import downarrow from '../assets/down-arrow.png';
import crystals from '../assets/crystals.jpg';

const About = () => {
    const scrollToNextSection = () => {
        const nextSection = document.getElementById('nextSection');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className="about">
                <img src={background} alt="Background" className="background-image" />
                <div className="overlay">
                    <h1 className="title">AMAN PANDEY</h1>
                    <h2 className="title">FrontEnd Developer</h2>
                    <a href="#nextSection" className="scroll-button" onClick={scrollToNextSection}>
                        <img src={downarrow} alt="Scroll Down" height={89} />
                    </a>
                </div>
            </div>
            <div id="nextSection" className="about-myself">
                <img src={crystals} alt="Crystals Background" className="crystals-background" />
                <div className="content">
                    <h2>About Myself</h2>
                    <p>
                        I am a passionate software developer in training with a strong foundation in web development.
                        With proficiency in programming languages like C/C++, JavaScript, and expertise in HTML and CSS,
                        I have built several impressive projects showcasing my skills in frontend development.
                        My understanding of Object-Oriented Programming (OOPs) concepts and Data Structures & Algorithms (DSA)
                        enables me to design robust and efficient solutions. I am also proficient in using Git for version control,
                        ensuring collaborative development and project management.
                    </p>
                    <h3>Interests and Passions</h3>
                    <ul className="skills-list">
                        <li>Programming languages</li>
                        <hr />
                        <li>Data structures and algorithms</li>
                        <hr />
                        <li>Web Development</li>
                        <hr />
                        <li>AI & ML</li>
                        <hr />
                        <li>Creativity in Coding</li>
                        <hr />
                        <li>Collaboration and Teamwork</li>
                        <hr />
                        <li>Learning and Growth</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default About;
