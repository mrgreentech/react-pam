import React from 'react';
import PropTypes from 'prop-types';

const TileTypes = ['', 'left', 'content', 'right'];
const TileAlignments = ['', 'top', 'center', 'bottom'];

const Tile = ({ component, type, align, ...rest }) => {
  const props = [];
  if (type.length) {
    props.push(type);
  }
  if (align.length) {
    props.push(align);
  }

  const Component = component ? component : 'div';
  return <Component pam-tile={props.join(' ')} {...rest} />;
};

Tile.propTypes = {
  component: PropTypes.node,
  type: PropTypes.oneOf(TileTypes),
  align: PropTypes.oneOf(TileAlignments)
};

Tile.defaultProps = {
  type: '',
  align: ''
};

export default Tile;
export { Tile, TileTypes, TileAlignments };
