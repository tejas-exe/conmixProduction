// import { Button, Container, IconButton, Stack, Typography } from '@mui/material'
// import React from 'react'

// export default function Navbar() {
//     return (
//         <div>
//             <Container sx={{ display: 'flex' }}>
//                 <Typography variant="h6" sx={{ flexGrow: 1 }}>
//                     POKEMONAPP
//                 </Typography>
//                 <Stack direction="row" spacing={2}>
//                     <Button color="inherit">Features</Button>
//                     <Button color="inherit">Pricing</Button>
//                     <Button color="inherit">About</Button>
//                     <Button color="inherit">Login</Button>
//                 </Stack>
//             </Container>
//         </div>
//     )
// }

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import { animateScroll as scroll } from "react-scroll";
import { Stack } from "@mui/material";

const pages = ["Home", "About Us", "Why Us", "Products", "Contact"];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //     setAnchorElUser(event.currentTarget);
  // };
  const handleInstaIconClick = () => {
    // Replace "/your-path" with the actual path you want to navigate to
    const newWindow = window.open("https://www.instagram.com/conmix_rmc/", "_blank");
    if (newWindow) {
      newWindow.opener = null;
    }
  };
  const handleFBIconClick =()=>{
    const newWindow = window.open("https://www.facebook.com/conmixrmc", "_blank");
    if (newWindow) {
      newWindow.opener = null;
    }
  }
  const handleUtubeIconClick =()=>{
    const newWindow = window.open("https://www.youtube.com/@CONMIXRMC", "_blank");
    if (newWindow) {
      newWindow.opener = null;
    }
  }
  const handleTwitterIconClick =()=>{
    const newWindow = window.open("https://twitter.com/ConmixRmc", "_blank");
    if (newWindow) {
      newWindow.opener = null;
    }
  }
  const handleCloseNavMenu = (event) => {
    setAnchorElNav(null);
    console.log("==>=>", event.target.id);

    if (event.target.id === "Home") {
      scroll.scrollTo(100);
    }
    if (event.target.id === "About Us") {
      scroll.scrollTo(700);
    }
    if (event.target.id === "Why Us") {
      scroll.scrollTo(1350);
    }
    if (event.target.id === "Products") {
      scroll.scrollTo(1700);
    }
    if (event.target.id === "Contact") {
      scroll.scrollTo(3000);
    }

    if (event.target.id === "Home m") {
      scroll.scrollTo(100);
    }
    if (event.target.id === "About Us m") {
      scroll.scrollTo(650);
    }
    if (event.target.id === "Why Us m") {
      scroll.scrollTo(2000);
    }
    if (event.target.id == "Products m") {
      scroll.scrollTo(2800);
    }
    if (event.target.id == "Contact m") {
      scroll.scrollTo(4500);
    }
  };

  const handleCloseUserMenu = (event) => {
    setAnchorElUser(null);
    console.log("==>=>", event.target.name);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "white", color: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <img
              src="https://drive.google.com/uc?id=15XnH83PP4JrNnXqCf-A30oq1nYgkpkWy"
              alt="LOGO"
              style={{ width: "50px"}}
            />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              ml: 5,
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 800,
              letterSpacing: ".3rem",
              textDecoration: "none",
              color: "#000",
            }}
          >
            CONMIX RMC
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} id={page} onClick={handleCloseNavMenu}>
                  <Typography
                    sx={{ fontWeight: 800 }}
                    textAlign="center"
                    id={page + " m"}
                  >
                    {page}
                  </Typography>
                 
                </MenuItem>
              ))}
              <Stack direction="row" spacing={1} p={1}>
          <IconButton color="primary" onClick={handleFBIconClick}>
            <FacebookIcon fontSize="small" style={{color:"#c70039"}} />
          </IconButton>
          <IconButton color="primary" onClick={handleInstaIconClick}>
            <InstagramIcon fontSize="small" style={{color:"#c70039"}}/>
            </IconButton>
             <IconButton color="primary" onClick={handleUtubeIconClick}>
             < YouTubeIcon  fontSize="small" style={{color:"#c70039"}} />
             </IconButton>
             <IconButton color="primary" onClick={handleTwitterIconClick}>
             < TwitterIcon  fontSize="small" style={{color:"#c70039"}} />
             </IconButton>
          </Stack>
            </Menu>
            
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 800,
              letterSpacing: ".3rem",
              color: "#c70039",
              textDecoration: "none",
            }}
          >
            {/* <img
              src="https://drive.google.com/uc?id=15XnH83PP4JrNnXqCf-A30oq1nYgkpkWy"
              alt="LOGO"
              style={{ width: "50px"}}
            /> */}
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) => (
              <Button
                id={page}
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  fontWeight: 800,
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            ></Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
