import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';
import './Projects.css';

const projects = [
    {
        title: "Customer Churn Analysis & Prediction",
        description: "Analyzed telecom customer data to identify churn drivers impacting customer retention and recurring revenue. Translated analytical findings into actionable insights to support retention-focused business decisions.",
        tech: ["Pandas", "Matplotlib", "Scikit-learn", "Data Analysis"],
        github: "https://github.com/mohitsonu/Customer-Churn-Analysis-Prediction",
        live: "#"
    },
    {
        title: "Financial News Automation Bot",
        description: "Built an automated system delivering real-time financial and market insights to support faster decision-making. Designed configurable topic-based alerts and stock watchlists aligned with user preferences and engagement.",
        tech: ["Python", "Automation", "CRM Thinking", "APIs"],
        github: "https://github.com/mohitsonu/Automated-Financial-News",
        live: "#"
    },
    {
        title: "Blog Platform (CMS-Based Web Application)",
        description: "Developed a user-focused content management platform with authentication and structured publishing workflows. Improved content management efficiency through organised data handling and streamlined user operations.",
        tech: ["Node.js", "Angular", "Full-Stack UI", "Firebase"],
        github: "https://github.com/mohitsonu/My-Blog",
        live: "#"
    },
    {
        title: "PartyNest Event Booking Platform",
        description: "Full-stack event booking with waitlist promotion, payment expiry, and email automation. Built around a marketplace model pivot capturing host and attendee requirements.",
        tech: ["React", "Custom Backend", "Cron Jobs", "Payments"],
        github: "https://github.com/mohitsonu",
        live: "https://www.partynest.fun/"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="project-card glass"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="project-header">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <Folder size={40} className="folder-icon" />
                                {project.live !== '#' && (
                                    <div className="live-badge">
                                        <span className="live-dot"></span> Live
                                    </div>
                                )}
                            </div>
                            <div className="project-links">
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    <Github size={20} />
                                </a>
                                {project.live !== '#' && (
                                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink size={20} />
                                    </a>
                                )}
                            </div>
                        </div>
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-desc">{project.description}</p>
                        <div className="project-tech">
                            {project.tech.map((tech, i) => (
                                <span key={i} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
