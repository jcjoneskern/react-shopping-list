import React from 'react';
import ListItem from './ListItem'

const List = (props) => {

    const total = props.items.map( item => item.price).reduce( (sum, item) => sum + item );

    return (
        <div className="list">
            <ul>
                <ListItem onRemove={props.onRemove} items={props.items} />
            </ul>
            <p>Total: <span className="numbers">${total.toFixed(2)}</span></p>
        </div>
    );
}

export default List;