import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";
const TimeLineForm = () => {
    return (
        <TimelineItem>
        <TimelineSeparator>
          <TimelineDot>
            1
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <h4>Etapa</h4>
            <h3>Avaliar</h3>
        </TimelineContent>
      </TimelineItem>
    )
}

export default TimeLineForm;