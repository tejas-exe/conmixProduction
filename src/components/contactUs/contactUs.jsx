import React, { useState } from "react";
import { Button, Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { Formik } from "formik";
import Form from "react-bootstrap/Form";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import s from "./style.module.css";

const contactNumbers = [
  "+91 9824 881 990",
  "+91 9979 869 771",
  "+91 9825 111 281",
];

const locationCards = [
  {
    title: "Conmix: Somnath Rmc & Cement Products",
    address: ["Ichchhapor, Asarma,", "Gujarat 394510"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.7318149219404!2d72.73382327439217!3d21.202810081779504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d4bda98762f%3A0x14d7295d1e8d9bda!2sConmix%3A%20Somnath%20Rmc%20%26%20Cement%20Products!5e0!3m2!1sen!2sin!4v1699354682400!5m2!1sen!2sin",
  },
  {
    title: "Conmix: Somnath Rmc & Cement Products (Plant-2)",
    address: ["Pardi Kande, Sachin,", "Surat, Gujarat 394235"],
    map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3722.5225642849246!2d72.88492227525836!3d21.091722780573374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDA1JzMwLjIiTiA3MsKwNTMnMTUuMCJF!5e0!3m2!1sen!2sin!4v1702286284728!5m2!1sen!2sin",
  },
];

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

  return (
    <section className={s.contactPage}>
      <div className={s.glowTop} />
      <div className={s.glowBottom} />

      <div className={s.contactShell}>
        <Grid container spacing={{ xs: 4, md: 5 }} alignItems="stretch">
          <Grid item xs={12} lg={5}>
            <div className={s.contactIntro}>
              <span className={s.contactBtn}>Contact Us</span>
              <h1 className={s.getintouchTitle}>Get In Touch</h1>
              <p className={s.contactLead}>
                Tell us about your project requirements and our team will help
                you plan the right concrete grade, quantity, and delivery
                support for the site.
              </p>

              <div className={s.contactCard}>
                <div className={s.brandMark}>Conmix</div>

                <div className={s.contactInfoRow}>
                  <span className={s.infoIcon}>
                    <EmailIcon fontSize="small" />
                  </span>
                  <span>somnathrmc.conmix@gmail.com</span>
                </div>

                <div className={s.phoneList}>
                  {contactNumbers.map((number) => (
                    <div key={number} className={s.contactInfoRow}>
                      <span className={s.infoIcon}>
                        <PhoneIcon fontSize="small" />
                      </span>
                      <span>{number}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} lg={7}>
            <div className={s.formShell}>
              <div className={s.formHeader}>
                <span className={s.formTag}>Project inquiry</span>
                <h2>Share the details and we will get back quickly</h2>
              </div>

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
                  try {
                    setLoading(true);

                    const serviceID = "service_7gxeink";
                    const templateID = "template_hegzqlm";
                    const userID = "GmtaH6uTPELhi-4y5";

                    await emailjs.send(serviceID, templateID, values, userID);

                    setLoading(false);
                    onSubmitProps.resetForm();
                  } catch (error) {
                    console.error("Email sending failed:", error);
                    setLoading(false);
                  }
                }}
              >
                {(formik) => (
                  <div className={s.formGrid}>
                    <div className={s.formTwoCol}>
                      <Form.Control
                        type="text"
                        name="Name"
                        value={formik.values.Name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Your Name"
                        className={s.formField}
                      />
                      <Form.Control
                        type="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Email Address"
                        className={s.formField}
                      />
                    </div>

                    <div className={s.formTwoCol}>
                      <Form.Control
                        type="text"
                        name="phoneNumber"
                        value={formik.values.phoneNumber}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Phone Number"
                        className={s.formField}
                      />
                      <Form.Control
                        type="text"
                        name="quantityApprox"
                        value={formik.values.quantityApprox}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Quantity Approx"
                        className={s.formField}
                      />
                    </div>

                    <div className={s.formTwoCol}>
                      <Form.Select
                        aria-label="Grade"
                        name="grade"
                        value={formik.values.grade}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={s.formField}
                      >
                        <option value="">Grade</option>
                        <option value="Grade 10">Grade 10</option>
                        <option value="Grade 15">Grade 15</option>
                        <option value="Grade 20">Grade 20</option>
                        <option value="Grade 25">Grade 25</option>
                        <option value="Grade 30">Grade 30</option>
                        <option value="Grade 35">Grade 35</option>
                        <option value="Grade 40">Grade 40</option>
                        <option value="All">All</option>
                      </Form.Select>

                      <Form.Select
                        aria-label="Pump Required"
                        name="pumpRequired"
                        value={formik.values.pumpRequired}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={s.formField}
                      >
                        <option value="">Pump Required</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </Form.Select>
                    </div>

                    <Form.Control
                      as="textarea"
                      name="message"
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Write Message"
                      rows={5}
                      className={`${s.formField} ${s.messageField}`}
                    />

                    <Button
                      type="submit"
                      onClick={formik.handleSubmit}
                      variant="contained"
                      className={s.submitButton}
                    >
                      {loading ? <CircularProgress size={24} color="inherit" /> : "Submit Inquiry"}
                    </Button>
                  </div>
                )}
              </Formik>
            </div>
          </Grid>
        </Grid>
      </div>

      <div className={s.visitUsGrid}>
        <div className={s.visitHeader}>
          <span className={s.contactBtn}>Visit Us</span>
          <h2 className={s.visitusHeader}>Two locations, one dependable concrete network</h2>
          <p className={s.visitLead}>
            Visit our operating locations and connect directly with the team
            behind Conmix production, dispatch, and on-ground project support.
          </p>
        </div>

        <div className={s.locationList}>
          {locationCards.map((location) => (
            <div key={location.title} className={s.locationCard}>
              <div className={s.mapFrame}>
                <iframe
                  src={location.map}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={location.title}
                />
              </div>

              <div className={s.addressPanel}>
                <h3 className={s.mapTitle}>{location.title}</h3>
                <p className={s.addressText}>
                  {location.address[0]}
                  <br />
                  {location.address[1]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contacts;
