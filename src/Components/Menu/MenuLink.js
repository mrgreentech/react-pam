import React from 'react';
import PropTypes from 'prop-types';

const MenuLink = ({component: Component, ...rest}) => {
  if(!Component) return (<a pam-menu-link="" {...rest}/>);
  return (<Component pam-menu-link="" {...rest}/>)
};

MenuLink.propTypes = {
  component: PropTypes.node
};

export default MenuLink;