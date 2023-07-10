import Timeline from '@mui/lab/Timeline';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import Typography from '@mui/material/Typography';
import { Alert } from "./styles";
import alertModal from "../../assets/icon/alertModal.svg";


interface IsTool {
  title:  string ;
  description:  string;
  number:  number;
  variant: string;
  alert?: string | undefined;

}


const TimeLineOrbis = ({title, description, number, variant, alert}: IsTool )  => {
  var cor;
  if(variant == '3'){cor = "var(--purple_200)";}
  if(variant == '4'){cor = "var(--yellow_200)"; }
  if(variant == '5'){cor = "var(--blue_200)";}
  return (
    <>
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
        },
        padding: 0
      }}
    >
      
      <TimelineItem >
        <TimelineSeparator>
          <TimelineDot 
            sx={{
              background:"var(--white)",
              borderColor :cor,
              color: cor,
              width:35,
              height: 35,
              margin:0,
              justifyContent:"center",
              fontSize: '1.25rem',
              fontWeight: 600,
              boxShadow: 'none',
              alignItems: "center",
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
          <Typography >{alert != null ? <Alert>
            <img id={alert != null ? "imgAlert" : 'NoImgAlert'} src={alertModal}/>
            {alert}
            </Alert> : null} 
          </Typography>

        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </>
    

    
  );
}


export default TimeLineOrbis;