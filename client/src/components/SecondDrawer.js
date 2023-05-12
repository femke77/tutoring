import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";

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
              background: "black",
              color: "white",
            //   width is perfect for 768, adjust for smaller
              width: "548px",  
              height: "100vh",
              p: 3,
            }}
          >
            <div className="content">
              Content rendered through this drawer. Screenshots of projects in
              the background. On smaller screens this will be the full page view.
    
            </div>
          </Box>
        </Collapse>
  
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
