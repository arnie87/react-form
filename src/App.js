import React, { Component } from 'react';
import './App.css';
import Form from './containers/Form';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>React contact form</h1>
        <hr></hr>
        <Form/>
      </div>
    );
  }
}

export default App;
