import React, { useState } from "react";
import { Box } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import SecondDrawerButton from "./SecondDrawerButton";
function Terms() {
  const [open, setOpen] = useState(true);

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className="d-flex">
      <Collapse in={open} orientation="horizontal" timeout={500}>
        <Box
          sx={{
            background: "#2C2729",
            opacity: "0.9",
            color: "white",
            width: "700px",
            height: "100%",
            minHeight: "100vh",
            p: 3,
          }}
        >
          <div className="terms">
          <h2>Welcome!</h2>
            <p className="mt-5">
              This is a tutoring service only for students who have graduated
              from an edX Full Stack Coding boot camp. By using this service you
              certify that you are done with the program and are no longer
              eligible for the free tutoring services through edX. I cannot
              provide extra tutoring for current students.
            </p>

            <p>
              Tutoring is $30/hr, non-refundable, but you will recieve full
              credit applied to your next session if you cancel or reschedule. I
              do not do in-person sessions. All sessions are via Zoom.
            </p>

            <p>
              I will never share any data about you that is collected during the
              course of our relationship.
            </p>
            <p>
              For any issues, questions or concerns email me at{" "}
              <a href="mailto:luckycatventuresllc@gmail.com">
                Lucky Cat Ventures LLC
              </a>{" "}
              or use my contact form. For urgent matters, please put "urgent" in
              the subject of the email.
            </p>
          </div>
        </Box>
      </Collapse>

      <SecondDrawerButton
        handleDrawer={handleDrawer}
        open={open}
        color="white"
      ></SecondDrawerButton>
    </div>
  );
}

export default Terms;
