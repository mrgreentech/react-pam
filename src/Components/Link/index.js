import React from 'react';
import PropTypes from 'prop-types';

const Link = ({component: Component, ...rest}) => {
  if(!Component){
    return <a pam-link="" {...rest}/>;
  }

  return <Component pam-link="" {...rest}/>;
};

Link.propTypes = {
  component: PropTypes.node
};

export default Link;