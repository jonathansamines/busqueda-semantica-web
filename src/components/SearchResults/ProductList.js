import React, { Fragment } from 'react';
import { chunk } from 'lodash';
import { Badge, Alert, Row, Col } from 'reactstrap';
import ProductItem from './ProductItem';

const PRODUCTS_BY_ROW = 3;

const ProductList = ({ searchResults, onChange }) => {
  const searchResultKeys = Object.keys(searchResults);
  const searchResultGroups = chunk(searchResultKeys, PRODUCTS_BY_ROW);

  return (
    <Fragment>
      <Alert color='light'>
        Se encontraron <Badge color='primary'>{searchResultKeys.length}</Badge> resultados
      </Alert>

      {searchResultGroups.map((resultGroup) => {
        return (
          <Row className='justify-content-md-center' key={resultGroup.join(',')}>
            {resultGroup.map((resultKey) => {
              const result = searchResults[resultKey][0] || {};
              const accesorios = searchResults[resultKey].map((r) => r.accesorio);

              return (
                <Col sm='4' key={resultKey}>
                  <ProductItem
                    {...result}
                    onChange={onChange}
                    accesorios={accesorios} />
                </Col>
              );
            })}
          </Row>
        );
      })}
    </Fragment>
  );
};

export default ProductList;
