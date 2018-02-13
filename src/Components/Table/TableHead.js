import React from 'react';
import PropTypes from "prop-types";
import TableRow from "./TableRow";

const TableHead = props => <thead {...props}/>;

TableHead.propTypes = {
  children: PropTypes.instanceOf(TableRow)
};

export default TableHead;