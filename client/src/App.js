import React, { Component } from 'react';
import Header from './include/header';
import Sections from './components/content/Sections';
import Aboutme from './components/content/Aboutme';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      code: "main",
      result: <Sections/>
    }
  }

  stateRefresh = (value) => {
    let showComponents;    
    if(value === "main") {
      showComponents = <Sections/>
    } else if (value === "aboutme") {
      showComponents = <Aboutme/>;
    } else {
      showComponents = "other";
    }
    this.setState({
      code: value,
      result: showComponents
    });
  }

  render(){
    console.log(window.innerHeight);
    return (
      <div className="App">
          <Header
            onChangePage={function(value){
              this.stateRefresh(value);
            }.bind(this)}
          />
          {this.state.result}
      </div>
    );
  }
}
export default App;
