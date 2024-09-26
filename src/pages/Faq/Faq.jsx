import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PageLayoutContainer from "../../components/PageLayoutContainer/PageLayoutContainer";
import { Helmet } from "react-helmet";

export default function Faq() {
  const faqs = [
    {
      question: "What is the carbon footprint of a flight?",
      answer:
        "The carbon footprint of a flight refers to the amount of greenhouse gases, mainly carbon dioxide (CO₂), emitted into the atmosphere as a result of the flight. This calculation takes into account fuel consumption, the distance traveled, and other factors that contribute to environmental pollution.",
    },
    {
      question: "How can I reduce my carbon footprint when flying?",
      answer:
        "To reduce your carbon footprint, you can choose direct flights, fly with airlines that use more fuel-efficient aircraft, travel in economy class (where emissions are shared among more passengers), or offset your emissions by supporting carbon reduction projects.",
    },
    {
      question:
        "How does calculating my carbon footprint help the environment?",
      answer:
        "By knowing your carbon footprint, you can make more informed decisions when traveling. You can assess the environmental impact of your transportation choices and take steps to offset or reduce your emissions, contributing to mitigating global warming and the climate crisis.",
    },
  ];

  return (
    <PageLayoutContainer>
      <Helmet>
        <title>FFC - FAQ</title>
      </Helmet>
      <Box
        component="section"
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "50px",
          paddingTop: "30px",
        }}
      >
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          Flying Awareness Questioned
        </Typography>
        <Typography component="p" sx={{ textAlign: "center" }}>
          Understanding your carbon footprint helps you make more sustainable
          travel choices.
        </Typography>
        <Box className="faqContainer" maxWidth="sm">
          {faqs.map((faq, index) => (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h5">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </PageLayoutContainer>
  );
}
