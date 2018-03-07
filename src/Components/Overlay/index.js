import React from 'react';
import PropTypes from 'prop-types';

const Overlay = ({ component: Component, children, ...rest }) => (
  <Component pam-overlay="" children={children} {...rest} />
);

const OverlayWrapper = ({ component: Component, children, ...rest }) => (
  <Component pam-overlay-wrapper="" children={children} {...rest} />
);

Overlay.propTypes = {
  component: PropTypes.node
};

Overlay.defaultProps = {
  component: 'div'
};

OverlayWrapper.propTypes = {
  component: PropTypes.node
};

OverlayWrapper.defaultProps = {
  component: 'div'
};

export default Overlay;
export { Overlay, OverlayWrapper };
