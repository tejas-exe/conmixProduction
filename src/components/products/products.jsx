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
  color: "black",
};
const selectedBtnStyle = {
  ...btnStyle,
  backgroundColor: "darkgrey",
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
    "https://images.unsplash.com/photo-1508522750368-d7e3edeba646?auto=format&fit=crop&q=80&w=1469&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1508522750368-d7e3edeba646?auto=format&fit=crop&q=80&w=1469&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1508522750368-d7e3edeba646?auto=format&fit=crop&q=80&w=1469&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1508522750368-d7e3edeba646?auto=format&fit=crop&q=80&w=1469&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1508522750368-d7e3edeba646?auto=format&fit=crop&q=80&w=1469&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  const drawerDetails = [
    {
      id: "1",
      title: "title one",
      details: "details lorem lorem lorem",
      image:
        "https://hexagon.com/-/media/project/one-web/master-site/geo/industries/blockbuster-landing-page/hover-cards/hxgn-blockbuster-hovercard-1.jpg?h=704&iar=0&w=800&hash=40B07BCA35E4189F10CB0DB0185D6E0E",
    },
    {
      id: "2",
      title: "title two",
      details: "details lorem lorem lorem two",
      image:
        "https://www.letsbuild.com/wp-content/uploads/2023/07/construction-site-work-1-1024x647.jpg",
    },
    {
      id: "3",
      title: "title one",
      details: "details lorem lorem lorem",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYLtsMMFPokxJG8YV4X4WplPL7G082a0-eWmhFDvobXtpttWsSxrvXQXyggXsGZ3b7Vu8&usqp=CAU",
    },
    {
      id: "4",
      title: "title one",
      details: "details lorem lorem lorem",
      image:
        "https://www.livemint.com/lm-img/img/2023/03/27/600x338/construction_1679940764821_1679940765048_1679940765048.JPG",
    },
    {
      id: "5",
      title: "title one",
      details: "details lorem lorem lorem",
      image:
        "https://cdn-ckgki.nitrocdn.com/eIjtlqSrzAKXFrsHSjkfXOrmttOUeOlc/assets/images/optimized/rev-b7f4dc7/esub.com/wp-content/uploads/2020/05/shutterstock_167443256-e1590519219848.jpg",
    },
    {
      id: "6",
      title: "title one",
      details: "details lorem lorem lorem",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTFt5EoPJ0VoO0-WG9uwbFgVNpDL0x9EyWWw&usqp=CAU",
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
    dots: true,
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
          dots: true,
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
          slidesToShow: 0.25,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 0.25,
          slidesToScroll: 1,
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
                  maxWidth:
                    "100%" /* Ensure the image doesn't exceed the container's width */,
                  maxHeight:
                    "100%" /* Ensure the image doesn't exceed the container's height */,
                  display:
                    "block" /* Remove any extra spacing or alignment issues */,
                  margin:
                    "0 auto" /* Center the image horizontally within the div */, // Set the width of the image to 100%
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
                  style={{ marginBottom: "8px" }}
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
              style={{ width: "100%", height: "300px", borderRadius: "8px" }}
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
