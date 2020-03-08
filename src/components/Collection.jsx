import React from 'react';
import Film from './Film'

const Collection = (props) => {
    let collection = props.films.map((film) => {
        return (
            <Film key={film.id} film={film} />
        );
    });

    return (
        <div className="card-group">{collection}</div>
    );
};



export default Collection;