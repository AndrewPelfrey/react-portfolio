import React, { useState } from "react";

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Message from: ${name}, ${email}, ${message}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <label>
                Email:
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <label>
                Message:
                <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} required />
            </label>
            <button type="submit">Send</button>
        </form>
    );
}

export default ContactForm;