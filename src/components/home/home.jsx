import React from "react";
import { Fade, Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import s from "./style.module.css";

export function Home() {
  const images = [
    "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1661913209349-eca68a68dee2?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <Fade easing={"linear"} duration={2000} arrows={false}>
      <div className="each-slide-effect">
        <div
          style={{
            height: 600,
            background: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.35)), url(${images[0]})no-repeat center / cover`,
          }}
        >
          <div className={s.parent}>
            <span className={s.sliderBtn}>CONMIX RMC</span>
            <h2 className={s.sliderHeading}>Unbreakable and long lasting</h2>
            <h1 className={s.sliderHeading2}>Trust of Experts</h1>
            <p className={s.sliderContent}>
              Welcome to CONMIX RMC, a trusted name in Ready Mix Concrete (RMC).
              With 20+ years of excellence, we operate two advanced plants in
              Surat and leading aggregate facilities in South Gujarat. Our
              expert team delivers high-performance RMC tailored to your needs.
              Our modern batching plant has a monthly capacity of 18,000 cubic
              meters. Choose CONMIX RMC for quality and innovation!
            </p>
          </div>
        </div>
      </div>
      <div className="each-slide-effect">
        <div
          style={{
            height: 600,
            background: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.35)), url(${images[1]})no-repeat center / cover`,
          }}
        >
          <div className={s.parent}>
            <span className={s.sliderBtn}>Conmix</span>
            <h2 className={s.sliderHeading}>Best ready mix concrete for</h2>
            <h1 className={s.sliderHeading2}>Strong construction</h1>
            <p className={s.sliderContent}>
              CONMIX upholds rigorous quality standards in design, development,
              production, installation, and service, meeting international
              benchmarks. We are dedicated to enhancing organizational
              performance, efficiency, and effectiveness. Prioritizing the
              health, safety, and environmental sustainability of our workforce,
              we provide top-notch RMC solutions. Choose CONMIX RMC for quality
              products and reliable services, your one-stop solution for
              superior concrete needs.
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
}
