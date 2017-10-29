import React, { Component } from 'react';
import './App.css';
import List from './List';
import Form from './Form';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          name: "bread",
          price: 3
        },
        {
          name: "cheese",
          price: 4
        },
        {
          name: "asdf",
          price: 42
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <List items = { this.state.items } />
        <Form />
      </div>
    );
  }
}

export default App;