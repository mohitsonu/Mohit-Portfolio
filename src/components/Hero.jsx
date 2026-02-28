import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="about" className="hero-section">
            <div className="hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="greeting">Hello, I'm</span>
                    <h1 className="name">Palla Mohit Yadav</h1>
                    <h2 className="role gradient-text">Tech Sales & Software Eng</h2>

                    <p className="bio">
                        Entry-level B2B Tech Sales professional with a strong foundation in software engineering, data analysis, and automation.
                        Experienced in collaborating with cross-functional teams, translating technical concepts into business-aligned solutions, and driving customer engagement.
                    </p>

                    <div className="social-links">
                        <a href="https://github.com/mohitsonu" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <Github size={24} />
                        </a>
                        <a href="https://linkedin.com/in/pallamohityadav" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:mohitsonu33@gmail.com" className="social-icon">
                            <Mail size={24} />
                        </a>
                        <a href="tel:9490196775" className="social-icon">
                            <Phone size={24} />
                        </a>
                    </div>

                    <div className="cta-buttons">
                        <a href="#projects" className="btn btn-primary">View Projects</a>
                        <a href="#contact" className="btn btn-secondary">Contact Me</a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
