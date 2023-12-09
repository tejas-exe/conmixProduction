import React from "react";
import { Fade, Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import s from "./style.module.css";

export function Home() {
  const images = [
    "https://drive.google.com/uc?id=1MfIASrtu-FEZf98ctR589YiVOIAv8xII",
    "https://drive.google.com/uc?id=1kb8D_IQojbMiRCThRek60cYhMKwpFz4o",
  ];

  return (
    <Fade easing={"linear"} duration={2000} arrows={false}>
      <div className="each-slide-effect">
        <div
          style={{
            height: 600,
            background: `linear-gradient(rgba(255,255,255,0.4), rgba(0,0,0,0.8)), url(${images[0]})no-repeat center / cover`,
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
              solutions. As your trusted partner in construction, we deliver not
              just concrete but the promise of durability, innovation, and a
              steadfast commitment to building a brighter tomorrow. Explore how
              our expertise elevates your projects to new heights
            </p>
          </div>
        </div>
      </div>
      <div className="each-slide-effect">
        <div
          style={{
            height: 600,
            background: `linear-gradient(rgba(255,255,255,0.4), rgba(0,0,0,0.8)), url(${images[1]})no-repeat center / cover`,
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
              Unleashing the Power of Ready-Mix Concret
            </h1>
            <p className={s.sliderContent}>
              Experience the epitome of strength with our ready-mix concrete.
              Our blend is more than just a mix; it's a powerhouse of
              reliability and resilience. From the first pour to the finishing
              touches, our concrete unleashes unmatched power, ensuring your
              structures stand the test of time. Unleash the strength your
              projects deserve
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
}
