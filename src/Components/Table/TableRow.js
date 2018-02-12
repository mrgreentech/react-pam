import React from 'react';
import TableCell from './TableCell';
import PropTypes from "prop-types";

const TableRow = ({children, ...rest}) => <tr {...rest}>{children}</tr>;

TableRow.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.instanceOf(TableCell)),
    PropTypes.instanceOf(TableCell)
  ])
};



export default TableRow;