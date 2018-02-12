import React from 'react';
import PropTypes from 'prop-types';

const AlertHeader = ({children, ...rest}) => {
  return (<h1 pam-alert-heading="" {...rest}>{children}</h1>)
};

export default AlertHeader;