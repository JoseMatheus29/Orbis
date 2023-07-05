import Timeline from '@mui/lab/Timeline';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import Typography from '@mui/material/Typography';


interface IsTool {
  title:  string ;
  description:  string;
  number:  number;
  variant: string;
}


const TimeLineOrbis = ({title, description, number, variant}: IsTool )  => {
  var cor;
  var backgroundColor;
  if(variant == '3'){cor = "var(--purple_200)"; backgroundColor = "var(--purple_100)" }
  if(variant == '4'){cor = "var(--yellow_200)"; backgroundColor = "var(--yellow_100)"}
  if(variant == '5'){cor = "var(--blue_200)"; backgroundColor = "var(--blue_100)"}
  return (
    <>
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
        },
        padding: 0,
      }}
    >
      
      <TimelineItem >
        <TimelineSeparator>
          <TimelineDot 
            sx={{
              background:backgroundColor,
              borderColor :cor,
              color: cor,
              width:30,
              margin:0,
              justifyContent:"center",
              alignItems: "flex-start",
               }}>
              {number}
            </TimelineDot>
            <TimelineConnector
            sx={{
              background:cor,
              height:50,
            }}
            />
            </TimelineSeparator>
          <TimelineContent sx={{
            padding:0,
            marginLeft:2,
            }}>
          <Typography font-family= "Raleway, sans-serif"  variant="h6" component="span">{title}</Typography>
          <Typography font-family= "Raleway, sans-serif">{description} </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </>
    

    
  );
}


export default TimeLineOrbis;