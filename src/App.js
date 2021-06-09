import React from 'react';
import './App.css';

import CardList from './components/cardList/cardList.component';
import SearchBox from './components/search-box/search-box.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      searchField: '',
    };
  }

  async componentDidMount() {
    const data = await fetch('https://fakestoreapi.com/products/');
    const json = await data.json();
    this.setState({
      items: json,
    });
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { items, searchField } = this.state;
    const filteredItems = items.filter((item) =>
      item.category.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>React Mag</h1>
        <p>Test</p>
        <SearchBox handleChange={(e) => this.handleChange(e)} />
        <CardList items={filteredItems} />
      </div>
    );
  }
}

export default App;
