import React, { useState } from 'react';
import './home.css';


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Här skulle du normalt skicka datan till en server eller mailtjänst
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
      <h2>Kontakta mig</h2>
      
      <div className="contact-info">
        <p><strong>Email:</strong> g.rashiti@hotmail.com</p>
        <p><strong>Telefon:</strong> 070-934 97 52</p>
        <p><strong>Plats:</strong> Katrineholm, Sverige</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Ditt namn"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Din e-post"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Ditt meddelande"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Skicka</button>
      </form>

      {submitted && <p className="confirmation">Tack för ditt meddelande! Jag hör av mig snart 😊</p>}
    </div>
  );
}

export default Contact
