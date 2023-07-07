import Time from '../../assets/icon/time.svg'
import Halter from '../../assets/icon/halter.svg'
import { Container, Icons  } from './styles';

interface ISValueCard {
    valueTime:  number ;
    valueEffort:  number;
    variant: string;
}

const CardTool = ({valueTime,valueEffort, variant}: ISValueCard) => {
    
    return(
        
        <Container
        variant = {variant}>
            <Icons>
                <h4>{"Tempo"}</h4>
                {/*@ts-ignore*/}
                <img src={Time} style={  valueTime > 0 ? { opacity: 1} : {opacity: 0.5}} />
                {/*@ts-ignore*/}
                <img src={Time} style={  valueTime > 1 ? { opacity: 1} : {opacity: 0.5}}  />
                {/*@ts-ignore*/}
                <img src={Time} style={  valueTime > 2 ? { opacity: 1} : {opacity: 0.5}} />
            </Icons>
            <Icons>
                <h4>{"Esforço"}</h4>
                {/*@ts-ignore*/}
                <img src={Halter} style={  valueEffort > 0 ? { opacity: 1} : {opacity: 0.5}} />
                {/*@ts-ignore*/}
                <img src={Halter} style={  valueEffort > 1 ? { opacity: 1} : {opacity: 0.5}}  />
                {/*@ts-ignore*/}
                <img src={Halter} style={  valueEffort > 2 ? { opacity: 1} : {opacity: 0.5}} />
            </Icons>
        </Container>
    )
}

export default CardTool;
