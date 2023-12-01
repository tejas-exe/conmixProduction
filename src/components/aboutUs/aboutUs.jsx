import { Grid } from "@mui/material";
import React from "react";
import s from "./style.module.css";
import "../../style.css";
import CustomizedAccordions from "./accordian";
export function AboutUs() {
  const textStyle = {
    color: "#444", // Dark gray color for the entire text
    fontFamily: "Arial", // Add your preferred font family
    textAlign: "center", // Center-align the text
    fontSize: "24px", // Adjust font size as needed
    lineHeight: "1.5", // Adjust line height for better readability
  };

  const highlightStyle = {
    color: "#ff4d4d", // Light red color for highlighted words
    fontWeight: "bold", // Make highlighted words bold
    fontStyle: "italic", // Make highlighted words italic
    textDecoration: "underline", // Underline the highlighted words
  };
  return (
    <div>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 8, md: 10 }}
        direction={{ xs: "column", lg: "row", md: "row" }}
        sx={{ backgroundColor: "#e9e9e9" }}
      >
        <Grid xs={12} sm={12} lg={6}>
          <div className={s.about1}>
            <span className={s.aboutBtn}>ABOUT CONMIX</span>
            <h1 className={s.aboutUsHeading}>Alliance For Excellent</h1>
            <p className={s.aboutUsPara}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda, incidunt id adipisci quia, itaque consectetur nemo sunt
              illum exercitationem ipsum quaerat, alias officiis? Commodi
              dolorem est dolorum maxime quibusdam quaerat dolore dicta
              mollitia, magnam, nemo, soluta eum. Cumque itaque repellendus in
              asperiores quidem? Nostrum nisi ex, recusandae culpa cupiditate
              nam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
              tempore minus hic repudiandae. Mollitia repellat deleniti tenetur
              repellendus porro eaque eum sapiente dolores voluptates
              recusandae, excepturi quisquam, rerum illum veniam ipsum hic saepe
              quos minus dolor laboriosam accusamus quis est Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Alias magni obcaecati
              maiores at itaque, vero quis minus a cupiditate dolorem minima
              quam. Similique est doloremque illo veniam praesentium magni
              laudantium Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Perferendis deserunt, placeat nostrum, veniam consectetur
              perspiciatis odio autem mollitia omnis neque nihil velit alias ex
              harum facilis sequi dignissimos esse labore?
            </p>
          </div>
        </Grid>
        <Grid xs={12} sm={12} lg={6}>
          <div className="container">
            <div className="image-stack">
              <div className="image-stack__item image-stack__item--top">
                <img
                  class="image"
                  src="https://images.unsplash.com/photo-1508522750368-d7e3edeba646?auto=format&fit=crop&q=80&w=1469&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div className="image-stack__item image-stack__item--bottom">
                <img
                  class="image"
                  src="https://images.unsplash.com/photo-1527410651988-c2f385ccd3f7?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={3}
        sx={{
          width: "95%", // Set width to 95%
          margin: "auto",
          "@media (max-width: 600px)": {
            width: "100%", // Set width to 100% on screens with max width 600px
            padding: "0", // Remove padding
            margin: "-10px", // Remove margin
          },
        }}
      >
        <Grid item xs={12} md={6}>
          <div
            style={{
              // background: "lightgrey",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CustomizedAccordions />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div
            style={{
              margin: "20px",
              padding: "20px",
              textAlign: "center",
              backgroundColor: "white",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              "@media (max-width: 600px)": {
                width: "100%", // Set width to 100% on screens with max width 600px
                padding: "0", // Remove padding
                margin: "0", // Remove margin
              },
            }}
          >
            <span className={s.sliderBtn}>Conmix</span>
            <h2 style={textStyle}>
              A new era of <span style={highlightStyle}>quality</span> and{" "}
              <span style={highlightStyle}>timeliness</span> is upon us
            </h2>
            <h1>Trust of Experts</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              eum facere ipsa numquam non dignissimos quidem veritatis nobis
              molestias at, labore nam nesciunt vero id aspernatur dicta
              assumenda amet. Qui.
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
