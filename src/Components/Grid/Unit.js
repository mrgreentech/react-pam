import React from 'react';
import PropTypes from 'prop-types';

const Unit = ({
  default: defaultUnit,
  small,
  medium,
  large,
  xlarge,
  ...rest
}) => {
  const props = [];
  if (defaultUnit.length) {
    props.push(defaultUnit);
  }
  if (small.length) {
    props.push(`small:${small}`);
  }
  if (medium.length) {
    props.push(`medium:${medium}`);
  }
  if (large.length) {
    props.push(`large:${large}`);
  }
  if (xlarge.length) {
    props.push(`xlarge:${xlarge}`);
  }

  return <div pam-unit={props.join(' ')} {...rest} />;
};

Unit.propTypes = {
  default: PropTypes.string,
  small: PropTypes.string,
  medium: PropTypes.string,
  large: PropTypes.string,
  xlarge: PropTypes.string
};

Unit.defaultProps = {
  default: '',
  small: '',
  medium: '',
  large: '',
  xlarge: ''
};

export default Unit;
