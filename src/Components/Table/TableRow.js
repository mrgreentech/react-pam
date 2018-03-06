import React from 'react';
import TableCell from './TableCell';
import PropTypes from 'prop-types';

const TableRow = props => <tr {...props} />;

TableRow.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.instanceOf(TableCell)),
    PropTypes.instanceOf(TableCell)
  ])
};

export default TableRow;
