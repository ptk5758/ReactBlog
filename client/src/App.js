import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Header from './include/header.js';
import MainContent from './Contents/Main.js';

class App extends React.Component{

  state = {
    ability: ""
  }

  componentDidMount(){
    this.callApi()
    .then(res => this.setState({ability: res}))
    .catch(error => console.log(error));
  }

  callApi = async () => {
    const response = await fetch('/api/Abilitys');
    const body = await response.json();
    return body;
  }

  render(){
    console.log(this.state.code);
    return (
      <div className="App">
          <Header/>
          <MainContent myAbility={this.state.ability}/>
      </div>
    );
  }
}

class TestInputComponent extends React.Component{
  render(){
    return(
      <div>
        <span><input type="submit" /></span>
        <span><input type="button"/></span>
      </div>
    );
  }
}

export default App;
