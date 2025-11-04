import styles from "@/styles/ProgrammingLanguages.module.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
/*
    Accordion content below is based on the LinkedIn profile of Vasileios Mpletsos.
    Each accordion represents a key educational experience.
*/
const studiesData = [
  {
    title: "MSc in Advanced Computer Systems",
    institution: "Aristotle University of Thessaloniki - Polytechnic School",
    period: "2022 – Present",
    details: `Master of Science deep diving in advanced computer systems, focusing on machine learning, computer vision, and data science.
        I completed the program with my diploma thesis on "Accelerated Options Predictions with Field Programmable Gate Arrays (FPGA)".
        The thesis explores the use of FPGAs to enhance the performance of Black-Scholes prediction algorithm, leveraging hardware acceleration for real-time data processing and analysis
        and comparing the FPGA with various GPUs and classical CPU implementation.`,
    thesis_url: "https://drive.google.com/file/d/1tPqz4M5raiGxp5-V16UTT-Dtgl-Ru8uJ/view?usp=sharing",
  },
  {
    title: "BEng & MEng in Electrical and Computer Engineering",
    institution: "Aristotle University of Thessaloniki - Polytechnic School",
    period: "2014 – 2020",
    details: `Bachelor and Master of Engineering in Electrical and Computer Engineering. Focused on electronics & computer engineering direction having extensive courses from systems, signal processing, and computer networks.
        The program provided a solid foundation in both hardware and software engineering, equipping me with the skills to design and implement complex systems.
        My diploma thesis here was "Microwave Remote Sensing at 77GHz" which involved designing & simulating a 77GHz radar antenna for automotive remote sensing applications.`,
    thesis_url: "https://ikee.lib.auth.gr/record/328732/?ln=en",
  },
];

const Studies = () => {
  return (
    <div style={{ maxWidth: 1300, margin: "0 auto", padding: "2rem 1rem" }}>
      <h1 className={styles.programmingLanguagesIntroductionTitle} style={{ paddingBottom: "1rem" }}>
        Studies & Education
      </h1>
      {studiesData.map((study, index) => (
        <Accordion key={index} sx={{ mb: 2, borderRadius: 2, boxShadow: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index}-content`} id={`panel${index}-header`}>
            <Typography variant='h6'>{study.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant='subtitle1' color='primary'>
              {study.institution}
            </Typography>
            <Typography variant='body2' color='text.secondary' sx={{ mb: 1 }}>
              {study.period}
            </Typography>
            <Typography variant='body1'>{study.details}</Typography>
          </AccordionDetails>
          <AccordionActions>
            <Button size='small' color='primary' href={study.thesis_url} target='_blank' rel='noopener noreferrer'>
              View Thesis
            </Button>
          </AccordionActions>
        </Accordion>
      ))}
      <div style={{ textAlign: "center", marginTop: 24 }}>
        <a
          id='cy-effective-orcid-url'
          className='underline'
          href='https://orcid.org/0009-0008-8887-543X'
          target='_blank'
          rel='me noopener noreferrer'
          style={{
            verticalAlign: "top",
            display: "inline-flex",
            alignItems: "center",
            textDecoration: "none",
            color: "#3f51b5",
            fontWeight: 500,
          }}
        >
          <img
            src='https://orcid.org/sites/default/files/images/orcid_16x16.png'
            style={{ width: 16, height: 16, marginRight: 6 }}
            alt='ORCID iD icon'
          />
          https://orcid.org/0009-0008-8887-543X
        </a>
      </div>
    </div>
  );
};

export default Studies;
