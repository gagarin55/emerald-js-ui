import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const Compass = props => (
  <SvgIcon {...props} viewBox="0 0 64 64">
    <circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="4"/><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="4" d="M28 28l-4 12 12-4 4-12-12 4z"/>
  </SvgIcon>
);

export default Compass;
