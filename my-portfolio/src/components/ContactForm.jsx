import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedMessages = JSON.parse(localStorage.getItem("messages")) || [];

    savedMessages.push(formData);

    localStorage.setItem("messages", JSON.stringify(savedMessages));

    setShowSuccessModal(true);

    setTimeout(() => {
      setShowSuccessModal(false);
    }, 3000);

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="success-modal">
          <div className="success-modal-content">
            <h3>Message Sent Successfully!</h3>
            <p>Thank you for reaching out!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
