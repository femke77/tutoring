import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";
import Calendly from "./Calendly";
import About from "./About";
import ContactBS from "./Contact";
import Terms from "./Terms";
import NoMatch from "./NoMatch";
import Blog from "./Blog";
import Privacy from "./PrivacyPolicy";
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
      >
        <Button variant="text" onClick={handleDrawer}>
          {!open ? (
            <ChevronRightIcon
              sx={{
                color: "white",
              }}
            />
          ) : (
            <CloseIcon sx={{ color: "white" }} />
          )}
        </Button>
      </Box>
    </div>
  );
}

// each second drawer can be different how?? and the blog page can be like the book page? or
// something lke that.
// so each element will have it's own second drawer or no drawer
// so there will be no second drawer element, just a collapse and box on each element that need one,
// render via container then
