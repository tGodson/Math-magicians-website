/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const buttonGroup = [
  { id: 1, name: 'AC' },
  { id: 2, name: '+/-' },
  { id: 3, name: '%' },
  { id: 4, name: '÷' },
  { id: 5, name: '7' },
  { id: 6, name: '8' },
  { id: 7, name: '9' },
  { id: 8, name: 'x' },
  { id: 9, name: '4' },
  { id: 10, name: '5' },
  { id: 11, name: '6' },
  { id: 12, name: '-' },
  { id: 13, name: '1' },
  { id: 14, name: '2' },
  { id: 15, name: '3' },
  { id: 16, name: '+' },
  { id: 17, name: '0' },
  { id: 18, name: '.' },
  { id: 19, name: '=' },

];

const ButtonPanel = ({ clickHandler }) => (
  <div className="panel">
    <div className="group">
      {buttonGroup.map(button => (button.name === '0'
        ? <Button key={button.id} name={button.name} wide color="#dfdfdf" clickHandler={clickHandler} />
        : (button.name === '+' || button.name === '-'
          || button.name === '=' || button.name === 'x'
          || button.name === '÷')
          ? <Button key={button.id} name={button.name} clickHandler={clickHandler} />
          : <Button key={button.id} name={button.name} color="#dfdfdf" clickHandler={clickHandler} />))}
    </div>
  </div>
);

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
