import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ component, ...rest }) => {
  const Component = component ? component : 'div';
  return <Component pam-item="" {...rest} />;
};

ListItem.propTypes = {
  component: PropTypes.node
};

export default ListItem;
