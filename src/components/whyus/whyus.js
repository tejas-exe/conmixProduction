import { Grid } from "@mui/material";
import React from "react";
import VidThumb from "../../assets/video/vidThumb.png";

import s from "./style.module.css";
import "../../style.css";

const WhyUs = () => {
  const videoId = "JM1YhG9MPxs"; // Extracted from the YouTube URL
  return (
    <div className={s.whyusPage}>
      <Grid container>
        <Grid item xs={12} sm={12} lg={6} className={s.videoContainer}>
          <iframe
            width="100%"
            height="500"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allowFullScreen
            title="YouTube Video"
            poster={VidThumb}
          ></iframe>
        </Grid>
        <Grid item xs={12} sm={12} lg={6}>
          <div className={s.whyus}>
            <span className={s.whyusBtn}>WHY ONLY CONMIX</span>
            <h1 className={s.whyusHeading}>
              Dependability and confidence in our end products
            </h1>
            <p className={s.whyusPara}>
              At ConMix RMC, we take pride in fostering dependability and
              instilling confidence in our end products. Our commitment to
              excellence is evident in every batch of ready-mix concrete we
              produce. With a focus on precision and quality assurance, ConMix
              RMC ensures that your construction projects stand on a foundation
              of strength, reliability, and the confidence that comes with
              unmatched dependability. Discover a new level of assurance in
              every pour with ConMix RMC
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default WhyUs;
