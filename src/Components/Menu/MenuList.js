import React from 'react';
import PropTypes from 'prop-types';

const MenuList = ({ isChild, ...rest }) => {
  if (isChild) return <ul pam-menu-children="" {...rest} />;
  return <ul pam-menu-list="" {...rest} />;
};

MenuList.propTypes = {
  isChild: PropTypes.bool
};

export default MenuList;
