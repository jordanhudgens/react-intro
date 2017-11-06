import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className = "App" >
                <header className = "App-header" >
                    <img src = { logo } className = "App-logo" alt = "logo" />
                    <h1 className = "App-title" >Welcome to React</h1>
                </header>
                <p className = "App-intro" >
                To get started, try to edit without annoying indentation changing to <code> src / App.js </code> and save to reload. Just like this again...
                </p>
            </div>
        );
    }
}

export default App;