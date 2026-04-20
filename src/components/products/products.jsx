import React, { useState } from "react";
import Slider from "react-slick";
import { Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartArea,
  faGears,
  faHandshake,
  faMicrochip,
  faThumbsUp,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import s from "./style.module.css";
import img1 from "../../assets/manufacturing.jpg";
import img2 from "../../assets/technology.jpg";
import img3 from "../../assets/jpeg-optimizer_top notch quality.jpg";
import img4 from "../../assets/jpeg-optimizer_supplier.jpg";
import img5 from "../../assets/outsource.jpg";
import img6 from "../../assets/jpeg-optimizer_area of product applications.jpg";

function SampleArrow(props) {
  const { className, onClick } = props;

  return <div className={`${className} ${s.sliderArrow}`} onClick={onClick} />;
}

const galleryImages = [
  "/p1.jpeg",
  "/p2.jpeg",
  "/p3.jpeg",
  "/p4.jpeg",
  "/p5.jpeg",
  "/p6.jpeg",
  "/p7.jpeg",
  "/p8.jpeg",
];

const drawerDetails = [
  {
    id: "1",
    title: "Manufacturing",
    details:
      "Embark on a journey through the heart of ConMix's manufacturing excellence. Our state-of-the-art facilities blend precision and innovation to create ready-mix concrete that sets the standard for quality in the construction industry.",
    image: img1,
  },
  {
    id: "2",
    title: "Technology",
    details:
      "At ConMix, we embrace the forefront of technology to redefine concrete solutions. Advanced techniques and process control help every batch meet the demands of modern construction.",
    image: img2,
  },
  {
    id: "3",
    title: "Top Notch Quality",
    details:
      "Quality is not just a promise; it is a commitment built into every cubic meter. Our quality control measures help ensure durability, reliability, and stronger long-term performance on site.",
    image: img3,
  },
  {
    id: "4",
    title: "Supplier",
    details:
      "Trust ConMix as a reliable construction partner. We maintain consistent supply, timely deliveries, and dependable quality that helps teams keep progress steady.",
    image: img4,
  },
  {
    id: "5",
    title: "Outsource Work",
    details:
      "Simplify your construction workflow by outsourcing concrete production and delivery to ConMix. This lets your team stay focused on execution while we manage concrete readiness efficiently.",
    image: img5,
  },
  {
    id: "6",
    title: "Area of Product Application",
    details:
      "From residential builds to large-scale infrastructure, ConMix ready-mix concrete supports a wide range of applications with strength, consistency, and reliable performance.",
    image: img6,
  },
];

const buttonData = [
  { icon: faGears, index: 0, label: "Manufacturing" },
  { icon: faMicrochip, index: 1, label: "Technology" },
  { icon: faThumbsUp, index: 2, label: "Top Notch Quality" },
  { icon: faTruck, index: 3, label: "Supplier" },
  { icon: faHandshake, index: 4, label: "Outsource Work" },
  { icon: faChartArea, index: 5, label: "Product Application" },
];

export default function Products() {
  const [detailIndex, setDetailIndex] = useState(0);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />,
    autoplay: true,
    autoplaySpeed: 2200,
    pauseOnDotsHover: true,
    pauseOnHover: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          centerMode: true,
          centerPadding: "44px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          centerMode: true,
          centerPadding: "28px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "28px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <section className={s.productsSection}>
      <div className={s.glowTop} />
      <div className={s.glowBottom} />

      <div className={s.productPage}>
        <div className={s.proudct1}>
          <span className={s.productBtn}>Product Usage</span>
          <h1 className={s.productHeading}>Our Products</h1>
          <p className={s.productLead}>
            Explore how Conmix combines manufacturing strength, technology, and
            product versatility to support modern construction with dependable
            ready-mix concrete solutions.
          </p>
        </div>

        <div className={s.sliderShell}>
          <Slider {...settings}>
            {galleryImages.map((image, index) => (
              <div key={image} className={s.productcontainer}>
                <div className={s.galleryCard}>
                  <img
                    src={image}
                    alt={`Product showcase ${index + 1}`}
                    className={s.productIMG}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <Grid container spacing={{ xs: 3, md: 4 }} className={s.detailSection}>
        <Grid item xs={12} md={5}>
          <div className={s.buttonPanel}>
            <span className={s.panelTag}>Capabilities</span>
            <h2 className={s.panelTitle}>Select a focus area to explore our product strengths</h2>

            <div className={s.buttonList}>
              {buttonData.map(({ icon, index, label }) => (
                <button
                  key={label}
                  type="button"
                  className={`${s.optionButton} ${
                    detailIndex === index ? s.optionButtonActive : ""
                  }`}
                  onClick={() => setDetailIndex(index)}
                >
                  <span className={s.optionIcon}>
                    <FontAwesomeIcon icon={icon} />
                  </span>
                  <span className={s.optionText}>{label}</span>
                </button>
              ))}
            </div>
          </div>
        </Grid>

        <Grid item xs={12} md={7}>
          <div className={s.detailCard}>
            <div className={s.detailImageWrap}>
              <img
                className={s.functionImage}
                src={drawerDetails[detailIndex].image}
                alt={drawerDetails[detailIndex].title}
                loading="lazy"
              />
            </div>
            <div className={s.detailContent}>
              <span className={s.detailTag}>Conmix insight</span>
              <h3 className={s.detailTitle}>{drawerDetails[detailIndex].title}</h3>
              <p className={s.detailText}>{drawerDetails[detailIndex].details}</p>
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}
