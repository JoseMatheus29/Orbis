import styled from 'styled-components';

export const Content = styled.div`
    width: 80%;
    margin: 0 auto;
    padding-top: 100px;
`

export const GridCards = styled.div`
    display: grid;
    grid-template-columns:  auto auto auto auto;
    gap: 24px;
`

export const Slider = styled.div`
input[type='range'],
input[type='range']::-webkit-slider-runnable-track,
input[type='range']::-webkit-slider-thumb,
input[type='range']::-moz-range-track,
input[type='range']::-moz-range-progress,
input[type='range']::-moz-range-thumb,
input[type='range']::-ms-track,
input[type='range']::-ms-fill-lower,
input[type='range']::-ms-thumb {
  -webkit-appearance: none;
  appearance: none;
}

input[type='range'] {
  display: block;
  border: none;
  margin: 0 auto;
  padding: 0;
  width: 36em;
  height: 3em;
  opacity: .7;
  background: repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.32), rgba(255, 255, 255, 0.32) 1px, transparent 1px, transparent 3em) no-repeat 50% 50% content-box;
  background-size: calc(27em + 1px) 100%;
  font-size: 1em;
  cursor: pointer;
}

input[type='range']::-webkit-slider-runnable-track {
  position: relative;
  width: 36em;
  height: .75em;
  border-radius: .25em;
  box-shadow: 0 1px 1px rgba(255, 255, 255, 0.32);
  background: rgba(255, 255, 255, 0.32);
}

input[type='range']::-moz-range-track {
  width: 36em;
  height: .75em;
  border-radius: .25em;
  background: rgba(255, 255, 255, 0.32);
}

input[type='range']::-ms-track {
  border: none;
  width: 36em;
  height: .75em;
  border-radius: .25em;
  background: rgba(255, 255, 255, 0.32);
  color: transparent;
}

input[type='range']::-moz-range-progress {
  height: .75em;
  border-radius: .25em;
  background: #fff;
}

input[type='range']::-ms-fill-lower {
  border-radius: .25em;
  background: #fff;
}

input[type='range']::-webkit-slider-thumb,
input[type='range']::-moz-range-thumb,
input[type='range']::-ms-thumb {
  box-sizing: border-box;
  border: solid .125em #e53728;
  width: 1.25em;
  height: 1.25em;
  border-radius: 50%;
  background: #fff;
  cursor: ew-resize;
}

input[type='range']::-webkit-slider-runnable-track::before,
#track::before {
  position: absolute;
  bottom: 100%;
  left: 0;
  color: #fff;
  line-height: 1.5;
}

input[type='range']::-webkit-slider-thumb::before,
input[type='range']::-webkit-slider-thumb::after,
#thumb::before,
#thumb::after {
  position: absolute;
  bottom: 0;
  color: #fff;
  line-height: 1;
}

input[type='range']::-webkit-slider-thumb::before,
#thumb::before {
  box-sizing: border-box;
  left: 100%;
  padding-right: .0625em;
  width: 2;
}


`