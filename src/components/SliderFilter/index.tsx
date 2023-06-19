import Slider from '@mui/material/Slider';


interface ISliderFilter {
    onChange: (value: any) => void;
    value: string;
    ariaLabel: string;
}

const SliderFilter = ({ onChange, value, ariaLabel } : ISliderFilter) => {
    return (
        <>
        <Slider
          aria-label={ariaLabel}
          defaultValue={0}
          valueLabelDisplay="auto"
          value={parseInt(value)}
          onChange={onChange}
          step={1}
          size="small"
          marks
          min={0}
          max={3}
          style={{width: "150px"}}
        />
        </>
    )
}

export default SliderFilter;