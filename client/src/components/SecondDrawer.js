import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Collapse from "@mui/material/Collapse";

export default function SecondDrawer() {
  const [open, setOpen] = useState(true);

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className="d-flex">
      {/* don't use conditional rendering, use the Collapse transition */}
      {open && (
        <Collapse in={open}>
          <Box
            sx={{
              background: "black",
              color: "white",
              width: "548px",
              height: "100vh",
              p: 3,
            }}
          >
            <div className="mt-5">
              Second drawer here, line me up with nav!{" "}
            </div>
          </Box>
        </Collapse>
      )}

      <Box
        sx={{
          background: "black",
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
          <ChevronLeftIcon
            sx={{
              color: "white",
            }}
          />
        </Button>
      </Box>
    </div>
  );
}
