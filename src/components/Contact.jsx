// Contact.jsx
import React from 'react';
import ContactForm from './Contactform';

const Contact = () => {
  return (
    <div>
      <h2 className="text-white text-2xl text-center mb-3">Get In Touch</h2>
      <ContactForm /> {/* Render the ContactForm component */}
    </div>
  );
};

export default Contact;