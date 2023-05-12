import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

export default function SecondDrawer() {
  const [open, setOpen] = useState(true);

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className="d-flex">
      {open && (
        <Box
          sx={{
            background: "black",
            color: "white",
            width: "548px",
            height: "100vh",
            p: 3,
          }}
        >
          <div className="mt-5">Seccond drawer here, line me up with nav! </div>
        </Box>
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
