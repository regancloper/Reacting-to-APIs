import React from 'react';


const CardDetail = (props) => {
    if (props.dataType) {
        return (
            <React.Fragment>
                <div className="card-body">
                    <h5 className="card-title">{props.item.title}</h5>
                    <p className="card-text line-clamp">{props.item.description}</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Release Date: {props.item.release_date}</small>
                </div>
            </React.Fragment>
        );
    } else {
        return (
            <div className="card-body">
                <h5 className="card-title">{props.item.name}</h5>
                <p className="card-text">Age: {props.item.age}</p>
                <p className="card-text">Gender: {props.item.gender}</p>
                <a href={props.item.url} className="btn btn-primary">Open JSON File!</a>
            </div>
        );
    }
};


export default CardDetail;