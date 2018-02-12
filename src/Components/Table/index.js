import React from 'react';
import PropTypes from 'prop-types';

import TableBody from './TableBody';
import TableCaption from './TableCaption';
import TableCell from './TableCell';
import TableRow from './TableRow';
import TableHead from './TableHead';

const Borders = ['', 'horizontal', 'bordered', 'borderless'];

const Table = ({border, centered, children, striped, fluid, ...rest}) => {
  const props = [];
  if(border.length) {props.push(border)}
  if(centered) {props.push('centered')}
  if(fluid) {props.push('fluid')}
  if(striped) {props.push('striped')}

  return (<table pam-table={props.join(' ')} {...rest}>{children}</table>);
};

Table.propTypes = {
  border: PropTypes.oneOf(Borders),
  centered: PropTypes.bool,
  children: PropTypes.any,
  fluid: PropTypes.bool,
  striped: PropTypes.bool
};

Table.defaultProps = {
  border: '',
  centered: false,
  children: false,
  fluid: false,
  striped: false
};

export default Table;
export {Borders, TableHead, TableRow, TableCell, TableCaption, TableBody};