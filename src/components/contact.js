import React from "react";

const ContactForm = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Me</h2>
        <p>
          Feel free to contact me for collaborations,<br/>freelancing opportunities, <br/>or anything else you'd like to discuss.<br/>My socials are below.
        </p>
      </div>
      <form
        action="https://formspree.io/f/xbjvdopq" // Replace with your Formspree form ID
        method="POST"
        className="contact-form"
      >
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
