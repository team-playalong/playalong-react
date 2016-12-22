import React, { PropTypes } from 'react';

const RadioButtons = (props) => {
  const allRadioButtons = props.inputs.forEach(input => {
    return <input type="radio" />
  });

  return (
      allRadioButtons
  );
};

RadioButtons.propTypes = {
  inputs: PropTypes.array,
};

export default RadioButtons;
