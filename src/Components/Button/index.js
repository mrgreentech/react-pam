import React from 'react';
import PropTypes from 'prop-types';

const ButtonColors = ['', 'info', 'success', 'warning', 'danger'];
const ButtonSizes = ['', 'mini', 'small', 'large'];
const ButtonStates = ['', 'active', 'disabled', 'hidden'];
const ButtonVariations = ['', 'primary', 'secondary', 'tertiary', 'link'];

const Button = ({
  color,
  fab,
  flat,
  fluid,
  raised,
  rounded,
  size,
  state,
  variation,
  ...rest
}) => {
  const props = [];
  if (color.length) {
    props.push(color);
  }
  if (fab) {
    props.push('circle');
  }
  if (flat) {
    props.push('flat');
  }
  if (fluid) {
    props.push('fluid');
  }
  if (raised) {
    props.push('raised');
  }
  if (rounded) {
    props.push('rounded');
  }
  if (size.length) {
    props.push(size);
  }
  if (state.length) {
    props.push(state);
  }
  if (variation.length) {
    props.push(variation);
  }

  return <button pam-button={props.join(' ')} {...rest} />;
};

Button.propTypes = {
  color: PropTypes.oneOf(ButtonColors),
  fab: PropTypes.bool,
  flat: PropTypes.bool,
  fluid: PropTypes.bool,
  raised: PropTypes.bool,
  rounded: PropTypes.bool,
  size: PropTypes.oneOf(ButtonSizes),
  state: PropTypes.oneOf(ButtonStates),
  variation: PropTypes.oneOf(ButtonVariations)
};

Button.defaultProps = {
  color: '',
  fab: false,
  flat: false,
  fluid: false,
  raised: false,
  rounded: false,
  size: '',
  state: '',
  variation: ''
};

export default Button;
export { Button, ButtonColors, ButtonSizes, ButtonStates, ButtonVariations };
