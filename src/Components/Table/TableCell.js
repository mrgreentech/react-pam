import React from 'react';

const TableCell = ({children, ...rest}) => <td {...rest}>{children}</td>;

export default TableCell;