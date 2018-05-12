import React from 'react';
import fragment from './../../lib/fragment';
import { CardTitle, Badge } from 'reactstrap';

const ProductTitle = ({ device, manufacturer, onChange }) => {
  const deviceURL = device && new URL(device.value);
  const manufacturerURL = manufacturer && new URL(manufacturer.value);

  return (
    <CardTitle>
      <span className='search-result-title'>
        {fragment(deviceURL.hash)}
      </span>
      {
        manufacturerURL &&
        <Badge href={manufacturer.value} color='warning' onClick={(evt) => evt.preventDefault() || onChange(fragment(manufacturerURL.hash))}>
          {fragment(manufacturerURL.hash)}
        </Badge>
      }
    </CardTitle>
  );
};

export default ProductTitle;
