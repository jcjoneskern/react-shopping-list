import React from 'react';
import ListItem from './ListItem'

const List = (props) => {

    const total = () => {
        if(props.items.length === 0) {
            return 0;
        } else {
            return props.items.map( item => item.price).reduce( (sum, item) => sum + item );
        }
    }

    return (
        <div className="list">
            <h1>Shopping List</h1>
            <ul>
                <ListItem onRemove={props.onRemove} items={props.items} />
            </ul>
            <p>Total <span className="numbers">${total().toFixed(2)}</span></p>
        </div>
    );
}

export default List;