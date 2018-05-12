import React, { Component } from 'react';
import { groupBy } from 'lodash';
import { Alert } from 'reactstrap';
import ProductList from './ProductList';

import './index.css';

export default class SearchResults extends Component {
  state = {
    results: [],
  };

  async componentDidMount() {
    const { searchTerm } = this.props;

    await this.searchByTerm(searchTerm);
  }

  async searchByTerm(searchTerm) {
    const term = encodeURIComponent(searchTerm);

    const response = await fetch(`http://localhost:8080/ontologia?query=${term}`);
    const content = await response.json();

    const results = content.results.bindings;

    this.setState({ results });
  }

  async componentWillReceiveProps(nextProps) {
    if (nextProps.searchTerm !== this.props.searchTerm) {
      await this.searchByTerm(nextProps.searchTerm);
    }
  }

  getContent(results) {
    const { onChange } = this.props;

    if (results.length === 0) {
      return (
        <Alert color='warning'>No se encontraron resultados</Alert>
      );
    }

    const searchResults = groupBy(results, 'dispositivo.value');

    return (
      <ProductList onChange={onChange} searchResults={searchResults} />
    );
  }

  render() {
    const { results } = this.state;

    return (
      <section className='search-results row justify-content-md-center'>
        <div className='col col-xs-12 col-md-10'>
          {this.getContent(results)}
        </div>
      </section>
    );
  }
}
