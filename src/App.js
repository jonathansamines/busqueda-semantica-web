import React, { Component } from 'react';
import SearchBox from './components/SearchBox';
import SearchResults from './components/SearchResults';

export default class Search extends Component {
  state = {
    searchTerm: '',
  };

  updateSearch = (searchTerm) => {
    console.log(searchTerm);
    this.setState({ searchTerm });
  }

  render() {
    const { searchTerm } = this.state;

    return (
      <div className='container'>
        <SearchBox searchTerm={searchTerm} onChange={this.updateSearch} />
        <SearchResults searchTerm={searchTerm} onChange={this.updateSearch} />
      </div>
    );
  }
}
