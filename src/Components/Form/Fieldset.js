import React from 'react';
import PropTypes from 'prop-types';

const Modes = ['', 'column', 'aligned'];

const Fieldset = ({component, legend, mode, children, ...rest}) => {
  const props = [];
  if(mode.length) {props.push(mode)}

  const Component = component ? component : 'fieldset';
  return (
    <Component
      pam-fieldset={props.join(' ')}
      {...rest}>
      {legend && <legend>{legend}</legend>}
      {children}
    </Component>
  );
};

Fieldset.propTypes = {
  component: PropTypes.node,
  mode: PropTypes.oneOf(Modes),
  legend: PropTypes.any
};

Fieldset.defaultProps = {
  mode: ''
};

export default Fieldset;
export {Modes}