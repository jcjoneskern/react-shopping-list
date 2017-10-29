import React from 'react';
import ListItem from './ListItem'

const List = (props) => {

    const total = props.items.map( item => item.price).reduce( (sum, item) => sum + item );

    return (
        <div>
            <ListItem items={props.items} />
            <p>Total: {total}</p>
        </div>
    );
}

export default List;