import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-scroll";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import s from "./style.module.css";

const slides = [
  {
    image: "/bg1.jpg",
    eyebrow: "Conmix RMC",
    title: "Building Tomorrow With Precision Concrete",
    description:
      "High-performance ready-mix concrete engineered for speed, consistency, and dependable results across residential, commercial, and infrastructure projects.",
    stats: [
      { value: "24/7", label: "Dispatch Support" },
      { value: "100%", label: "Batch Accuracy" },
      { value: "On-Time", label: "Site Delivery" },
    ],
  },
  {
    image: "/bg2.jpg",
    eyebrow: "Strength In Every Pour",
    title: "Modern Mix Solutions For Demanding Builds",
    description:
      "From foundations to elevated structures, we help teams move faster with durable mixes, responsive logistics, and quality you can trust on every load.",
    stats: [
      { value: "Fast", label: "Turnaround" },
      { value: "Reliable", label: "Supply Chain" },
      { value: "Durable", label: "End Performance" },
    ],
  },
];

export function Home() {
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

      <section className={s.hero}>
        <Fade
          easing="ease"
          duration={4200}
          transitionDuration={900}
          pauseOnHover={false}
          arrows={false}
          indicators={false}
        >
          {slides.map((slide) => (
            <div key={slide.title} className={s.slide}>
              <div
                className={s.slideBackground}
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className={s.overlay} />
                <div className={s.gridGlow} />
                <div className={s.orbOne} />
                <div className={s.orbTwo} />

                <div className={s.parent}>
                  <div className={s.contentWrap}>
                    <span className={s.sliderBtn}>{slide.eyebrow}</span>
                    <h1 className={s.sliderHeading}>{slide.title}</h1>
                    <p className={s.sliderContent}>{slide.description}</p>

                    <div className={s.actionRow}>
                      <Link
                        to="Contact"
                        smooth="easeInOutQuart"
                        duration={800}
                        offset={-40}
                        className={s.primaryAction}
                      >
                        Request a Quote
                      </Link>
                      <div className={s.signalBadge}>
                        <span className={s.signalDot} />
                        Quality-Controlled Deliveries
                      </div>
                    </div>
                  </div>

                  <div className={s.metricsPanel}>
                    <div className={s.metricsHeader}>
                      <span className={s.metricsLabel}>Project readiness</span>
                      <strong>Concrete built for confident execution</strong>
                    </div>

                    <div className={s.metricBars}>
                      <div className={s.metricBarGroup}>
                        <span>Consistency</span>
                        <div className={s.metricTrack}>
                          <div className={`${s.metricFill} ${s.fillOne}`} />
                        </div>
                      </div>
                      <div className={s.metricBarGroup}>
                        <span>Delivery pace</span>
                        <div className={s.metricTrack}>
                          <div className={`${s.metricFill} ${s.fillTwo}`} />
                        </div>
                      </div>
                      <div className={s.metricBarGroup}>
                        <span>Structural performance</span>
                        <div className={s.metricTrack}>
                          <div className={`${s.metricFill} ${s.fillThree}`} />
                        </div>
                      </div>
                    </div>

                    <div className={s.metricCards}>
                      {slide.stats.map((stat) => (
                        <div key={stat.label} className={s.metricCard}>
                          <strong>{stat.value}</strong>
                          <span>{stat.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={s.scrollCue}>
                  <span className={s.scrollLine} />
                  Scroll to explore
                </div>
              </div>
            </div>
          ))}
        </Fade>
      </section>
    </>
  );
}
