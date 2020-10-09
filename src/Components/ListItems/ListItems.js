import React from 'react';

import './ListItems.css'

const ListItems = (props) => {

    const items = props.items
    const listItems = items.map((item, index) => {
        return (
            <div className="list" key={index}>
                <p>
                    <input type="text"
                    id = { item.key }
                    value = {item.text}   
                    onChange={
                        event => {props.setUpdate(event.target.value, item.key)}
                    }
                    />
                    <span className="trash" onClick={ () => props.deleteItem(item.key) }>
                        <i className="fas fa-trash-alt"></i>
                    </span>
                </p>
            </div>
        )
    })

    return (
        <div>
            {listItems}
        </div>
    );
};

export default ListItems;