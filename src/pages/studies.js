import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
/*
    Accordion content below is based on the LinkedIn profile of Vasileios Mpletsos.
    Each accordion represents a key educational experience.
*/
const studiesData = [
    {
        title: "MSc in Advanced Computer Systems",
        institution: "Aristotle University of Thessaloniki - Polytechnic School",
        period: "2022 – Present",
        details: `Master of Science deep diving in advanced computer systems, focusing on machine learning, computer vision, and data science. The program includes a thesis on "Accelerated Stock Predictions with Field Programmable Gate Arrays (FPGA)".
        The thesis explores the use of FPGAs to enhance the performance of stock prediction algorithms, leveraging hardware acceleration for real-time data processing and analysis.`
    },
    {
        title: "BEng & MEng in Electrical and Computer Engineering",
        institution: "Aristotle University of Thessaloniki - Polytechnic School",
        period: "2014 – 2020",
        details: `Bachelor and Master of Engineering in Electrical and Computer Engineering. Focuced on electronics & computer engineering direction having extensive cources from systems, signal processing, and computer networks.
        The program provided a solid foundation in both hardware and software engineering, equipping me with the skills to design and implement complex systems.`
    }
];

const Studies = () => {
  return (
    <div>
        {studiesData.map((study, index) => (
            <Accordion key={index}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
            >
                <Typography variant="h6">{study.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="subtitle1">{study.institution}</Typography>
                <Typography variant="body2" color="textSecondary">{study.period}</Typography>
                <Typography variant="body1">{study.details}</Typography>
            </AccordionDetails>
            <AccordionActions>
                <Button size="small" color="primary">View Details</Button>
            </AccordionActions>
            </Accordion>
        ))}
    </div>
  );
}

export default Studies;