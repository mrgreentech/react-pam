import React from 'react';
import PropTypes from 'prop-types';

const LoaderTypes = ['pulse', 'circle'];
const LoaderSize = ['', 'small', 'large'];

const Loader = ({ type, size, component: Component, children, ...rest }) => {
  const props = [];

  props.push(type);

  if (size.length) {
    props.push(size);
  }
  return (
    <Component pam-loader={props.join(' ')} children={children} {...rest} />
  );
};

Loader.propTypes = {
  type: PropTypes.oneOf(LoaderTypes),
  size: PropTypes.oneOf(LoaderSize),
  component: PropTypes.node
};

Loader.defaultProps = {
  type: 'pulse',
  size: '',
  component: 'div'
};

export default Loader;
export { Loader, LoaderTypes, LoaderSize };
