import React from 'react';
import PropTypes from 'prop-types';

const States = ['', 'active', 'selected', 'disabled'];

const MenuItem = ({state, children, isDropDown, isSeparator, ...rest}) => {
  if(isSeparator) return (<li pam-menu-separator=""></li>);

  const props = [];
  if(state.length) {props.push(state)}
  if(!isDropDown) return (<li pam-menu-item={props.join(' ')} {...rest}>{children}</li>);

  return (
    <li pam-menu-item={props.join(' ')} pam-menu-has-children="" pam-menu-allow-hover="" {...rest}>{children}</li>
  )
};

MenuItem.propTypes = {
  isDropDown: PropTypes.bool,
  isSeparator: PropTypes.bool,
  state: PropTypes.oneOf(States)
};

MenuItem.defaultProps = {
  isDropDown: false,
  isSeparator: false,
  state: ''
};

export default MenuItem;
export {States};