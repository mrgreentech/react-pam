import React from 'react';
import PropTypes from 'prop-types';
import Field from './Field';
import Fieldset from './Fieldset';
import Message from './Message';

const Form = ({component, aligned, stacked, padded, ...rest}) => {
  const props = [];
  if(stacked) {props.push('stacked')}
  if(padded) {props.push('padded')}
  if(aligned) {props.push('aligned')}
  const Component = component ? component : 'form';
  return (<Component pam-form={props.join(' ')} {...rest}/>)
};

Form.propTypes = {
  component: PropTypes.node,
  stacked: PropTypes.bool,
  padded: PropTypes.bool,
  aligned: PropTypes.bool
};

Form.defaultProps = {
  stacked: false,
  padded: false,
  aligned: false
};

export default Form;
export {Field, Fieldset, Message};