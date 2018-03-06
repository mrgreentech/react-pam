import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './Item';

const List = ({ component, ...rest }) => {
  const Component = component ? component : 'div';
  return <Component pam-list="" {...rest} />;
};

List.propTypes = {
  component: PropTypes.node
};

export default List;
export { List, ListItem };
