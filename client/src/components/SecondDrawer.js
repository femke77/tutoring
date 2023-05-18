import React, { useState } from "react";
import { Box } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import SecondDrawerButton from "./SecondDrawerButton";
import { BrowserRouter as _, Routes, Route } from "react-router-dom";

export default function SecondDrawer(props) {
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

        
        </Box>
      </Collapse>

        <SecondDrawerButton handleDrawer={handleDrawer} open={open} color="white"></SecondDrawerButton>
  
    </div>
  );
}


