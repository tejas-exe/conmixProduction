import { Grid } from "@mui/material";
import React from "react";
import Video from "../../assets/video/ConMix Navratri Ad.mp4";
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
              Reliability, Trust on final Products
            </h1>
            <p className={s.whyusPara}>
              <ul>
                <li>
                  Provide highest quality products and services at optimum
                  efficncy.
                </li>
                <li>
                  Ensure that all needs and requirements of customers are
                  exceeded.
                </li>
                <li>Ensure cost-effectiveness.</li>
                <li>
                  Continuously improve job performance, processes, products and
                  services.
                </li>
                <li>
                  Total commitment to quality by top management and all levels
                  of staff.
                </li>
                <li>Ensure that all work is carried out.</li>
              </ul>{" "}
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default WhyUs;
