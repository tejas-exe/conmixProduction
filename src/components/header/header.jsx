import React from "react";
import {
  AppBar,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import details from "../../assets/video/conmixDetails";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import s from "./style.module.css";

export function Header() {
  return (
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
          <Typography sx={{ flexGrow: 1, display: "flex", marginTop: 1 }}>
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
          </Typography>
          <Stack direction="row" spacing={2}>
            <FacebookIcon fontSize="small" />
            <InstagramIcon fontSize="small" />
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
}
