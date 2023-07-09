import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  timelineItemClasses, 
  TimelineSeparator,
} from "@mui/lab";

import Check from '../../assets/form_assests/check.svg';
import CheckWhite from '../../assets/form_assests/check-white.svg';
import { useForm } from "../../hooks/useForm";
import { stageName, participantsName, typeOfDataName } from "./utils";
import { Icons, IconUsers } from "./styles";
import Time from '../../assets/icon/time.svg'
import Halter from '../../assets/icon/halter.svg'

import Users from '../../assets/icon/users.svg';
import User from '../../assets/icon/user.svg';

interface ITimeLineForm {
  currentStep: number;
}

export const TimeLineForm = ({ currentStep }: ITimeLineForm) => {

  const { state } = useForm();

  return (
    <Timeline className="timeline-form" sx={{
      [`& .${timelineItemClasses.root}:before`]: {
        flex: 0,
      },
      padding: 0,
    }}>
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot
          id={currentStep == 1 ? 'dot-active' : ''}
        >
        { state.Stage_idStage ? <img src={currentStep == 1 ? CheckWhite : Check}/> : '1'}
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <h4>Etapa</h4>
        { state.Stage_idStage ? <h3>{stageName(state.Stage_idStage)}</h3> : null}
      </TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot
          id={currentStep == 2 ? 'dot-active' : ''}
        >
          { state.time ? <img src={currentStep == 2 ? CheckWhite : Check}/> : '2'}
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <h4>Tempo</h4>
        { state.time ? 
           <Icons>
           {/*@ts-ignore*/}
           <img src={ Time  } style={  state.time > 0 ? { opacity: 1} : {opacity: 0.5}}/>
           {/*@ts-ignore*/}
           <img src={Time} style={  state.time > 1 ? { opacity: 1} : {opacity: 0.5}} />
           {/*@ts-ignore*/}
           <img src={ Time } style={  state.time > 2 ? { opacity: 1} : {opacity: 0.5}} />
          </Icons>
        : null}
      </TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot
        id={currentStep == 3 ? 'dot-active' : ''}
        >
          { state.effort ? <img src={currentStep == 3 ? CheckWhite : Check}/> : '3'}
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <h4>Esforço</h4>
        { state.effort ? 
           <Icons>
           {/*@ts-ignore*/}
           <img src={ Halter  } style={  state.effort > 0 ? { opacity: 1} : {opacity: 0.5}}/>
           {/*@ts-ignore*/}
           <img src={Halter} style={  state.effort > 1 ? { opacity: 1} : {opacity: 0.5}} />
           {/*@ts-ignore*/}
           <img src={Halter} style={  state.effort > 2 ? { opacity: 1} : {opacity: 0.5}} />
          </Icons>
        : null}
      </TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot
        id={currentStep == 4 ? 'dot-active' : ''}
        >
          { state.participants ? <img src={currentStep == 4 ? CheckWhite : Check}/> : '4'}
        </TimelineDot>
        <TimelineConnector id={ state.Stage_idStage == '4' ? "last-connector" : ''}/>
      </TimelineSeparator>
      <TimelineContent>
        <h4>Participantes</h4>
        {
          
          state.participants !== '' && state.participants !== "0"  ? 
          /*@ts-ignore*/
          <IconUsers><img src={state.participants > 1 ? Users : User} /><p>{participantsName(state.participants)}</p></ IconUsers> :
          null
        }
      </TimelineContent>
    </TimelineItem>
   { state.Stage_idStage == "3" || state.Stage_idStage == "5" ?
   <TimelineItem>
      <TimelineSeparator>
        <TimelineDot
        id={currentStep == 5 ? 'dot-active' : ''}
        >
          { state.typeOfData ? <img src={currentStep == 5 ? CheckWhite : Check}/> : '5'}
        </TimelineDot>
        <TimelineConnector id="last-connector"/>
      </TimelineSeparator>
      <TimelineContent>
        <h4>Tipos de dados</h4>
        { state.typeOfData ? <h3>{typeOfDataName(state.typeOfData)}</h3> : null}
      </TimelineContent>
    </TimelineItem>
    : null}
  </Timeline>
  );
};
