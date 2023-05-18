import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Container from "./Container";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import SecondDrawer from "./SecondDrawer";
import { Link } from "react-router-dom";

const drawerWidth = "240px";

function ResponsiveDrawer() {

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
      <div className="links">
        <div>
          <hr />
          <Link to="/">SCHEDULE</Link>
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
        <div className="award">
          <div
            title='2022 instructional excellence award from 2u.'
            data-iframe-width="150"
            data-iframe-height="270"
            data-share-badge-id="10d343b0-6ceb-4b18-960c-a46c0b76c228"
            data-share-badge-host="https://www.credly.com"
          ></div>
        </div>
        <div className="pri-pol-link">
          <Link to="privacy">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );

  

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            background: "white",
            width: { xs: "220px", sm: "280px" },
            height: { xs: "40px", sm: "50px" },
            display: { xs: "flex", sm: "flex" },
            top: { xs: "auto", sm: "0" },
            bottom: { xs: 0, sm: "auto" },
          }}
        >
          <div className="icons d-flex flex-row justify-content-evenly">
            <a href="#">
              <i className="fa-brands fa-linkedin-in fa-lg"></i>
            </a>{" "}
            <a href="mailto:luckycatventuresllc@gmail.com">
              <i className="fa-solid fa-envelope"></i>
            </a>{" "}
            <a href="https://github.com/femke77" target="_blank">
              <i className="fa-brands fa-github fa-lg"></i>
            </a>
          </div>
        </AppBar>

        <AppBar
          position="fixed"
          sx={{
            background: "white",
            width: { xs: "100%", sm: "280px" },
            height: { xs: "100px", sm: "50px" },
            display: { sm: "none", xs: "block" },
          }}
        >
          <div className=" header d-flex justify-content-between">
            <div className="pt-2 ps-2">
              <div className="name pb-1">Meg Meyers </div>
              <p>Tutoring Services</p>
            </div>
            <div>
              <Toolbar sx={{ display: "flex", justifyContent: "end" }}>
                <IconButton
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{
                    mr: 0,
                    display: { sm: "none" },
                    background: "black",
                    color: "white",
                    width: "30px",
                    height: "30px",
                    borderRadius: 0,
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Toolbar>
            </div>
          </div>
        </AppBar>

        <Drawer
      
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
            // p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        ></Box>
      </Box>
      <Box sx={{ ml: { sm: drawerWidth } }}>
        <Container />
      </Box>
    </>
  );
}

export default ResponsiveDrawer;
