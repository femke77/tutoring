import React, { useState } from "react";
import { Box } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import Calendly from "./Calendly";
import About from "./About";
import ContactBS from "./Contact";
import Terms from "./Terms";
import NoMatch from "./NoMatch";
import Blog from "./Blog";
import Privacy from "./PrivacyPolicy";
import SecondDrawerButton from "./SecondDrawerButton";
import { BrowserRouter as _, Routes, Route } from "react-router-dom";

export default function SecondDrawer() {
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
            opacity: "0.95",
            color: "white",
            width: "650px",
            height: "100%",
            minHeight: "100vh",
            p: 3,
          }}
        >
          <div className="content">
            <Routes>
              <Route path="/" element={<Calendly />} />
              <Route path="/contact" element={<ContactBS />} />
              <Route path="/about" element={<About />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </div>
        </Box>
      </Collapse>
{/* 
      <Box
        sx={{
          background: "#2C2729",
          color: "white",
          width: "30px",
          height: "20px",
          ml: "0px",
          p: 3,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      > */}
        <SecondDrawerButton handleDrawer={handleDrawer} open={open} color="white"></SecondDrawerButton>
      {/* </Box> */}
    </div>
  );
}


