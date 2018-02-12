import React from 'react';
import PropTypes from 'prop-types';
import MenuList from './MenuList';
import MenuItem, {States as MenuItemStates} from './MenuItem';
import MenuLink from './MenuLink';
import MenuHeading from './MenuHeading';

const Menu = ({vertical, truncated, fill, justified, children, ...rest}) => {
  const props = [];
  if(vertical) {props.push('vertical')}
  if(truncated) {props.push('truncated')}
  if(justified) {props.push('justified')}
  if(fill) {props.push('fill')}

  return (<div pam-menu={props.join(' ')} {...rest}>{children}</div>);
};

Menu.propTypes = {
  vertical: PropTypes.bool,
  truncated: PropTypes.bool,
  fill: PropTypes.bool,
  justified: PropTypes.bool,
  children: PropTypes.instanceOf(MenuList)
};

export default Menu;
export {MenuList, MenuHeading, MenuItem, MenuLink, MenuItemStates}