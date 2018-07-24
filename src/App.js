import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Editor from './Editor';

class App extends Component {

    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        console.log(this, e);
    }

    isAnonymous(){
        return true;
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    {/* <img src={logo} className="App-logo" alt="logo" /> */}
                    <h1 className="App-title">Stand Up 앱을 만들어 봅시다</h1>
                </div>
                <Editor {...this}/>
            </div>
        );
    }
}

export default App;
