import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import Collection from './components/Collection';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            films: []
        }
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(arr => this.setState({ films: arr }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="container">
                <Collection films={this.state.films} />
            </div>

        );
    }
}

export default App;