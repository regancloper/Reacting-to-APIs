import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import Collection from './components/Collection';
import logo from './logo.png';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            films: [],
            hasLoadedFilms: false
        }
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(arr => this.setState({ films: arr }))
            .catch(err => console.log(err));
    }

    handleButtonClick = () => {
        this.setState({ hasLoadedFilms: !(this.hasLoadedFilms) });
    }

    render() {
        if (this.state.hasLoadedFilms) {
            return (
                <div className="container">
                    <Collection films={this.state.films} />
                </div>
            );
        } else {
            return (
                <div className="container">
                    <div className="p-3">
                        <img src={logo} alt="logo" />
                    </div>
                    <button className="btn btn-info" 
                        onClick={(() => this.handleButtonClick())}>Load Films
                    </button>
                </div>
                    );
                }
        
        
            }
        }
        
export default App;