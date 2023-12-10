import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { Button, Grid } from "@mui/material";
import s from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears } from "@fortawesome/free-solid-svg-icons";
import {
  faMicrochip,
  faThumbsUp,
  faTruck,
  faHandshake,
  faChartArea,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const btnStyle = {
  margin: "5px",
  textAlign: "center",
  padding: "10px",
  borderRadius: "1px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer",
  width: "80%",
  color: "#c70039",
};
const selectedBtnStyle = {
  ...btnStyle,
  backgroundColor: "#fff5e0",
};
function SampleArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        display: "flex",
        // width: "50px",
        // height: "50px",
        borderRadius: "20px",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        background: "gray",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
}
export default function Products() {
  const images = [
    "https://drive.google.com/uc?export=view&id=1vqrskxUl4g21ahxm_YiTeS_QZmAOyeBi",
    "https://drive.google.com/uc?export=view&id=1wUyjkA99YXv4IKSdJRNmpoSDF6joSGjG",
    "https://drive.google.com/uc?export=view&id=1XY9Agd-_GFhCAMHqNhCOg785iNQpuc-x",
    "https://drive.google.com/uc?export=view&id=1wmiP9dkKHTERp0YTlZtEmcsBaBpyD5O4",
    "https://drive.google.com/uc?export=view&id=1Gl6epjuHCE4Fk2J1r197qbkR6rrTpxgM",
    "https://drive.google.com/uc?export=view&id=1qQszFxxOxPG-iR9WOrQy4w3XBh0QtlC8",
    "https://drive.google.com/uc?export=view&id=1VCJiFkKymaaE7MNyHtRPJNIQnLR7bLeP",
    "https://drive.google.com/uc?export=view&id=1tv6c8hH57wkG5wjUufJUTMiO0preSd2B",
  ];
  const drawerDetails = [
    {
      id: "1",
      title: "Manufacturing",
      details:
        "Embark on a journey through the heart of ConMix's manufacturing excellence. Our state-of-the-art facilities blend precision and innovation to create ready-mix concrete that sets the standard for quality in the construction industry. Explore the meticulous process that brings your projects to life.",
      image:
        "https://drive.google.com/uc?export=view&id=1KAGT1QwkqThZ9AQBHurRd477vFvuUaad",
    },
    {
      id: "2",
      title: "Technology",
      details:
        "At ConMix, we embrace the forefront of technology to redefine concrete solutions. Dive into a world where cutting-edge innovations and advanced techniques merge, ensuring that every batch of our ready-mix concrete meets and exceeds the demands of modern construction",
      image:
        "https://drive.google.com/uc?export=view&id=1xgZagB0R2nMuFnmiZhJRuuzTbs_4zHs2",
    },
    {
      id: "3",
      title: "Top Notch Quality",
      details:
        "Quality is not just a promise; it's a commitment etched in every cubic meter of ConMix concrete. Learn about our stringent quality control measures that guarantee top-notch durability and reliability. Elevate your projects with concrete that stands the test of time.",
      image:
        "https://drive.google.com/uc?export=view&id=1BDMWBTr0mDihnmlOHS_haEbkNNwxkUSw",
    },
    {
      id: "4",
      title: "Supplier",
      details:
        "Trust ConMix as your reliable partner in construction. As your dedicated supplier, we ensure a seamless and consistent source of ready-mix concrete for your projects. Experience the ConMix advantage—timely deliveries and unwavering quality that fuels your success.",
      image:
        "https://drive.google.com/uc?export=view&id=1cIQAApwjhGF9XtQU02FNfsU2iUpVmJ4_",
    },
    {
      id: "5",
      title: "Outsource Work",
      details:
        "Simplify your construction processes by entrusting ConMix with your concrete needs. Outsource the intricacies of concrete production and delivery to us, allowing you to focus on your core competencies. Discover how ConMix streamlines your construction journey with efficiency and cost-effectiveness.",
      image:
        "https://drive.google.com/uc?export=view&id=12HoLQNs81WvFVtSbDvFDFptL6MGC87Ae",
    },
    {
      id: "6",
      title: "Area of Product Application",
      details:
        "Explore the diverse applications of ConMix ready-mix concrete across a spectrum of construction projects. From residential builds to large-scale infrastructure, witness how our concrete seamlessly integrates, providing strength and reliability to every corner of your project. Your vision, our concrete",
      image:
        "https://drive.google.com/uc?export=view&id=1Fz7eD2I5oPFJXyZRCUowMGD4JICBCh6g",
    },
  ];
  var settings = {
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
    autoplaySpeed: 2000,
    pauseOnDotsHover: true,
    pauseOnHover: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
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
          autoplaySpeed: 2000,
          pauseOnDotsHover: true,
          pauseOnHover: true,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "9px",
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "5px",
          dots: false,
        },
      },
    ],
  };
  const [detailIndex, setDetailIndex] = useState(0);
  const [selectedButton, setSelectedButton] = useState(null);
  const buttonData = [
    { icon: faGears, index: 0, label: "Manufacturing" },
    { icon: faMicrochip, index: 1, label: "Technology" },
    { icon: faThumbsUp, index: 2, label: "Top notch quality" },
    { icon: faTruck, index: 3, label: "Supplier" },
    { icon: faHandshake, index: 4, label: "Outsource work" },
    { icon: faChartArea, index: 5, label: "Area of product application" },
  ];
  const handleButtonClick = (index) => {
    setSelectedButton(index);
    setDetailIndex(index);
  };
  return (
    <>
      <div className={s.productPage}>
        <div className={s.proudct1}>
          <span className={s.productBtn}>Proudct Usage</span>
          <h1 className={s.productHeading}>Our Products</h1>
        </div>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className={s.productcontainer}>
              <img
                src={image}
                alt={`Product ${index}`}
                className={s.productIMG}
                style={{
                  height: "100%",
                  maxWidth: "100%",
                  maxHeight: "100%",
                  display: "block",
                  margin: "0 auto",
                  borderRadius: "8px",
                }}
              ></img>
            </div>
          ))}
        </Slider>
      </div>
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
            {buttonData.map(({ icon, index, label }) => (
              <Button
                key={index}
                sx={selectedButton === index ? selectedBtnStyle : btnStyle}
                onClick={() => handleButtonClick(index)}
              >
                <FontAwesomeIcon
                  icon={icon}
                  size="2xl"
                  style={{ marginBottom: "8px", color: "#000" }}
                />
                <h5 style={{ margin: "0" }}>{label}</h5>
              </Button>
            ))}
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div
            style={{
              margin: "20px",
              padding: "20px",
              // border: "1px solid #ccc",
              borderRadius: "8px",
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
            <img
              src={drawerDetails[detailIndex].image}
              alt=""
              style={{ width: "100%", height: "310px", borderRadius: "8px" }}
            />
            <h6
              style={{
                marginTop: "10px",
                marginBottom: "5px",
                fontSize: "1.2em",
              }}
            >
              {drawerDetails[detailIndex].title}
            </h6>
            <p style={{ margin: "0", fontSize: "1em" }}>
              {drawerDetails[detailIndex].details}
            </p>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
