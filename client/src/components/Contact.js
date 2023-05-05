import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { validateEmail } from "../utils/helpers";

export default function Contact() {
  
  const [formState, setFormState] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const [hiddenState, setHiddenState] = useState(true);

  const [errorMessage, setErrorMessage] = useState("");

  const { user_name, user_email, subject, message } = formState;

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l2gvv9r",
        "template_itb18q5",
        form.current,
        "U1BX8LG4qkcj2zcW3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setFormState({ user_name: "", user_email: "", subject: "", message: "" });
    setHiddenState(false);
  };

  const handleValidation = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`Your ${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div>
        <input
          type="text"
          value={user_name}
          name="name"
          placeholder="name"
          onChange={handleChange}
          onBlur={handleValidation}
        ></input>
      </div>
      <div>
        {" "}
        <input
          type="email"
          value={user_email}
          name="email"
          placeholder="email"
          onChange={handleChange}
          onBlur={handleValidation}
        ></input>
      </div>
      <div>
        <input
          name="subject"
          value={subject}
          placeholder="subject"
          onChange={handleChange}
          onBlur={handleValidation}
        ></input>
      </div>
      <div>
        <textarea
          name="message"
          value={message}
          placeholder="message"
          onChange={handleChange}
          onBlur={handleValidation}
        ></textarea>
      </div>

      <div className="send-button">
        <input type="submit" value="Send Message" id="send-email" />
      </div>
      <div className={hiddenState ? "hidden-toast" : ""}>Email Sent.</div>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
}
