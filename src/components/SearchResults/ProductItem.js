import React from 'react';
import AccesoryList from './AccesoryList';
import PropertyInfo from './PropertyInfo';
import ProductTitle from './ProductTitle';
import ViewDetailButton from './ViewDetailButton';
import { Card, CardText, ListGroup, ListGroupItem } from 'reactstrap';

const ProductItem = ({ dispositivo, descripcion, fabricante, objeto, os, accesorios, onChange }) => {
  return (
    <Card body>
      <ProductTitle device={dispositivo} manufacturer={fabricante} onChange={onChange} />
      <CardText>{descripcion && descripcion.value}</CardText>
      <ListGroup flush>
        <ListGroupItem>
          <dl>
            <PropertyInfo description='Es: ' property={objeto} onChange={onChange} />
            <PropertyInfo description='Sistema Operativo: ' property={os} onChange={onChange} />
          </dl>
        </ListGroupItem>
        <ListGroupItem>
          <AccesoryList accesories={accesorios} />
        </ListGroupItem>
      </ListGroup>
      <ViewDetailButton device={dispositivo} onChange={onChange} />
    </Card>
  );
};

export default ProductItem;
