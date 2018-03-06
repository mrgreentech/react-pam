import React from 'react';
import PropTypes from 'prop-types';

const widthOptions = ['', 'small', 'medium', 'large'];
const gapOptions = ['', 'small', 'medium', 'large'];

const Column = ({
  gap,
  width,
  columns,
  component: Component,
  children,
  ...rest
}) => {
  const props = [];
  if (columns > 5 || columns < 1) {
    throw new Error('columns out of bounds');
  }
  props.push(columns);

  if (gap.length) {
    props.push(`gap:${gap}`);
  }

  if (width.length) {
    props.push(`width:${width}`);
  }

  return (
    <Component pam-column={props.join(' ')} children={children} {...rest} />
  );
};

Column.propTypes = {
  columns: PropTypes.number,
  width: PropTypes.oneOf(widthOptions),
  gap: PropTypes.oneOf(gapOptions),
  component: PropTypes.node
};

Column.defaultProps = {
  columns: 1,
  width: '',
  gap: '',
  component: 'p'
};

export default Column;
export { Column, widthOptions, gapOptions };
