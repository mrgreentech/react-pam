import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ component, ...rest }) => {
  const Component = component ? component : 'a';
  return <Component pam-link="" {...rest} />;
};

Link.propTypes = {
  component: PropTypes.node
};

export default Link;
export { Link };
