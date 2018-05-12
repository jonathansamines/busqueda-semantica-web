import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Badge } from 'reactstrap';
import fragment from './../../lib/fragment';

const AccesoryList = ({ accesories }) => {
  const accesoryList = accesories.filter(Boolean);

  if (accesoryList.length === 0) {
    return (
      <Alert color='warning'>No hay accesorios disponibles</Alert>
    );
  }

  return (
    <dl>
      <dt>Accesorios</dt>
      <dd>
        {accesoryList.map((accesory) => {
          const accesoryURL = new URL(accesory.value);

          return (
            <Badge
              pill
              color='dark'
              key={accesory.value}>
              {fragment(accesoryURL.hash)}
            </Badge>
          );
        })}
      </dd>
    </dl>
  );
};

AccesoryList.propTypes = {
  accesories: PropTypes.array.isRequired,
};

export default AccesoryList;
