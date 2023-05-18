import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import emailjs from "@emailjs/browser";
import { Box } from "@mui/material";
import Collapse from "@mui/material/Collapse";


import SecondDrawerButton from "./SecondDrawerButton";
import { validateEmail } from "../utils/helpers";

export default function ContactBS() {

  const [open, setOpen] = useState(true);

  const handleDrawer = () => {
    setOpen(!open);
  };
  const [formState, setFormState] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const [valid, setValid] = useState(false);
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
    if (e.target.name === "user_email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
        setValid(false);
      } else {
        setErrorMessage("");
        setValid(true);
      }
    } else if (e.target.name === "user_name") {
      if (!e.target.value.length) {
        setErrorMessage("Please provide your name.");
      }
    } else if (e.target.name === "message") {
      if (!e.target.value.length) {
        setErrorMessage("Don't forget your message!");
      }
    }
  };

  return (

    <div className="d-flex">
    <Collapse in={open} orientation="horizontal" timeout={500}>
      <Box
        sx={{
          background: "#2C2729",
          width: "650px",
          height: "100%",
          minHeight: "100vh",
          p: 3,
        }}
      >

<Form className="contact" ref={form} onSubmit={sendEmail}>
      <p>For urgent matters please put "urgent" in the subject.</p>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={user_name}
          name="user_name"
          onChange={handleChange}
          onBlur={handleValidation}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={user_email}
          name="user_email"
          onChange={handleChange}
          onBlur={handleValidation}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Subject</Form.Label>
        <Form.Control
          name="subject"
          value={subject}
          onChange={handleChange}
          onBlur={handleValidation}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="message"
          value={message}
          onChange={handleChange}
          onBlur={handleValidation}
        />
      </Form.Group>

      <Button
      className="mb-3"
        disabled={!(message && user_email && user_name && valid)}
        type="submit"
        value="Send Message"
        id="send-email"
      >
        Send Message
      </Button>

      <div className={hiddenState ? "hidden-toast" : ""}>Email Sent.</div>
      {errorMessage && <div>{errorMessage}</div>}
    </Form>
      </Box>
    </Collapse>

      <SecondDrawerButton handleDrawer={handleDrawer} open={open} color="white"></SecondDrawerButton>

  </div>


   
  );
}
