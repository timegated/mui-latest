import React from 'react';
import { Slider as MUISlider } from '@mui/material';

/**
 * Overriding nested styles with sx prop and a custom prop
 * @param {*} param0 
 * @returns {React.Component}
 */
const Slider = ({
  borderRadiusVal
}) => {
  return (
    <MUISlider
      defaultValue={75}
      sx={{
        width: 300,
        color: 'success.main',
        '& .MuiSlider-thumb': {
          borderRadius: `${borderRadiusVal}`,
        },
      }}
    />
  );
};

export default Slider;
