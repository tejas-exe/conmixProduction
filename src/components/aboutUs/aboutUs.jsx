import { Grid } from "@mui/material";
import React from "react";
import CustomizedAccordions from "./accordian";
import s from "./style.module.css";

const highlights = [
  { value: "20+", label: "Years of field experience" },
  { value: "18,000", label: "m3 monthly batching capacity" },
  { value: "2", label: "Operational RMC plants in Surat" },
];

const trustPoints = [
  "Computer-controlled batching for consistent quality",
  "Responsive dispatch built around project timelines",
  "Engineers and technologists focused on durable performance",
];

export function AboutUs() {
  return (
    <section className={s.aboutSection}>
      <div className={s.glowTop} />
      <div className={s.glowBottom} />

      <Grid
        container
        columnSpacing={{ xs: 3, md: 8, lg: 10 }}
        rowSpacing={{ xs: 5, md: 0 }}
        className={s.heroGrid}
      >
        <Grid item xs={12} lg={6}>
          <div className={s.aboutCopy}>
            <span className={s.aboutBtn}>About Conmix</span>
            <h1 className={s.aboutUsHeading}>United For Excellence In Every Mix</h1>
            <p className={s.aboutUsPara}>
              CONMIX RMC (SOMNATH RMC & CEMENT PRODUCTS) is a trusted ready-mix
              concrete manufacturer serving Surat with dependable supply,
              technical expertise, and production consistency. For more than 20
              years, the company has operated two RMC plants in Surat along with
              a strong aggregate network across South Gujarat.
            </p>
            <p className={s.aboutUsPara}>
              Ready-mix concrete is at the heart of the business. Supported by
              experienced engineers and concrete technologists, Conmix develops
              and delivers durable, high-quality concrete tailored to client
              needs through a modern computer-controlled batching facility.
            </p>

            <div className={s.highlightRow}>
              {highlights.map((item) => (
                <div key={item.label} className={s.highlightCard}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Grid>

        <Grid item xs={12} lg={6}>
          <div className={s.visualStageShell}>
            <div className={s.visualStage}>
              <div className={s.stageGrid} />
              <div className={s.imageCardPrimary}>
                <img
                  className={s.image}
                  src="/ab1.jpg"
                  alt="Conmix facility view"
                />
              </div>
              <div className={s.imageCardSecondary}>
                <img
                  className={s.image}
                  src="/ab2.jpg"
                  alt="Conmix batching and transport"
                />
              </div>
              <div className={s.floatingPanel}>
                <span className={s.floatingLabel}>Operational edge</span>
                <strong>
                  Structured supply, reliable pours, better site momentum
                </strong>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={{ xs: 3, md: 4 }}
        className={s.detailGrid}
      >
        <Grid item xs={12} md={6}>
          <div className={s.accordionShell}>
            <div className={s.panelIntro}>
              <span className={s.panelTag}>Core principles</span>
              <h2>How we approach every project partnership</h2>
            </div>
            <CustomizedAccordions />
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <div className={s.trustPanel}>
            <span className={s.sliderBtn}>Conmix Standard</span>
            <h2 className={s.trustLead}>
              Punctuality and quality now move with the same precision.
            </h2>
            <h3 className={s.trustHeading}>Trusted By Experts On Real Job Sites</h3>
            <p className={s.trustCopy}>
              At Conmix RMC, timely execution and concrete quality are treated as
              one system. We help projects stay on schedule with dependable
              delivery while maintaining the strength, finish, and consistency
              needed for long-term structural confidence.
            </p>

            <div className={s.trustList}>
              {trustPoints.map((point) => (
                <div key={point} className={s.trustItem}>
                  <span className={s.trustDot} />
                  {point}
                </div>
              ))}
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}
