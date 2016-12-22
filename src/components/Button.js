import React, { PropTypes } from 'react';

const Button = (props) => {
  const handleClick = () => {
    props.onClick();
  };

  return (
    <button
      onClick={handleClick}
    >
      {props.text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
