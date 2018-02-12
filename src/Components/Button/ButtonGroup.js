import React from 'react';
import PropTypes from 'prop-types';
import {Sizes} from './index';

const ButtonGroup = ({borderless, children, size, ...rest}) => {
  const props = [];
  if(size.length) {props.push(size)}
  if(borderless) {props.push('borderless')}


  return (<div pam-button-group={props.join(' ')} {...rest}>{children}</div>);
};

ButtonGroup.propTypes = {
  borderless: PropTypes.bool,
  size: PropTypes.oneOf(Sizes)
};

ButtonGroup.defaultProps = {
  borderless: false,
  size: ''
};

export default ButtonGroup;