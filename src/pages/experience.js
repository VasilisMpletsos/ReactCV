import styles from "@/styles/Experience.module.css";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

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
        <Timeline position='alternate'>
          {/* K3Y */}
          <TimelineItem>
            <TimelineOppositeContent sx={{ m: "auto 0" }} align='right' variant='body2' color='text.primary'>
              August 2026 - Present
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color='primary' variant='outlined' sx={{ padding: 0 }}>
                <Avatar alt='K3Y' src='experience/k3y.jpg' sx={{ width: 56, height: 56 }} />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ m: "auto 0" }}>
              <Link href='https://k3ylabs.com/' underline='hover' color='inherit' target='_blank'>
                <Typography variant='h6' component='span' sx={{ fontWeight: "bold", color: "##9600D0" }}>
                  K3Y
                </Typography>
              </Link>
              <Typography>Senior AI Research Engineer</Typography>
            </TimelineContent>
          </TimelineItem>

          {/* ECODEV */}
          <TimelineItem>
            <TimelineOppositeContent sx={{ m: "auto 0" }} align='right' variant='body2' color='text.primary'>
              May 2025 - July 2026
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ width: 2, height: 10 }} />
              <TimelineDot color='primary' variant='outlined' sx={{ padding: 0 }}>
                <Avatar alt='Ecodev' src='experience/ecodev.jpg' sx={{ width: 56, height: 56 }} />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent sx={{ m: "auto 0" }}>
              <Link href='https://ecodev.gr/en/ecodev-english/' underline='hover' color='inherit' target='_blank'>
                <Typography variant='h6' component='span'>
                  Ecodev
                </Typography>
              </Link>
              <Typography>Leading AI Software Engineer</Typography>
            </TimelineContent>
          </TimelineItem>

          {/* SATORI */}
          <TimelineItem>
            <TimelineOppositeContent sx={{ m: "auto 0" }} variant='body2' color='text.secondary'>
              Feb 2024 - Apr 2025
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ width: 2, height: 10 }} />
              <TimelineDot color='primary' variant='outlined' sx={{ padding: 0 }}>
                <Avatar alt='Satori' src='experience/satori.jpg' sx={{ width: 56, height: 56 }} />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent sx={{ m: "auto 0" }}>
              <Link href='https://satorianalytics.com/' underline='hover' color='inherit' target='_blank'>
                <Typography variant='h6' component='span'>
                  Satori Analytics
                </Typography>
              </Link>
              <Typography>AI Software Engineer & Azure</Typography>
            </TimelineContent>
          </TimelineItem>

          {/* CERTH */}
          <TimelineItem>
            <TimelineOppositeContent sx={{ m: "auto 0" }} variant='body2' color='text.secondary'>
              Jan 2023 - Jan 2024
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ width: 2, height: 10 }} />
              <TimelineDot color='primary' variant='outlined' sx={{ padding: 0 }}>
                <Avatar alt='Certh' src='experience/certh.jpg' sx={{ width: 56, height: 56 }} />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent sx={{ m: "auto 0" }}>
              <Link href='https://www.certh.gr/root.en.aspx' underline='hover' color='inherit' target='_blank'>
                <Typography variant='h6' component='span'>
                  Greek National Research Center
                </Typography>
              </Link>
              <Typography>AI Research Engineer</Typography>
            </TimelineContent>
          </TimelineItem>

          {/* KENOTOM */}
          <TimelineItem>
            <TimelineOppositeContent sx={{ m: "auto 0" }} variant='body2' color='text.secondary'>
              2022
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ width: 2, height: 10 }} />
              <TimelineDot color='primary' variant='outlined' sx={{ padding: 0 }}>
                <Avatar alt='Kenotom' src='experience/kenotom.jpg' sx={{ width: 56, height: 56 }} />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent sx={{ m: "auto 0" }}>
              <Link href='https://www.kenotom.com/' underline='hover' color='inherit' target='_blank'>
                <Typography variant='h6' component='span'>
                  Kenotom
                </Typography>
              </Link>
              <Typography>Firmware Engineer</Typography>
            </TimelineContent>
          </TimelineItem>

          {/* FIELDSCALE */}
          <TimelineItem>
            <TimelineOppositeContent sx={{ m: "auto 0" }} variant='body2' color='text.secondary'>
              Nov 2020 - Mar 2021
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ width: 2, height: 10 }} />
              <TimelineDot color='secondary' variant='outlined' sx={{ padding: 0 }}>
                <Avatar alt='Fieldscale' src='experience/fieldscale.jpg' sx={{ width: 56, height: 56 }} />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent sx={{ m: "auto 0" }}>
              <Link href='https://fieldscale.com/' underline='hover' color='inherit' target='_blank'>
                <Typography variant='h6' component='span'>
                  Fieldscale
                </Typography>
              </Link>
              <Typography>Intern - Full Stack Engineer</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};

export default Experience;
