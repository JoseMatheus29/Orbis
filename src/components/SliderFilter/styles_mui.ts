import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

export const PrettoSlider = styled(Slider)({
    color: 'var(--red_200)',
    height: 10,
    '& .MuiSlider-track': {
      border: 'none',
    },
    '& .MuiSlider-mark': {
    
    },
    '& .MuiSlider-thumb': {
      height: 24,
      padding: 2,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&:before': {
        display: 'none',
      },
    }
  });

