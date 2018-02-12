import React from 'react';
import PropTypes from 'prop-types';

const MenuLink = ({children, component, ...rest}) => {
  if(!component) return (<a pam-menu-link="" {...rest}>{children}</a>);
  return (<component pam-menu-link="" {...rest}>{children}</component>)
};

MenuLink.propTypes = {
  component: PropTypes.node
};

export default MenuLink;