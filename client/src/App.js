import React, { Component } from 'react';
import Header from './include/header';
import Sections from './components/content/Sections';

class App extends React.Component{
  render(){
    console.log(window.innerHeight);
    return (
      <div className="App">
          <Header/>          
          <Sections/>
      </div>
    );
  }
}
export default App;
