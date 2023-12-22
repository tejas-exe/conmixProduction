import React from "react";
import { Helmet } from "react-helmet";
import { AppBar, IconButton, Stack, Toolbar} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import s from "./style.module.css";

export function Header() {
  const handleInstaIconClick = () => {
    // Replace "/your-path" with the actual path you want to navigate to
    const newWindow = window.open(
      "https://www.instagram.com/conmix_rmc/",
      "_blank"
    );
    if (newWindow) {
      newWindow.opener = null;
    }
  };
  const handleFBIconClick = () => {
    const newWindow = window.open(
      "https://www.facebook.com/conmixrmc",
      "_blank"
    );
    if (newWindow) {
      newWindow.opener = null;
    }
  };
  const handleUtubeIconClick = () => {
    const newWindow = window.open(
      "https://www.youtube.com/@CONMIXRMC",
      "_blank"
    );
    if (newWindow) {
      newWindow.opener = null;
    }
  };
  const handleTwitterIconClick = () => {
    const newWindow = window.open("https://twitter.com/ConmixRmc", "_blank");
    if (newWindow) {
      newWindow.opener = null;
    }
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CONMIX RMC - Ready Mix Concrete</title>
        <meta
          name="description"
          content="Contact CONMIX RMC for high-quality ready mix concrete services. Call us at [Your Phone Number] or email us at [Your Email]. Follow us on social media for updates."
        />
      </Helmet>

      <div className={s.resp}>
        <AppBar
          sx={{
            backgroundColor: "#FFFFFF",
            color: "#000000",
            borderBottom: 1,
            position: "inherit",
          }}
        >
          <Toolbar sx={{ mx: 9, my: -2 }}>
            {/* <Typography
              className={s.companyContact}
              sx={{ flexGrow: 1, display: "flex", marginTop: 1 }}
            >
              <Typography>
                <PhoneIcon />
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontWeight: 500, marginRight: 6 }}
              >
                {details.phoneNo}
              </Typography>

              <Typography sx={{ marginRight: 1 }}>
                <ContactMailIcon />
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                {details.email}
              </Typography>
            </Typography> */}
            <Stack direction="row" spacing={2} className={s.socials}>
              <IconButton color="primary" onClick={handleFBIconClick}>
                <FacebookIcon fontSize="small" style={{ color: "#c70039" }} />
              </IconButton>
              <IconButton color="primary" onClick={handleInstaIconClick}>
                <InstagramIcon fontSize="small" style={{ color: "#c70039" }} />
              </IconButton>
              <IconButton color="primary" onClick={handleUtubeIconClick}>
                <YouTubeIcon fontSize="small" style={{ color: "#c70039" }} />
              </IconButton>
              <IconButton color="primary" onClick={handleTwitterIconClick}>
                <TwitterIcon fontSize="small" style={{ color: "#c70039" }} />
              </IconButton>
            </Stack>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
}
