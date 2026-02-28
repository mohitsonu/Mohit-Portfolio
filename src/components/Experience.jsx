import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import './Experience.css';

const experiences = [
    {
        role: "Associate",
        company: "Wipro",
        location: "Hyderabad, India",
        date: "April 2024 - December 2024",
        description: [
            "Collaborated with cross-functional stakeholders to understand project requirements and deliver data solutions aligned with client standards.",
            "Ensured 95%+ accuracy in large-scale geospatial data projects, improving end-user navigation and customer experience.",
            "Investigated and resolved data discrepancies while adhering to strict quality benchmarks and SLAs."
        ]
    },
    {
        role: "Software Developer",
        company: "LiWiR e-Security Pvt Ltd",
        location: "Hyderabad, India",
        date: "April 2023 - April 2024",
        description: [
            "Worked on security-focused software solutions, gaining strong understanding of product architecture and enterprise customer needs.",
            "Collaborated with R&D teams to build and explain encryption and authentication solutions for business use cases.",
            "Contributed to reusable internal tools, improving usability and adoption across teams."
        ]
    },
    {
        role: "Chess Tournament Organiser",
        company: "Srikakulam District Chess Association",
        location: "Srikakulam, India",
        date: "Previous",
        description: [
            "Organised district and state-level chess tournaments with 100+ participants per event.",
            "Improved operational efficiency by 35% through optimised scheduling, coordination, and logistics management."
        ]
    },
    {
        role: "Professional Chess Coach & Tutor",
        company: "District Chess Academy",
        location: "Srikakulam, India",
        date: "Previous",
        description: [
            "Coached 40+ students, resulting in 10+ district and state-level medals.",
            "Strengthened analytical thinking, strategic planning, and decision-making skills through structured training programs."
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <h2 className="section-title">Experience</h2>
            <div className="timeline-container">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="timeline-item"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                        <div className="timeline-dot">
                            <Briefcase size={20} />
                        </div>
                        <div className="timeline-content glass">
                            <div className="timeline-header">
                                <h3>{exp.role}</h3>
                                <span className="company">{exp.company}</span>
                            </div>
                            <div className="timeline-meta">
                                <span className="date"><Calendar size={14} /> {exp.date}</span>
                                <span className="location">{exp.location}</span>
                            </div>
                            <ul className="timeline-desc">
                                {exp.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
