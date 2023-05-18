import React, { useState } from "react";
import { Box } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import SecondDrawerButton from "./SecondDrawerButton";

function About() {
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
            width: "600px",
            height: "100%",
            minHeight: "100vh",
            p: 3,
          }}
        >
          <div className="about">
            <h2>Welcome!</h2>
            <p className="mt-4">
              I've been coding in various languages and paradigms for a little
              over 10 years. My BS degree is in Computer Science, and I
              currently work for edX as a tutor, a TA, and a occasional
              substitute instructor for the Full Stack program. I am certified
              in MERN stack and Java/Spring/React by UCLA and SMU respectively.
              I studied relational databases (SQL Server) at the graduate level,
              along with data science and machine learning. My team won 2nd
              place in the 2018 AI Jam which sprung us into the world of
              creating our own startup! I am the winner of the 2022 Instructor
              Excellence award for the tutor with the most students and best
              metrics.
            </p>
            <p>
              I have a strong passion for coding. You can say it verges on an
              obsession at times. Every bug is a puzzle that I just can't wait
              to squash!
            </p>
            <p>
              Helping students learn to code is something I find not only fun
              but rewarding. I am excited to help you learn and grow your MERN
              stack skills.
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

export default About;
