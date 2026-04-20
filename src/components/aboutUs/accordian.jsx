import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  overflow: "hidden",
  border: "1px solid rgba(17, 24, 39, 0.08)",
  borderRadius: 22,
  background: "rgba(255, 255, 255, 0.75)",
  boxShadow: "0 18px 32px rgba(26, 26, 26, 0.06)",
  "&:not(:last-child)": {
    marginBottom: 14,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  padding: "4px 8px",
  background:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 0.05)"
      : "linear-gradient(135deg, rgba(255, 245, 224, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-expandIconWrapper": {
    color: "#b31640",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
  "& .MuiTypography-root": {
    fontFamily: '"Outfit", "Poppins", sans-serif',
    fontWeight: 700,
    color: "#1a1a1a",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(0, 2.5, 2.5),
  borderTop: "1px solid rgba(17, 24, 39, 0.06)",
  color: "rgba(26, 26, 26, 0.74)",
  lineHeight: 1.8,
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Our Mission</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            To evolve into a highly effective and streamlined organization that
            fosters a culture empowering staff members to not only forge but
            also cultivate enduring and meaningful connections with clients,
            thereby fostering sustained relationships.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Our Vision</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            To be the most reliable supplier of choice, consistently generating
            new growth opportunities.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Our Value</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We value the relationships we build with our clients, ensuring open
            communication and reliability in every interaction. Join us in
            laying the foundations of success with a company that values
            excellence, community, and the spirit of Surat.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
