import { Grid } from "@mui/material";
import React from "react";
import s from "./style.module.css";
import "../../style.css";
import CustomizedAccordions from "./accordian";
export function AboutUs() {
  const textStyle = {
    color: "#000",
    textAlign: "center",
    fontSize: "24px",
    lineHeight: "1.5",
  };

  const highlightStyle = {
    paddingTop: "10px",
    color: "#c70039", // Light red color for highlighted words
    fontWeight: "bold", // Make highlighted words bold
    fontStyle: "italic", // Make highlighted words italic
    // textDecoration: "underline", // Underline the highlighted words
  };
  return (
    <div>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 8, md: 10 }}
        direction={{ xs: "column", lg: "row", md: "row" }}
        sx={{ backgroundColor: "#FFF5E0" }}
      >
        <Grid xs={12} sm={12} lg={6}>
          <div className={s.about1}>
            <span className={s.aboutBtn}>About Conmix</span>
            <h1 className={s.aboutUsHeading}> United For Excellence</h1>
            <p className={s.aboutUsPara}>
              CONMIX RMC (SOMNATH RMC & CEMENT PRODUCTS) company is a reputable
              manufacturer and supplier of ready-mix concrete in the entire
              Surat City. For more than 20 years, the company has operated 2 RMC
              Plants located in Surat, along with numerous quarries and plants
              located in South Gujarat, under its leading aggregate brand in
              Surat. Ready mix concrete is CONMIX's primary business. The
              company creates, produces, and distributes ready-mix concrete
              following the demands of its clients. With the help of its group
              of skilled engineers and concrete technologists, the company can
              provide high-quality, long-lasting concrete for every need. The
              company operates a state-of-the-art computer controlled batching
              facility with a combined monthly capacity of about 18,000 cubic
              metres.
            </p>
          </div>
        </Grid>
        <Grid xs={12} sm={12} lg={6}>
          <div className="container">
            <div className="image-stack">
              <div className="image-stack__item image-stack__item--top">
                <img
                  class="image"
                  src="https://drive.google.com/uc?id=1Bqqq1E9SGp66-bvvTLH-NHGgPlPgmTDt"
                  alt="CONMIX ONE"
                />
              </div>
              <div className="image-stack__item image-stack__item--bottom">
                <img
                  class="image"
                  src="https://drive.google.com/uc?id=1M6bp8xn6bYmM-iaIzHv-sacVPF7jRNYg"
                  alt="CONMIX TWO"
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
              <span style={highlightStyle}> Punctuality</span>
              {`  and `}
              <span style={highlightStyle}>quality</span> have entered a new
              age!
            </h2>
            <h1>Trust of Experts</h1>
            <p>
              Timeliness and quality have entered a new age! At ConMix RMC, we
              redefine the standards of excellence in ready-mix concrete. Our
              unwavering commitment to punctuality ensures that your projects
              stay on track, meeting deadlines with precision. Paired with our
              relentless dedication to quality, our concrete solutions stand as
              a testament to durability and reliability. Step into a new era
              where every pour is a seamless blend of timeliness and
              uncompromised quality, setting a solid foundation for your
              success.
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
