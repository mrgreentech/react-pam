import React from 'react';
import PropTypes from 'prop-types';

const LoaderTypes = ['pulse', 'circle'];

const Loader = ({ type, component: Component, children, ...rest }) => (
  <Component pam-loader={type} children={children} {...rest} />
);

Loader.propTypes = {
  type: PropTypes.oneOf(LoaderTypes),
  component: PropTypes.node
};

Loader.defaultProps = {
  type: 'pulse',
  component: 'div'
};

export default Loader;
export { Loader, LoaderTypes };
