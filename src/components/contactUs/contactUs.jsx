import { Button, Grid, Paper, Typography } from "@mui/material";

import { Formik } from "formik";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";
import s from "./style.module.css";
import emailjs from "emailjs-com";
import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Contacts = () => {
  const [loading, setLoading] = useState(false);
  const validationSchema = Yup.object({
    Name: Yup.string().required("Required!"),
    phoneNumber: Yup.string().required("Required!"),
    email: Yup.string()
      .email("Please enter a valid email address.")
      .required("Required!"),
    grade: Yup.string().required("Required!"),
    pumpRequired: Yup.string().required("Required!"),
    quantityApprox: Yup.string().required("Required!"),
    message: Yup.string().required("Required!"),
  });
  const textfield = {
    padding: "1.2rem 1.2rem",
    backgroundColor: "rgb(245,245,245)",
    width: "98%",
    marginBottom: "2%",
    border: "0px solid",
  };

  return (
    <div className={s.contactPage}>
      <Grid
        container
        mb={4}
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 8, md: 10 }}
        direction={{ xs: "column", lg: "row", md: "row" }}
      >
        <Grid xs={12} sm={12} lg={12}>
          <div className={s.contact1}>
            <span
              className={s.contactBtn}
              style={{ margin: "50px 13% auto 18%" }}
            >
              Contact us
            </span>
            <h1
              className={s.getintouchTitle}
              style={{ margin: "50px 13% auto 18%" }}
            >
              Get in Touch
            </h1>
            <div
              style={{
                backgroundColor: "#fff5e0",
                width: "80%",
                maxWidth: "400px",
                marginLeft: "50px",
                padding: "20px",
                borderRadius: "20px",
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
                margin: "50px 13% auto 18%",
              }}
            >
              <div
                style={{
                  fontSize: "36px",
                  fontWeight: "bold",
                  color: "#c70039",
                  marginBottom: "20px",
                  textTransform: "uppercase",
                  letterSpacing: "3px",
                  textAlign: "center",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                Conmix
              </div>
              <div
                style={{
                  marginBottom: "15px",
                  textAlign: "center",
                  color: "#555",
                  fontSize: "13px",
                }}
              >
                <EmailIcon
                  fontSize="small"
                  style={{ color: "#c70039", marginRight: "10px" }}
                />
                somnathrmc.conmix@gmail.com
              </div>
              <div style={{ textAlign: "center", fontSize: "13px" }}>
                <div style={{ marginBottom: "12px", color: "#555" }}>
                  <PhoneIcon
                    fontSize="small"
                    style={{ color: "#c70039", marginRight: "10px" }}
                  />
                  +91 9824 881 990
                </div>
                <div style={{ marginBottom: "12px", color: "#555" }}>
                  <PhoneIcon
                    fontSize="small"
                    style={{ color: "#c70039", marginRight: "10px" }}
                  />
                  +91 9979 869 771
                </div>
                <div style={{ color: "#555" }}>
                  <PhoneIcon
                    fontSize="small"
                    style={{ color: "#c70039", marginRight: "10px" }}
                  />
                  +91 9825 111 281
                </div>
              </div>
            </div>

            <div style={{ margin: "50px 13% auto 18%" }}>
              <Formik
                // style={{ margin: "50px 13% auto 18%" }}
                initialValues={{
                  Name: "",
                  email: "",
                  phoneNumber: "",
                  quantityApprox: "",
                  grade: "",
                  pumpRequired: "",
                  message: "",
                }}
                validationSchema={validationSchema}
                onSubmit={async (values, onSubmitProps) => {
                  console.log(values, onSubmitProps);
                  try {
                    setLoading(true);
                    // Prevent the default form submission

                    // Access the form element

                    // Your emailjs logic using sendForm
                    //developers details
                    // const serviceID = "service_vyr0aqd";
                    // const templateID = "template_lxqfxgb";
                    // const userID = "pBCrn4iPuccR7_7ZN";

                    //client details
                    const serviceID = "service_7gxeink";
                    const templateID = "template_hegzqlm";
                    const userID = "GmtaH6uTPELhi-4y5";

                    // You can use 'values' directly instead of 'event.target'
                    await emailjs.send(serviceID, templateID, values, userID);

                    console.log("Email sent successfully!");
                    setLoading(false);
                    onSubmitProps.resetForm();
                  } catch (error) {
                    console.error("Email sending failed:", error);
                    setLoading(false);
                  }
                }}
              >
                {(formik) => {
                  return (
                    <Grid container>
                      <Grid xs={12} sm={6} lg={6}>
                        <Form.Control
                          type="text"
                          name="Name"
                          value={formik.values.Name}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          placeholder="Your Name"
                          style={{ ...textfield }}
                        />
                        <Form.Control
                          type="number"
                          name="phoneNumber"
                          value={formik.values.phoneNumber}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          placeholder="Phone Number"
                          style={textfield}
                        />
                        <Form.Select
                          aria-label="Grade"
                          name="grade"
                          value={formik.values.grade}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          style={{ ...textfield, color: "#6c757d" }}
                        >
                          <option>Grade</option>
                          <option value="Grade 10">Grade 10</option>
                          <option value="Grade 15">Grade 15</option>
                          <option value="Grade 20">Grade 20</option>
                          <option value="Grade 25">Grade 25</option>
                          <option value="Grade 30">Grade 30</option>
                          <option value="Grade 35">Grade 35</option>
                          <option value="Grade 40">Grade 40</option>
                          <option value="All">All</option>
                        </Form.Select>
                      </Grid>
                      <Grid xs={12} sm={6} lg={6}>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          placeholder="Email Address"
                          style={textfield}
                        />
                        <Form.Control
                          type="text"
                          name="quantityApprox"
                          value={formik.values.quantityApprox}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          placeholder="Quantity Approx"
                          style={textfield}
                        />
                        <Form.Select
                          aria-label="Pump Required"
                          name="pumpRequired"
                          value={formik.values.pumpRequired}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          style={{ ...textfield, color: "#6c757d" }}
                        >
                          <option>Pump Required</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </Form.Select>
                      </Grid>
                      <Form.Control
                        as="textarea"
                        name="message"
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Write Message"
                        rows={4}
                        style={{ ...textfield, width: "99%" }}
                      />{" "}
                      <Button
                        type="submit"
                        onClick={formik.handleSubmit}
                        variant="contained"
                        style={{ position: "relative" }}
                        sx={{
                          padding: "auto",
                          width: "99%",
                          height: "50px",
                          backgroundColor: "#c70039",
                          marginBottom: "20px",
                          "&:hover": {
                            backgroundColor: "#c70039",
                          },
                        }}
                      >
                        {loading ? (
                          <CircularProgress
                            size={24}
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              marginTop: -12,
                              marginLeft: -12,
                            }}
                          />
                        ) : (
                          <>Submit</>
                        )}
                      </Button>
                    </Grid>
                  );
                }}
              </Formik>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container className={s.visitUsGrid} pb={4}>
        <div className={s.visitusinnerDiv}>
          <div className={s.visitusHeader}>Visit us,</div>
          <span>
            Embark on a journey with us! Visit us at our welcoming space, where
            you can explore curated type of business offerings. Our dedicated
            team is ready to ensure your visit is memorable. Come, and
            experience it for yourself!
          </span>
        </div>
        <Grid xs={12} sm={12} lg={12} mb={2}>
          <Paper
            elevation={3}
            sx={{ padding: "20px  ", width: "100%", height: { lg: "250px" } }}
          >
            <Grid container sx={{ height: "100%" }}>
              <Grid
                xs={12}
                sm={12}
                lg={3}
                className={s.addressGrid}
                sx={{
                  flexDirection: "column",
                }}
              >
                <Typography variant="h6" className={s.mapTitle}>
                  Conmix: Somnath Rmc & Cement Products
                </Typography>
                <Typography variant="body" style={{ textAlign: "center" }}>
                  Ichchhapor, Asarma,
                  <br /> Gujarat 394510
                </Typography>
              </Grid>
              <Grid xs={12} sm={12} lg={9}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.7318149219404!2d72.73382327439217!3d21.202810081779504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d4bda98762f%3A0x14d7295d1e8d9bda!2sConmix%3A%20Somnath%20Rmc%20%26%20Cement%20Products!5e0!3m2!1sen!2sin!4v1699354682400!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: "2px solid #CCCCCC" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid xs={12} sm={12} lg={12} container sx={{ height: "100%" }}>
          <Paper
            elevation={3}
            sx={{ padding: "20px ", width: "100%", height: { lg: "250px" } }}
          >
            <Grid container sx={{ height: "100%" }}>
              <Grid item xs={12} sm={12} lg={9}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3722.5225642849246!2d72.88492227525836!3d21.091722780573374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDA1JzMwLjIiTiA3MsKwNTMnMTUuMCJF!5e0!3m2!1sen!2sin!4v1702286284728!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: "2px solid #CCCCCC" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                lg={3}
                className={s.addressGrid}
                sx={{
                  flexDirection: "column",
                }}
              >
                <Typography variant="h6" className={s.mapTitle}>
                  Conmix: Somnath Rmc & Cement Products(Plant-2)
                </Typography>
                <Typography variant="body" style={{ textAlign: "center" }}>
                  Pardi Kande, Sachin,
                  <br /> Surat, Gujarat 394235
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export default Contacts;
