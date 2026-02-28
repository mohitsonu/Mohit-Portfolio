import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-container single-column">
                <motion.div
                    className="contact-info glass"
                    style={{ margin: "0 auto", textAlign: "center", maxWidth: "600px" }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p className="contact-description" style={{ marginBottom: "30px" }}>
                        Feel free to reach out directly for collaborations, opportunities, or just to say hi!
                    </p>

                    <div className="info-item" style={{ justifyContent: "center" }}>
                        <Mail className="info-icon" />
                        <a href="mailto:mohitsonu33@gmail.com">mohitsonu33@gmail.com</a>
                    </div>

                    <div className="info-item" style={{ justifyContent: "center" }}>
                        <Phone className="info-icon" />
                        <a href="tel:9490196775">9490196775</a>
                    </div>

                    <div className="info-item" style={{ justifyContent: "center" }}>
                        <MapPin className="info-icon" />
                        <span>Hyderabad, India</span>
                    </div>
                </motion.div>
            </div>

            <footer className="footer glass">
                <p>&copy; {new Date().getFullYear()} Palla Mohit Yadav. All rights reserved.</p>
            </footer>
        </section>
    );
};

export default Contact;
