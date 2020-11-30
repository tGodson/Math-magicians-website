/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Button = ({
  name, color, wide, clickHandler,
}) => (
  <button
    className={wide ? 'wide' : 'normal'}
    type="button"
    style={{ backgroundColor: color }}
    onClick={() => clickHandler(name)}
  >
    {name}

  </button>

);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,

};

Button.defaultProps = {
  wide: false,
  color: '#fe9241',
};

export default Button;
