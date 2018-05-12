import React from 'react';
import { Button } from 'reactstrap';
import fragment from './../../lib/fragment';

const ViewDetailButton = ({ device, onChange }) => {
  const deviceURL = device && new URL(device.value);

  return (
    <Button color='primary' onClick={() => onChange(fragment(deviceURL.hash))}>Ver detalles</Button>
  );
};

export default ViewDetailButton;
