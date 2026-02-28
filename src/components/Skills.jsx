import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Layout, Server, Settings, Terminal, Briefcase, Users, LineChart, MessageSquare } from 'lucide-react';
import './Skills.css';

const skillCategories = [
    {
        title: "Programming",
        icon: <Code size={24} />,
        skills: ["Python", "Java"]
    },
    {
        title: "Frontend & UI",
        icon: <Layout size={24} />,
        skills: ["HTML5", "CSS3", "JavaScript", "React", "Angular", "Bootstrap"]
    },
    {
        title: "Backend & APIs",
        icon: <Server size={24} />,
        skills: ["REST APIs", "JWT", "Flask", "Node.js"]
    },
    {
        title: "Databases",
        icon: <Database size={24} />,
        skills: ["MySQL", "PostgreSQL", "MongoDB"]
    },
    {
        title: "Data Science",
        icon: <Terminal size={24} />,
        skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn"]
    },
    {
        title: "Tools & Platforms",
        icon: <Settings size={24} />,
        skills: ["Git", "GitHub", "Postman", "VS Code", "CRM Tools", "MS Excel", "Google Workspace", "Trello", "Figma", "PowerPoint"]
    },
    {
        title: "Client Engagement",
        icon: <MessageSquare size={24} />,
        skills: ["Stakeholder Communication", "Consultative Problem Solving", "Relationship Building", "Client Support"]
    },
    {
        title: "Business Analytics",
        icon: <LineChart size={24} />,
        skills: ["Market Research", "Data Analysis", "Strategic Planning"]
    },
    {
        title: "Soft Skills",
        icon: <Users size={24} />,
        skills: ["Leadership", "Communication", "Collaboration", "Negotiation", "Mentorship"]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
};

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <h2 className="section-title">Core Skills</h2>
            <motion.div
                className="skills-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {skillCategories.map((category, index) => (
                    <motion.div key={index} className="skill-category glass" variants={itemVariants}>
                        <div className="category-header">
                            <div className="category-icon">{category.icon}</div>
                            <h3>{category.title}</h3>
                        </div>
                        <div className="skills-list">
                            {category.skills.map((skill, i) => (
                                <span key={i} className="skill-chip">{skill}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;
