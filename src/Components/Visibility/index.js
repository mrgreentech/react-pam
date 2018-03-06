import React from 'react';
import PropTypes from 'prop-types';

const VisibilityTypes = ['', 'invisible', 'hidden'];

const Visibility = ({
  visibility = '',
  component: Component,
  children,
  ...rest
}) => <Component pam-visibility={visibility} children={children} {...rest} />;

Visibility.propTypes = {
  visibility: PropTypes.oneOf(VisibilityTypes),
  component: PropTypes.node
};

Visibility.defaultProps = {
  visibility: '',
  component: 'div'
};

export default Visibility;
export { Visibility, VisibilityTypes };
