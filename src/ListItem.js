import React from 'react';

const ListItem = (props) => {
    const listItems = props.items.map((item, index) => {
        return <li key={index}><span>-</span> {item.name} {item.price.toFixed(2)}</li>
    });

    return <ul>{listItems}</ul>;
}

export default ListItem;