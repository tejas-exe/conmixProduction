import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import s from "./style.module.css";
import { Helmet } from "react-helmet";

export function Home() {
  // Local images for the slider
  const images = ["/bg1.jpg", "/bg2.jpg"];

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Provide high-quality ready mix concrete to clients."
        />
        <meta
          name="keywords"
          content="Conmix RMC Somnath,Surat Provide high-quality ready mix concrete"
        />

        <meta property="og:title" content="Conmix RMC - Ready Mix Concrete" />
        <meta
          property="og:description"
          content="Provide high-quality ready mix concrete to clients."
        />
      </Helmet>

      <Fade easing="linear" duration={2000} arrows={false}>
        {/* Slide 1 */}
        <div className="each-slide-effect">
          <div
            style={{
              height: 600,
              background: `linear-gradient(rgba(255,255,255,0.4), rgba(0,0,0,0.8)), url(${images[0]}) no-repeat center / cover`,
            }}
          >
            <div
              className={s.parent}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                height: "100%",
              }}
            >
              <span className={s.sliderBtn}>Conmix</span>
              <h2 className={s.sliderHeading}>Building Tomorrow</h2>
              <h1 className={s.sliderHeading2}>
                Your Trusted Ready-Mix Concrete Partner
              </h1>
              <p className={s.sliderContent}>
                Discover the foundation of success with our ready-mix concrete
                solutions. We deliver durability, innovation, and reliability in
                every project.
              </p>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="each-slide-effect">
          <div
            style={{
              height: 600,
              background: `linear-gradient(rgba(255,255,255,0.4), rgba(0,0,0,0.8)), url(${images[1]}) no-repeat center / cover`,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
            }}
          >
            <div
              className={s.parent}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                height: "100%",
              }}
            >
              <span className={s.sliderBtn}>Conmix</span>
              <h2 className={s.sliderHeading}>Strength in Every Pour</h2>
              <h1 className={s.sliderHeading2}>
                Unleashing the Power of Ready-Mix Concrete
              </h1>
              <p className={s.sliderContent}>
                Experience unmatched strength and durability. Our ready-mix
                concrete ensures your structures stand strong for years.
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
}