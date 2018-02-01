import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const Network = props => (
  <SvgIcon {...props} viewBox="0 0 512 512">
    <path fill="none" stroke={props.color || "#000"} strokeWidth="28" strokeMiterlimit="10" d="M64 64h384v288H64zM96 448h320M192 352v96M320 352v96" />
  </SvgIcon>
);

export default Network;
