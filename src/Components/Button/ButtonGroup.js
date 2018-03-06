import React from 'react';
import PropTypes from 'prop-types';
import { ButtonSizes } from './index';

const ButtonGroup = ({ borderless, size, ...rest }) => {
  const props = [];
  if (size.length) {
    props.push(size);
  }
  if (borderless) {
    props.push('borderless');
  }

  return <div pam-button-group={props.join(' ')} {...rest} />;
};

ButtonGroup.propTypes = {
  borderless: PropTypes.bool,
  size: PropTypes.oneOf(ButtonSizes)
};

ButtonGroup.defaultProps = {
  borderless: false,
  size: ''
};

export default ButtonGroup;
