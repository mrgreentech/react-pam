import React from 'react';
import PropTypes from "prop-types";
import TableRow from "./TableRow";

const TableHead = ({children, ...rest}) => <thead {...rest}>{children}</thead>;

TableHead.propTypes = {
  children: PropTypes.instanceOf(TableRow)
};

export default TableHead;