import styles from "@/styles/Experience.module.css";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const experiences = [
  {
    company: "Ecodev",
    role: "Lead AI Software Engineer",
    date: "May 2025 - Present",
    logo: "experience/ecodev.jpg",
    dotColor: "primary",
  },
  {
    company: "Satori Analytics",
    role: "AI Software Engineer & Azure",
    date: "Feb 2024 - Apr 2025",
    logo: "experience/satori.jpg",
    dotColor: "primary",
  },
  {
    company: "Greek National Research Center",
    role: "AI Research Engineer",
    date: "Jan 2023 - Jan 2024",
    logo: "experience/certh.jpg",
    dotColor: "primary",
  },
  {
    company: "Kenotom",
    role: "Firmware Engineer",
    date: "2022",
    logo: "experience/kenotom.jpg",
    dotColor: "primary",
  },
  {
    company: "Fieldscale",
    role: "Intern - Full Stack Engineer",
    date: "Nov 2020 - Mar 2021",
    logo: "experience/fieldscale.jpg",
    dotColor: "secondary",
  },
];

const Experience = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), { noSsr: true });

  return (
    <div className={styles.experienceContainer}>
      <div className={styles.experienceIntroductionContainer}>
        <h1 className={styles.experienceIntroductionTitle}>Work Experience</h1>
        <p className={styles.experienceIntroductionText}>
          With a background spanning from public sector innovation, private enterprise tech, and data-driven research, I bring a
          rare mix of deep technical expertise and strategic thinking. Over the years, I’ve worked across domains such as cloud
          architecture (Azure), AI & data science, web development, and systems integration building solutions that are not only
          technically sound awesome, but are also aligned with real-world operational needs. My experience ranges from creating
          smart document intelligence systems for public administration, to leading data-intensive projects with strong focus on
          performance, scalability, and user experience. I understand how to turn complexity into clarity whether it's modernizing
          legacy systems, deploying full-stack applications, or using AI to derive actionable insights from messy real-world data.
          <b>
            {" "}
            If you’re looking for someone who can connect the dots between technology, users, and business goals you’re in the
            right place.
          </b>
        </p>
      </div>
      <div className={styles.timelineContainer}>
        <Timeline position={isMobile ? "right" : "alternate"}>
          {experiences.map((exp, index) => (
            <TimelineItem key={exp.company}>
              {!isMobile && (
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  align={index === 0 ? "right" : undefined}
                  variant="body2"
                  color={index === 0 ? "text.primary" : "text.secondary"}
                >
                  {exp.date}
                </TimelineOppositeContent>
              )}
              <TimelineSeparator>
                {index === 0 && <TimelineConnector />}
                {index !== 0 && <TimelineConnector sx={{ width: 2, height: 10 }} />}
                <TimelineDot color={exp.dotColor} variant="outlined" sx={{ padding: 0 }}>
                  <Avatar
                    alt={exp.company}
                    src={exp.logo}
                    sx={{ width: isMobile ? 40 : 56, height: isMobile ? 40 : 56 }}
                  />
                </TimelineDot>
                {index === 0 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent sx={{ m: "auto 0" }}>
                {isMobile && (
                  <Typography variant="body2" color={index === 0 ? "text.primary" : "text.secondary"} sx={{ mb: 0.5 }}>
                    {exp.date}
                  </Typography>
                )}
                <Typography variant={isMobile ? "subtitle1" : "h6"} component="span">
                  {exp.company}
                </Typography>
                <Typography>{exp.role}</Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </div>
  );
};

export default Experience;
