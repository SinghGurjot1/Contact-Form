import React, { useState } from 'react';
import './App.css'; // Import the CSS file

function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to a server)
    console.log('Form submitted:', { firstName, lastName, email, phone, message });
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group-row">
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <div className="form-group checkbox">
          <input
            type="checkbox"
            id="agreeToTerms"
            checked={isAgreed}
            onChange={() => setIsAgreed(!isAgreed)}
            required
            className="form-check-input"
          />
          <label htmlFor="agreeToTerms">I have read and agree to the Privacy Policy and Terms and Conditions</label>
        </div>
        <div className="additional-text">
          <p>By submitting the contact form and signing up for texts, you consent to receive text messages from Ender-ID at the number provided.
          Consent is not a condition of purchase. Message frequency varies. Message and data rates my apply. You can unsubscribe
          at any time by replying STOP. Text HELP to ger help. Carriers are not liable for delayed or undelivered messages. </p>
        </div>
        <button type="submit" disabled={!isAgreed} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
