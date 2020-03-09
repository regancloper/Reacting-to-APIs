import React from 'react';
import '../App.css'
import CardDetail from './CardDetail';


const Item = (props) => {

    return (
        <div className="col-md-4 py-2">
            <div className="card h-100">
                <CardDetail dataType={props.dataType} item={props.item} />
            </div>
        </div>

    );

}


export default Item;