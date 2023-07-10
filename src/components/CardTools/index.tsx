import { Container, Icons  } from './styles';
import { stageName } from "./utils";
import TimeBlue from '../../assets/icon/time_blue.svg';
import TimeYellow from '../../assets/icon/time_yellow.svg';
import TimePurple from '../../assets/icon/time_purple.svg';
import HalterBlue from '../../assets/icon/halter_blue.svg';
import HalterYellow from '../../assets/icon/halter_yellow.svg';
import HalterPurple from '../../assets/icon/halter_purple.svg';

interface ISValueCard {
    valueTime:  number ;
    valueEffort:  number;
    variant: string;
    stage_id: string;
}

const CardTool = ({valueTime,valueEffort, variant, stage_id}: ISValueCard) => {
    const stage = stageName(stage_id);

    const iconTime = () => {
        if(variant === 'design') {
            return TimeYellow;
        } else if( variant === 'evaluate') {
            return TimeBlue;
        } else if( variant === 'analyzes') {
            return TimePurple;
        }
    }

    const iconHalter = () => {
        if(variant === 'design') {
            return HalterYellow;
        } else if( variant === 'evaluate') {
            return HalterBlue;
        } else if( variant === 'analyzes') {
            return HalterPurple;
        }
    }

    return(
        <Container
        variant = {variant}>
            <div id="StageCard">{stage}</div>
            <Icons>
                <h4>{"Tempo"}</h4>
                <div>
                {/*@ts-ignore*/}
                <img src={iconTime()} style={  valueTime > 0 ? { opacity: 1} : {opacity: 0.5}} />
                {/*@ts-ignore*/}
                <img src={iconTime()} style={  valueTime > 1 ? { opacity: 1} : {opacity: 0.5}}  />
                {/*@ts-ignore*/}
                <img src={iconTime()} style={  valueTime > 2 ? { opacity: 1} : {opacity: 0.5}} />
                </div>
            </Icons>
            <Icons>
                <h4>{"Esforço"}</h4>
                <div>
                {/*@ts-ignore*/}
                <img src={iconHalter()} style={  valueEffort > 0 ? { opacity: 1} : {opacity: 0.5}} />
                {/*@ts-ignore*/}
                <img src={iconHalter()} style={  valueEffort > 1 ? { opacity: 1} : {opacity: 0.5}}  />
                {/*@ts-ignore*/}
                <img src={iconHalter()} style={  valueEffort > 2 ? { opacity: 1} : {opacity: 0.5}} />
                </div>
            </Icons>
            
        </Container>
    )
}

export default CardTool;
