import React, { Component } from 'react';

class ListItem extends Component {
    handleRemoveClick(item, index) {
        this.props.onRemove(item, index);
    }

    render() {
        const listItems = this.props.items.map((item, index) => {
            return <li key={index}><span className="remove" onClick={this.handleRemoveClick.bind(this, item, index)} >-</span> {item.name} <span className="numbers">${item.price.toFixed(2)}</span></li>
        });
        return listItems;
    }

}

export default ListItem;