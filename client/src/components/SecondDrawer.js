import React, { useState } from "react";
import { Box } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import SecondDrawerButton from "./SecondDrawerButton";

// Template only - refactor with pages cuz too much code repeating
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
            color: "white",
            width: props.width,
            height: "100%",
            minHeight: "100vh",
            p: 3,
          }}
        >
          <Componenent />
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
