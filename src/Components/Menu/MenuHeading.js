import React from 'react';
import PropTypes from 'prop-types';

const MenuHeading = ({component:Component, ...rest}) => {
  if(!Component) return (<a pam-menu-heading="" {...rest}/>);
  return (<Component pam-menu-heading="" {...rest}/>)
};

MenuHeading.propTypes = {
  component: PropTypes.node
};

export default MenuHeading;