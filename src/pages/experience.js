import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import styles from "@/styles/Experience.module.css";


const Experience = () => {
  return (
    <div className={styles.experienceContainer}>
      <div className={styles.experienceIntroductionContainer}>
        <h1 className={styles.experienceIntroductionTitle}>Work Experience</h1>
        <p className={styles.experienceIntroductionText}>
          With a background spanning public sector innovation, private enterprise tech, and data-driven research, I bring a rare mix of deep technical expertise and strategic thinking.
          Over the years, I’ve worked across domains such as cloud architecture (Azure), AI & data science, web development, and systems integration
          building solutions that are not only technically sound, but also aligned with real-world operational needs. My experience ranges from creating smart
          document intelligence systems for public administration, to leading data-intensive projects with strong focus on performance, scalability, and user experience.
          I understand how to turn complexity into clarity whether it's modernizing legacy systems, deploying full-stack applications, or using AI
          to derive actionable insights from messy real-world data. 
          <b> If you’re looking for someone who can connect the dots between technology, users, and business goals you’re in the right place.</b>
        </p>
      </div>
      <div className={styles.timelineContainer}>
        <Timeline position="alternate">
          {/* ECODEV */}
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
              color="text.primary"
            >
                May 2025 - Present
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary" variant='outlined' sx={{ padding: 0 }}>
                <Avatar alt="Ecodev" src="/ecodev.jpg" sx={{ width: 56, height: 56 }}/>
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
            sx={{ m: 'auto 0' }}>
              <Typography variant="h6" component="span">
                Ecodev
              </Typography>
              <Typography>Leading AI Software Engineer</Typography>
            </TimelineContent>
          </TimelineItem>
          
          {/* SATORI */}
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="body2"
              color="text.secondary"
            >
              Feb 2024 - Apr 2025
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{width: 2, height: 10}}/>
              <TimelineDot color="primary" variant='outlined' sx={{ padding: 0 }}>
                <Avatar alt="Satori" src="/satori.jpg" sx={{ width: 56, height: 56 }}/>
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent sx={{ m: 'auto 0' }}>
              <Typography variant="h6" component="span">
                Satori Analytics
              </Typography>
              <Typography>AI Software Engineer & Azure</Typography>
            </TimelineContent>
          </TimelineItem>
          
          {/* CERTH */}
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="body2"
              color="text.secondary"
            >
              Jan 2023 - Jan 2024
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{width: 2, height: 10}}/>
              <TimelineDot color="primary" variant='outlined' sx={{ padding: 0 }}>
                <Avatar alt="Certh" src="/certh.jpg" sx={{ width: 56, height: 56 }}/>
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent sx={{ m: 'auto 0' }}>
              <Typography variant="h6" component="span">
                Greek National Research Center
              </Typography>
              <Typography>AI Research Engineer</Typography>
            </TimelineContent>
          </TimelineItem>
          
          {/* KENOTOM */}
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="body2"
              color="text.secondary"
            >
              2022
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{width: 2, height: 10}}/>
              <TimelineDot color="primary" variant="outlined" sx={{ padding: 0 }}>
                <Avatar alt="Kenotom" src="/kenotom.jpg" sx={{ width: 56, height: 56 }}/>
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent sx={{ m: 'auto 0' }}>
              <Typography variant="h6" component="span">
                Kenotom
              </Typography>
              <Typography>Firmware Engineer</Typography>
            </TimelineContent>
          </TimelineItem>

          {/* FIELDSCALE */}
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="body2"
              color="text.secondary"
            >
              Nov 2020 - Mar 2021
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{width: 2, height: 10}}/>
              <TimelineDot color="secondary" variant="outlined" sx={{ padding: 0 }}>
                <Avatar alt="Fieldscale" src="/fieldscale.jpg" sx={{ width: 56, height: 56 }}/>
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent sx={{ m: 'auto 0' }}>
              <Typography variant="h6" component="span">
                Fieldscale
              </Typography>
              <Typography>Intern - Full Stack Engineer</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
}

export default Experience;