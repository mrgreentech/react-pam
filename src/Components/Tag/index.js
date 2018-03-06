import React from 'react';
import PropTypes from 'prop-types';

const TagVariation = ['', 'primary', 'success', 'info', 'warn', 'danger'];

const Tag = ({
  variation,
  rounded,
  component: Component,
  children,
  ...rest
}) => {
  const props = [];
  if (variation.length) {
    props.push(variation);
  }
  if (rounded) {
    props.push('rounded');
  }
  return <Component pam-tag={props.join(' ')} children={children} {...rest} />;
};

Tag.propTypes = {
  variation: PropTypes.oneOf(TagVariation),
  rounded: PropTypes.bool,
  component: PropTypes.node
};

Tag.defaultProps = {
  type: '',
  rounded: false,
  component: 'div'
};

export default Tag;
export { Tag, TagVariation };
