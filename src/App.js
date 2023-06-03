import React, { Component } from 'react';
import './App.css';
import MyComponent from './components/MyComponent'

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <MyComponent title="React" />
      </div>
    );
  }
}


export default App;
