import React from 'react';

const TableCaption = ({children, ...rest}) => <caption {...rest}>{children}</caption>;

export default TableCaption;