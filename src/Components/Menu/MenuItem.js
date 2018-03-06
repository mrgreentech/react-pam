import React from 'react';
import PropTypes from 'prop-types';

const States = ['', 'active', 'selected', 'disabled'];

const MenuItem = ({ state, isDropDown, isSeparator, ...rest }) => {
  if (isSeparator) return <li pam-menu-separator="" />;

  const props = [];
  if (state.length) {
    props.push(state);
  }
  if (!isDropDown) return <li pam-menu-item={props.join(' ')} {...rest} />;

  return (
    <li
      pam-menu-item={props.join(' ')}
      pam-menu-has-children=""
      pam-menu-allow-hover=""
      {...rest}
    />
  );
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
export { States };
