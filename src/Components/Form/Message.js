import React from 'react';
import PropTypes from 'prop-types';

const Message = ({component, inline, ...rest}) => {
  const props = [];
  if(inline) {props.push('inline')}

  const Component = component ? component : 'aside';
  return (<Component pam-form-message={props.join(' ')} {...rest}/>);
};

Message.propTypes = {
  component: PropTypes.node,
  inline: PropTypes.bool
};

Message.defaultProps = {
  inline: false
};

export default Message;