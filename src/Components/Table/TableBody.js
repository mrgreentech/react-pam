import React from 'react';
import PropTypes from 'prop-types';
import TableRow from './TableRow';

const TableBody = props => <tbody {...props}/>;

TableBody.propTypes = {
  children: PropTypes.instanceOf(TableRow)
};

export default TableBody;