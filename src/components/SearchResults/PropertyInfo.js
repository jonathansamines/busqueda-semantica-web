import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import fragment from './../../lib/fragment';

const PropertyInfo = ({ description, property, onChange }) => {
  const propertyURL = property && new URL(property.value);

  if (!propertyURL) return null;

  const value = fragment(propertyURL.hash);

  return (
    <Fragment>
      <dt>{description}</dt>
      <dd>
        <a
          title={value}
          href={propertyURL.href}
          onClick={(evt) => evt.preventDefault() || onChange(value)}>
          {value}
        </a>
      </dd>
    </Fragment>
  );
};

PropertyInfo.propTypes = {
  description: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PropertyInfo;
