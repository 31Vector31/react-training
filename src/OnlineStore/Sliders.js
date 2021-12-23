import Slider from '@mui/material/Slider';

const minDistance = 2000;

function Sliders({value, minValue, maxValue, change}) {

    const handleChange = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }
        if (newValue[1] - newValue[0] < minDistance) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], maxValue - minDistance);
                change([clamped, clamped + minDistance]);
            } else {
                const clamped = Math.max(newValue[1], minDistance);
                change([clamped - minDistance, clamped]);
            }
        } else {
            change(newValue);
        }
    };

    return (
        <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            disableSwap
            min={minValue}
            max={maxValue}
        />
    );
}

export default Sliders;