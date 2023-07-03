import { PrettoSlider } from './styles_mui' 
import Time from '../../assets/icon/time.svg'
import Halter from '../../assets/icon/halter.svg'
import { Container, Icons  } from './styles';
import { Dispatch, SetStateAction } from 'react';

interface ISliderFilter {
    onChange: (value: any) => void;
    value: string;
    ariaLabel: string;
    setValue: Dispatch<SetStateAction<string>>;
}

const SliderFilter = ({ onChange, value, ariaLabel, setValue } : ISliderFilter) => {

    return (
        <>
        <Container>
            <Icons>
                {/*@ts-ignore*/}
                <img src={ ariaLabel == "Esforço" ? Halter : Time} style={  value > 0 ? { opacity: 1} : {opacity: 0.5}} onClick={ () => setValue("1")}/>
                {/*@ts-ignore*/}
                <img src={ ariaLabel == "Esforço" ? Halter : Time} style={  value > 1 ? { opacity: 1} : {opacity: 0.5}} onClick={ () => setValue("2")} />
                {/*@ts-ignore*/}
                <img src={ ariaLabel == "Esforço" ? Halter : Time} style={  value > 2 ? { opacity: 1} : {opacity: 0.5}} onClick={ () => setValue("3")}/>
            </Icons>
                <PrettoSlider
                aria-label={ariaLabel}
                defaultValue={0}
                value={parseInt(value)}
                onChange={onChange}
                step={1}
                size="medium"
                marks
                min={0}
                max={3}
                style={{width: "200px"}}
                />
        </Container>
        </>
    )
}

export default SliderFilter;