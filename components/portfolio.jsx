import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';
import projectImage from '../assets/portfolio.jpg'; // Replace with the actual path to your image
const Portfolio = () => {
    return (
        <>
            <h2 className='port'>Portfolio</h2>
            <div className="portfolio" id='portfolio'>
                <div className="image-container">
                    <img src={projectImage} alt="Project" />
                </div>
                <div className="projects-container">
                    <a href='http://countrie-api.netlify.app' target="_blank" rel="noopener noreferrer">
                        <div className="project">
                            <h3>Rest Countries API Project</h3>
                            <p>Created an API project which fetches the information from REST API and showcases the information of each country in a card. You can go to a particular country's page and see all their details. Includes some filter and search methods.</p>
                        </div>
                    </a>
                    <a href='https://creatorrama.github.io/quiz-app/' target="_blank" rel="noopener noreferrer">
                        <div className="project">
                            <h3>Quiz App</h3>
                            <p>Created a Quiz App which takes quiz and displays results. Also included some more features.</p>
                        </div>
                    </a>
                    <a href='https://creatorrama.github.io/Portfolio-Website/' target="_blank" rel="noopener noreferrer">
                        <div className="project">
                            <h3>Resume Website</h3>
                            <p>Created a resume website which showcases education and skills.</p>
                        </div>
                    </a>
                    <a href='https://creatorrama.github.io/sp-clone/' target="_blank" rel="noopener noreferrer">
                        <div className="project">
                            <h3>Spotify Clone</h3>
                            <p>Created a Spotify Clone with  HTML and CSS and Javascript with all the functionalities of a music player.Great  learnings from this Project.</p>
                        </div>
                    </a>
                </div>
            </div>
                <div className="social-links" id='sl'>
                    <a href="https://linkedin.com/in/aman-pandey-237728259" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/CreatorRama" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://x.com/AmanPandey_1Ram" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                    <a href="mailto:ap410485@gmail.com" target="_blank" rel="noopener noreferrer">
                        <FaEnvelope />
                    </a>
                   <div className="link-para">
                   <p>Created By Aman Pandey</p>
                   </div>
                </div>
        </>
    );
};

export default Portfolio;
