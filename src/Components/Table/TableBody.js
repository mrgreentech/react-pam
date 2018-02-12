import React from 'react';
import PropTypes from 'prop-types';
import TableRow from './TableRow';

const TableBody = ({children, ...rest}) => <tbody {...rest}>{children}</tbody>;

TableBody.propTypes = {
  children: PropTypes.instanceOf(TableRow)
};

export default TableBody;