import React from 'react';
import PropTypes from 'prop-types';
import Unit from './Unit';

const Directions = ['', 'row', 'row-reverse', 'column', 'column-reverse'];
const Wraps = ['', 'wrap', 'wrap-reverse', 'nowrap'];
const Justify = ['', 'start', 'center', 'end', 'between', 'around', 'evenly'];
const Alignments = ['', 'start', 'center', 'end', 'baseline', 'stretch'];
const AlignContent = ['', 'start', 'center', 'end', 'baseline', 'stretch'];

const Grid = ({ align, alignContent, direction, wrap, justify, ...rest }) => {
  const control = [];
  if (direction.length) {
    control.push(`direction:${direction}`);
  }
  if (wrap.length) {
    control.push(`wrap:${wrap}`);
  }
  if (justify.length) {
    control.push(`justify:${justify}`);
  }
  if (align.length) {
    control.push(`align:${align}`);
  }
  if (alignContent.length) {
    control.push(`align-content:${alignContent}`);
  }

  return <div pam-grid="" pam-grid-control={control.join(' ')} {...rest} />;
};

Grid.propTypes = {
  direction: PropTypes.oneOf(Directions),
  wrap: PropTypes.oneOf(Wraps),
  justify: PropTypes.oneOf(Justify),
  align: PropTypes.oneOf(Alignments),
  alignContent: PropTypes.oneOf(AlignContent)
};

Grid.defaultProps = {
  direction: '',
  wrap: '',
  justify: '',
  align: '',
  alignContent: ''
};

export default Grid;
export { Grid, Unit, Directions, Justify, Wraps };
