import React from 'react';
import PropTypes from 'prop-types';

const TextTypes = [
  '',
  'display-1',
  'display-2',
  'display-3',
  'display-4',
  'headline',
  'title',
  'subheading',
  'body-1',
  'body-2',
  'caption',
  'button'
];

const propTypes = {
  size: PropTypes.number,
  type: PropTypes.oneOf(TextTypes)
};

const defaultProps = {
  size: 1,
  type: ''
};

const Header = ({ component, size, type, ...rest }) => {
  if (size > 4 || size < 1) {
    return new Error('Invalid size');
  }

  const Type = type.length ? type : `display-${size}`;
  const Component = component ? component : `h${5 - size}`;
  return <Component pam-typography={Type} pam-typography-text="" {...rest} />;
};

const Text = ({ component, type, ...rest }) =>
  Header({ component: component || 'p', type, ...rest });

Header.propTypes = Text.propTypes = propTypes;
Header.defaultProps = Text.defaultProps = defaultProps;

export { Header, Text, TextTypes };
