import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

export default function ContactForm() {
  // State variables and initial values
  const [inputName, setInputName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // name of value of input trigger
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // setting state for name, email, message
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "inputName") {
      setInputName(inputValue);
    } else if (inputType === "message") {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid.");
      return;
    }
    if (!inputName) {
      setErrorMessage("Name is required.");
      return;
    }
    if (!message) {
      setErrorMessage("A message is required.");
      return;
    }

    setInputName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <form className="form">
        <input
          value={inputName}
          name="inputName"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Your message here"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
