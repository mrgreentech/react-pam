import React from 'react';
import PropTypes from 'prop-types';
import AlertHeader from './AlertHeader'

const Types = ['', 'info', 'success', 'warning', 'danger'];

const Alert = ({ children, type, ...rest}) => <div pam-alert={type.length ? type : ''} {...rest}>{children}</div>;

Alert.propTypes = {
  type: PropTypes.oneOf(Types)
};

Alert.defaultProps = {
  type: ''
};

export default Alert;
export {Types, AlertHeader}