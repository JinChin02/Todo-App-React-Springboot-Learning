import React, { Component } from 'react';
import FirstComponent from './components/learning-examples/FirstComponent'
import ThirdComp from './components/learning-examples/ThirdComp';
//import logo from './logo.svg';
import './App.css';
 
class App extends Component {
  render() {
    return (
      <div className="App">
          My Hello World
          <FirstComponent></FirstComponent>
          <ThirdComp></ThirdComp>
      </div>
    );
  }
}



export default App;
