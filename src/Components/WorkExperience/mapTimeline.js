import React from "react";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

function mapTimeline(jobs){
    return(
        <Timeline>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color='primary'/>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>Army</TimelineContent>
            </TimelineItem>
            {
            jobs.map(job => {
                return(
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>{job.name}</TimelineContent>
                    </TimelineItem>
                    )
                })
            }
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot/>
                </TimelineSeparator>
                <TimelineContent>University</TimelineContent>
            </TimelineItem>
        </Timeline>
    )
}

export default mapTimeline;
