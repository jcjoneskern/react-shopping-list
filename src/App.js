import React, { Component } from 'react';
import List from './List';
import Form from './Form';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

addItem(item) {
  this.setState(prevState => ({
    items: prevState.items.concat(item)
  }));
}

removeItem(item, index) {
  this.setState(prev => {
    return {
      items: [
        ...prev.items.slice(0, index),
        ...prev.items.slice(index + 1)
      ]
    };
  });
}

  render() {
    return (
      <div className="App">
        <List onRemove={ this.removeItem } items = { this.state.items } />
        <Form onItemAddition={ this.addItem } />
      </div>
    );
  }
}

export default App;