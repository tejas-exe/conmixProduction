import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { Formik, useFormikContext } from "formik";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";
import s from "./style.module.css";
import emailjs from "emailjs-com";

const Contacts = () => {
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
            <span className={s.contactBtn}>CONATCT US</span>
            <h1 className={s.getintouchTitle}>Get in Touch</h1>

            <Formik
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
                  // Prevent the default form submission

                  // Access the form element

                  // Your emailjs logic using sendForm
                  const serviceID = "service_vyr0aqd";
                  const templateID = "template_lxqfxgb";
                  const userID = "pBCrn4iPuccR7_7ZN";

                  // You can use 'values' directly instead of 'event.target'
                  await emailjs.send(serviceID, templateID, values, userID);

                  console.log("Email sent successfully!");
                  onSubmitProps.resetForm();
                } catch (error) {
                  console.error("Email sending failed:", error);
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
                    />
                    <Button
                      type="submit"
                      onClick={formik.handleSubmit}
                      variant="contained"
                      sx={{
                        padding: "auto",
                        width: "99%",
                        height: "50px",
                        backgroundColor: "#c70039",
                        marginBottom: "20px",
                      }}
                    >
                      Submit
                    </Button>
                  </Grid>
                );
              }}
            </Formik>
          </div>
        </Grid>
      </Grid>
      <Grid container className={s.visitUsGrid} pb={4}>
        <div className={s.visitusinnerDiv}>
          <div className={s.visitusHeader}>Visit Us, </div>
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.508317843421!2d72.88714477438897!3d21.0922912855951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be051403acad945%3A0xb976b1fb1bb3d61d!2sKrishna%20Concrete!5e0!3m2!1sen!2sin!4v1699354432361!5m2!1sen!2sin"
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
                  Krishna Concrete
                </Typography>
                <Typography variant="body" style={{ textAlign: "center" }}>
                  Songadh - Surat, Vanz, Sachin,
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
