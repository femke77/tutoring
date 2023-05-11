import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Home from "./Home";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
const drawerWidth = 220;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <div className="p-3">
        <h2>Meg Meyers</h2>
        <h3>Tutoring Services</h3>
      </div>
      <Divider />
      <div className="links">
        <hr />
        <Link to="/schedule">SCHEDULE</Link>
        <hr />
        <Link to="/terms ">TERMS OF SERVICE</Link>
        <hr />
        <Link to="/about">ABOUT ME</Link>
        <hr />
        <Link to="/contact ">CONTACT</Link>
        <hr />
        <Link to="/blog">BLOG</Link>
        <hr />
      </div>
      <Divider />
      {/* award stuff at the bottom here */}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: "280px",
            height: "50px",
            background: "white",
          }}
          // icons for email and such go here
        >
          <Toolbar sx={{ display: "flex", justifyContent: "end" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 0,
                display: { sm: "none" },
                background: "black",
                width: "30px",
                height: "30px",
                borderRadius: 0,
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
        </Box>
      </Box>
      <Box sx={{ background: "blue", ml: {sm: "220px"} }}>
        <Home />
      </Box>
    </>
  );
}

export default ResponsiveDrawer;