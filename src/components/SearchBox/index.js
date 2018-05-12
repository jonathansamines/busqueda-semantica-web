import React, { Component } from 'react';
import debouce from 'lodash/debounce';
import { Form, FormGroup, Label, Input } from 'reactstrap';

import './index.css';

export default class SearchBox extends Component {
  state = {
    searchTerm: this.props.searchTerm
  }

  notifySearchUpdate = debouce((searchTerm) => {
    const { onChange } = this.props;

    onChange(searchTerm);
  }, 400)

  updateSearchTerm = (event) => {
    const searchTerm = event.target.value;

    this.setState({ searchTerm }, () => this.notifySearchUpdate(searchTerm));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.searchTerm !== this.props.searchTerm) {
      this.setState({ searchTerm: nextProps.searchTerm });
    }
  }

  render() {
    const { searchTerm } = this.state;

    return (
      <section className='search-box row justify-content-md-center'>
        <div className='col col-xs-12 col-md-1'>
          <img alt='Logotipo Universidad Mariano Galvez' className='search-box-logo' src='./logo.png' />
        </div>
        <div className='col col-xs-12 col-md-9'>
          <Form>
            <FormGroup>
              <Label for='terminoBusqueda'>Buscador de productos</Label>
              <Input
                type='search'
                name='terminoBusqueda'
                id='terminoBusqueda'
                autoComplete='off'
                placeholder='ej. Nombre del dispositivo, fabricante, sistema operativo, descripción'
                value={searchTerm}
                onChange={this.updateSearchTerm} />
            </FormGroup>
          </Form>
        </div>
      </section>
    );
  }
};
