import React from 'react';
import PropTypes from 'prop-types';

const MenuList = ({children, isChild, ...rest}) => {
  if(isChild) return (<ul pam-menu-children="" {...rest}>{children}</ul>);
  return <ul pam-menu-list="" {...rest}>{children}</ul>
};

MenuList.propTypes = {
  isChild: PropTypes.bool
};

export default MenuList;