import React, { useState } from 'react';
import 'C:/Users/Rutuja Kale/rutuja/src/components/code.css'; // Import the CSS file for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required.";
    if (!formData.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid.";
    }
    if (!formData.message) errors.message = "Message is required.";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Prepare form data for Web3Forms API
      const formDataToSubmit = new FormData();
      Object.keys(formData).forEach((key) => formDataToSubmit.append(key, formData[key]));
      formDataToSubmit.append("access_key", "1ad061a0-acc1-45bf-9a61-39c07ff3beb6");

      const jsonData = JSON.stringify(Object.fromEntries(formDataToSubmit));
      
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: jsonData,
        });
        
        const result = await res.json();
        
        if (result.success) {
          console.log("Form submitted successfully:", result);
          setIsSubmitted(true);
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
          });
          setFormErrors({});
        }
      } catch (error) {
        console.error("Form submission error:", error);
      }
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name..."
          value={formData.name}
          onChange={handleChange}
          required
        />
        {formErrors.name && <span className="error">{formErrors.name}</span>}

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email..."
          value={formData.email}
          onChange={handleChange}
          required
        />
        {formErrors.email && <span className="error">{formErrors.email}</span>}

        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Your phone number..."
          value={formData.phone}
          onChange={handleChange}
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Write your message..."
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        {formErrors.message && <span className="error">{formErrors.message}</span>}

        <button type="submit" className="submit-button">Submit</button>
      </form>
      {isSubmitted && <p className="success-message">Your message has been sent successfully!</p>}
    </div>
  );
};

export default Contact;