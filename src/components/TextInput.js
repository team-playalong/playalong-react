import React, { PropTypes } from 'react';

const TextInput = (props) => {
  const handleChange = (e) => {
    props.onChange(props.name, e.target.value);
  };

  const id = props.id || Date.now();
  return (
    <div>
      <label htmlFor={id}>{props.label || ''}</label>
      <input
        className="small"
        type="text"
        id={id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={handleChange}
      />
    </div>

  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default TextInput;
