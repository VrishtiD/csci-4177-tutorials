import React, { useState } from 'react';
import './styles.css';
import SuccessMessage from './SuccessMessage';

function App() {
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [submitted, setSubmitted] = useState(false);
const [valid, setValid] = useState(false);
  function handleInputChange(event) {
    event.preventDefault();
    let name = event.target.name;
    let value = event.target.value;
    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    } else if (name === "email") {
      setEmail(value);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    if (firstName && lastName && email) {
      setValid(true);
    }
  }

  return (
    <div className="form-container">
      <h1 className='heading'>Registration Form</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? (
          <SuccessMessage firstName={firstName} lastName={lastName} />
        ) : (
          <>
            <input
              className="form-field"
              type="text"
              placeholder="First Name"
              name="firstName"
              value={firstName}
              onChange={handleInputChange}
            />
            {submitted && !firstName && (
              <span id="first-name-error">Please enter first name</span>
            )}
            <input
              className="form-field"
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={lastName}
              onChange={handleInputChange}
            />
            {submitted && !lastName && (
              <span id="last-name-error">Please enter last name</span>
            )}
            <input
              className="form-field"
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
            {submitted && !email && (
              <span id="email-error">Please enter email address</span>
            )}
            <button className="form-field" type="submit">
              Register
            </button>
          </>
        )}
      </form>
    </div>
  );
}

export default App;
