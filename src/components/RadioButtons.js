import React, { PropTypes } from 'react';

const RadioButtons = props => {
  let currId;

  const allRadioButtons = props.inputs.map(input => {
    currId = input.value + Date.now();
    return (
      <label key={currId} htmlFor={currId}>
        {input.label}
        <input id={currId} type="radio" value={input.value} />
      </label>
    );
  });

  return (
    <fieldset>
      (!!props.legend && <legend>{props.legend}</legend>)
      {allRadioButtons}
    </fieldset>
  );
};

RadioButtons.propTypes = {
  inputs: PropTypes.arrayOf(PropTypes.object).isRequired,
  legend: PropTypes.string,
};

export default RadioButtons;
