import React from 'react';
import Item from './Item'

const Collection = (props) => {
    let collection = props.data.dataset.map((item) => {
        return (
            <Item key={item.id} item={item} dataType={props.data.hasLoadedFilms}/>
        );
    });

    return (
        <div className="card-group">{collection}</div>
    );
};



export default Collection;