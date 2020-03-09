import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import Collection from './components/Collection';
import logo from './logo.png';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataset: [],
            hasLoadedFilms: false,
            hasLoadedPeople: false
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if ((prevState.hasLoadedFilms !== this.state.hasLoadedFilms) || (prevState.hasLoadedPeople !== this.state.hasLoadedPeople)) {
            let baseURL = "";
            if (this.state.hasLoadedFilms) {
                baseURL = "https://ghibliapi.herokuapp.com/films";
            } else if (this.state.hasLoadedPeople) {
                baseURL = "https://ghibliapi.herokuapp.com/people";
            }
            fetch(baseURL)
                .then(res => res.json())
                .then(arr => this.setState({ dataset: arr }))
                .catch(err => console.log(err));
        }
    }

    handleFilmButtonClick = () => {
        this.setState({ hasLoadedFilms: !(this.state.hasLoadedFilms) });
    }

    handlePeopleButtonClick = () => {
        this.setState({ hasLoadedPeople: !(this.state.hasLoadedPeople) });
    }

    render() {
        if (this.state.hasLoadedFilms || this.state.hasLoadedPeople) {
            return (
                <div className="container">
                    <Collection data={this.state} />
                </div>
            );
        } else {
            return (
                <div className="container">
                    <div className="p-3">
                        <img src={logo} alt="logo" />
                    </div>
                    <button className="btn btn-info m-1"
                        onClick={(() => this.handleFilmButtonClick())}>Load Films
                    </button>
                    <button className="btn btn-danger m-1"
                        onClick={(() => this.handlePeopleButtonClick())}>Load People
                    </button>
                </div>
            );
        }


    }
}

export default App;