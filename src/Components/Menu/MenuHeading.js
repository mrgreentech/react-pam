import React from 'react';
import PropTypes from 'prop-types';

const MenuHeading = ({ component, ...rest }) => {
  const Component = component ? component : 'a';
  return <Component pam-menu-heading="" {...rest} />;
};

MenuHeading.propTypes = {
  component: PropTypes.node
};

export default MenuHeading;
