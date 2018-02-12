import React from 'react';
import PropTypes from 'prop-types';

const Colors = ['', 'info', 'success', 'warning', 'danger'];
const Sizes = ['', 'mini', 'small', 'large'];
const States = ['', 'active', 'disabled', 'hidden'];
const Variations = ['', 'primary', 'secondary', 'tertiary', 'link'];

const Button = ({ children, color, fab, flat, fluid, raised, rounded, size, state, variation, ...rest}) => {
  const props = [];
  if(color.length) {props.push(color)}
  if(fab) {props.push('circle')}
  if(flat) {props.push('flat')}
  if(fluid) {props.push('fluid')}
  if(raised) {props.push('raised')}
  if(rounded) {props.push('rounded')}
  if(size.length) {props.push(size)}
  if(state.length) {props.push(state)}
  if(variation.length) {props.push(variation)}

  return <button pam-button={props.join(' ')} {...rest}>{children}</button>;
};

Button.propTypes = {
  color: PropTypes.oneOf(Colors),
  fab: PropTypes.bool,
  flat: PropTypes.bool,
  fluid: PropTypes.bool,
  raised: PropTypes.bool,
  rounded: PropTypes.bool,
  size: PropTypes.oneOf(Sizes),
  state: PropTypes.oneOf(States),
  variation: PropTypes.oneOf(Variations),
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
export {Colors, Sizes, States, Variations}