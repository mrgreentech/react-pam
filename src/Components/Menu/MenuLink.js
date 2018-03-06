import React from 'react';
import PropTypes from 'prop-types';

const MenuLink = ({ component, ...rest }) => {
  const Component = component ? component : 'a';
  return <Component pam-menu-link="" {...rest} />;
};

MenuLink.propTypes = {
  component: PropTypes.node
};

export default MenuLink;
