import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Header from './include/header.js';

class App extends React.Component{
  render(){
    return (
      <div className="App">
          <Header/>
      </div>
    );
  }
}

export default App;
