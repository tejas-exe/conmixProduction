import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import s from "./style.module.css";
import React from "react";
const Services = () => {
  return (
    <div className={s.servicesPage}>
      <Grid
        container
        mb={4}
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 8, md: 10 }}
        direction={{ xs: "column", lg: "row", md: "row" }}
      >
        <Grid xs={12} sm={12} lg={12}>
          <div className={s.services1}>
            <span className={s.servicesBtn}>Services</span>
            <h1 className={s.ourCustomersTitle}>OnGoing Projects</h1>
            <Grid
              container
              className={s.ongoingitems}
              xs={12}
              sm={12}
              lg={12}
              direction={"row"}
              textAlign={"left"}
            >
              {[
                {
                  ongoingprojectTitle: "Vaishnodevi Kingsley",
                  ongoingprojectImg:
                    "/g1.jpeg",
                  altText: "Vaishnodevi group",
                  link: "https://www.vaishnodevirealty.com/kingsley",
                },
                {
                  ongoingprojectTitle: "DMD Aura",
                  ongoingprojectImg:
                    "/g2.jpeg",
                  altText: "DMD Developers",
                  link: "https://www.dmddevelopers.com/project/dmd-aura",
                },
                {
                  ongoingprojectTitle: "Sangini Group Sunidhi Spinning",
                  ongoingprojectImg:
                    "/g3.jpeg",
                  altText: "Sangini Group",
                  link: "https://www.sanginigroup.com/",
                },
                {
                  ongoingprojectTitle: "Rajhans Zesto",
                  ongoingprojectImg:
                    "/g4.jpeg",
                  altText: "Rajhans Desai-jain Group",
                  link: "https://rajhansrealty.co.in/zesto.aspx",
                },
                {
                  ongoingprojectTitle: "Santvan Newon",
                  ongoingprojectImg:
                    "/g5.jpeg",
                  altText: "Santvan",
                  link: "https://www.santvangroup.com/",
                },
              ].map((obj, index) => (
                <Grid p={1} item key={index}>
                  <Card
                    sx={{ maxWidth: 300, minHeight: 250 }}
                    style={{
                      width: 200, // Set your initial width
                      transition: "transform 0.3s", // Add transition for a smooth effect
                      "&:hover": {
                        transform: "scale(1.1)", // Scale to 110% on hover
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      alt={obj.altText}
                      height="140"
                      image={obj.ongoingprojectImg}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        component="div"
                        style={{ fontWeight: "bold" }}
                      >
                        {obj.ongoingprojectTitle}
                      </Typography>
                      {/* <Typography variant="body2" color="text.secondary">
   {ongoingprojectDesc}
   </Typography> */}
                    </CardContent>
                    <CardActions>
                      <Button size="small">
                        <a
                          target="_blank" // Open the link in a new window
                          rel="noopener noreferrer" // Recommended for security reasons
                          href={obj.link}
                          style={{
                            color: "#343b96",
                            textDecoration: "none", // Remove underline, you can adjust as needed
                            textTransform: "none", // Preserve the original case of the text
                          }}
                        >
                          Know More
                        </a>
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </Grid>
      </Grid>
      <Grid container className={s.ourCustomers} pb={4} alignItems={"center"}>
        <h1 className={s.ourCustomersTitle}>Our Valued Customers</h1>
        <Grid container className={s.ourCustomerslogo} direction={"row"}>
          {[
            {
              ourcustomerTitle: "Anjani Group",
              ourcustomerImg:
                "/c1.jpeg",
              altText: "Vaishnodevi group",
              desc: "(Contact Person: Jayanti Bhai Aklera)",
            },
            {
              ourcustomerTitle: "SNS Group",
              ourcustomerImg:
                "/c2.jpeg",
              altText: "SNS Group",
              desc: "(Contact Person: Harshil Bhai | Bhavesh Bhai)",
            },
            {
              ourcustomerTitle: "Raghuvir Group",
              ourcustomerImg:
                "/c3.jpeg",
              altText: "Raghuvir Group",
              desc: " (Contact Person: Shivlal Bhai | Asodaria Bhai)",
            },
            {
              ourcustomerTitle: "Vasupujya Group",
              ourcustomerImg:
                "/c4.jpeg",
              altText: "Vasupujya Group",
              desc: "(Contact Person: Mafat Bhai Siroya)",
            },
            {
              ourcustomerTitle: "Imperial developers",
              ourcustomerImg:
                "/c5.jpeg",
              altText: "Santvan",
              desc: "(Contact Person: Dipen Bhai | Kamlesh Bhai)",
            },
          ].map((obj, i) => (
            <Grid
              item
              key={i}
              p={3}
              style={{ display: "block", textAlign: "center" }}
            >
              <img
                src={obj.ourcustomerImg}
                style={{ height: "200px", width: "200px" }}
                alt="Image Description"
              />
              <Typography variant="h6">{obj.ourcustomerTitle}</Typography>

            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};
export default Services;
