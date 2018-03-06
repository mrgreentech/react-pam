import React from 'react';
import PropTypes from 'prop-types';

const States = ['', 'success', 'danger'];
const Sizes = ['', 'large', 'small'];

const Field = ({ component, fluid, state, size, width, ...rest }) => {
  const props = [];
  if (fluid) {
    props.push('fluid');
  }

  const formState = state.length ? state : null;
  const formSize = size.length ? size : null;
  const formWidth = width.length ? width : null;
  const Component = component ? component : 'input';
  return (
    <Component
      pam-form-control={props.join(' ')}
      pam-form-state={formState}
      pam-form-size={formSize}
      pam-form-width={formWidth}
      {...rest}
    />
  );
};

Field.propTypes = {
  component: PropTypes.node,
  fluid: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  state: PropTypes.oneOf(States),
  size: PropTypes.oneOf(Sizes),
  width: PropTypes.string,
  value: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  autoComplete: PropTypes.bool,
  autoFocus: PropTypes.bool,
  type: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
};

Field.defaultProps = {
  fluid: false,
  disabled: false,
  readOnly: false,
  required: false,
  state: '',
  size: '',
  width: ''
};

export default Field;
