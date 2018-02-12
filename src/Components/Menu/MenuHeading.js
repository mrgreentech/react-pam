import React from 'react';
import PropTypes from 'prop-types';

const MenuHeading = ({children, component, ...rest}) => {
  if(!component) return (<a pam-menu-heading="" {...rest}>{children}</a>);
  return (<component pam-menu-heading="" {...rest}>{children}</component>)
};

MenuHeading.propTypes = {
  component: PropTypes.node
};

export default MenuHeading;