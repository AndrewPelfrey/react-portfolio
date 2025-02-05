import React from "react";
import ContactForm from "../components/ContactForm";

import "./Contact.css"

function Contact() {
    return (
        <section className="contact-container">
            <h2>Get in Touch</h2>
            <p>Have a question or want to work together? Feel free to reach out</p>
            <ContactForm />
        </section>
    );
}

export default Contact;