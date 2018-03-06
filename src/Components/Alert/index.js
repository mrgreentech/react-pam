import React from 'react';
import PropTypes from 'prop-types';
import AlertHeader from './AlertHeader';

const AlertTypes = ['', 'info', 'success', 'warning', 'danger'];

const Alert = ({ type, ...rest }) => (
  <div pam-alert={type.length ? type : ''} {...rest} />
);

Alert.propTypes = {
  type: PropTypes.oneOf(AlertTypes)
};

Alert.defaultProps = {
  type: ''
};

export default Alert;
export { Alert, AlertTypes, AlertHeader };
