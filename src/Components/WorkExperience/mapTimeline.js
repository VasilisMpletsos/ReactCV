import React from "react";
import Typography from '@material-ui/core/Typography';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { StyledTypography } from "./styles";

function mapTimeline(jobs){
    return(
        <Timeline align="alternate">
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color='primary'/>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <StyledTypography variant="h6" component="span">CERTH</StyledTypography>
                    <StyledTypography>AI Research Associate</StyledTypography>
                </TimelineContent>
            </TimelineItem>
            {
            jobs.map(job => {
                return(
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>
                            <StyledTypography variant="h6" component="span">{job.name}</StyledTypography>
                            <StyledTypography >{job.position}</StyledTypography>
                        </TimelineContent>
                    </TimelineItem>
                    )
                })
            }
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot/>
                </TimelineSeparator>
                <TimelineContent>
                    <StyledTypography variant="h6" component="span">University</StyledTypography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    )
}

export default mapTimeline;
