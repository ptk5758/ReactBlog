import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Header from './include/header.js';
import MainContent from './Contents/Main.js';
import InputBoard from './Contents/InputComponent';

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
    return (
      <div className="App">
          <Header/>
          <MainContent myAbility={this.state.ability}/>
          <InputBoard/>
      </div>
    );
  }
}
export default App;
