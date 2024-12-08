import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/contactPage.css';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formError, setFormError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setFormError('All fields are required.');
      return;
    }

    emailjs
      .send(
        'service_fuuiyf3', // Replace with your EmailJS Service ID
        'template_jjx9d4f', // Replace with your EmailJS Template ID
        { name, email, message }, // Data passed to the template
        'hPbfWN0W8YDDuGx8Y' // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setFormError(null);
          setSuccessMessage('Thank you! Your message has been sent.');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('Failed to send email:', error);
          setFormError('Failed to send your message. Please try again later.');
        }
      );
  };

  return (
    <div className="contact-page">
      <div className="contact-content">
        <div className="contact-info">
          <h1>Contact Me</h1>
          <p>Feel free to reach out using the form below. I’d love to hear from you!</p>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          {formError && <p className="form-error">{formError}</p>}
          {successMessage && <p className="form-success">{successMessage}</p>}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message"
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;