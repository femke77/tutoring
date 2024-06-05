import React, { useState } from "react";
import { Box } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import SecondDrawerButton from "./SecondDrawerButton";

export default function SecondDrawer(props) {
  const { Componenent } = props;
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
            opacity: props.opacity,
            color: "#CCCCCC",
            maxWidth: props.width,
            width: { md: window.innerWidth, lg: props.width },
            height: "100%",
            minHeight: "100vh",
            maxHeight: "100vh",
            p: 3,
            overflowY: "scroll",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none", // Hide the scrollbar for WebKit browsers (Chrome, Safari, Edge, etc.)
            },
            '&-ms-overflow-style:': {
              display: 'none', // Hide the scrollbar for IE
          },
          }}
        >
          <Componenent />
        </Box>
      </Collapse>

      <SecondDrawerButton
        handleDrawer={handleDrawer}
        open={open}
        color="#999999"
      ></SecondDrawerButton>
    </div>
  );
}
