import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Import our components here
import DataLoader from './components/dataLoader';


class App extends Component {
  
  render() {
    return (
      <div className="App" style={{height:'100vh'}}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Header/>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div style={{float:'left', backgroundColor:'green', height:'20vh', width:'30%'}}>
          <Navbar/>
        </div>
        <div className="container">
          <DataLoader />
        </div>
        <Footer />
      </div>
    );
  }
}

class Navbar extends Component{
  render(){
    return(
      <div>
        This is my side bar
      </div>
    )
  }
}

class Header extends Component{
  render(){
    return(
      <h1> Raj Kumar </h1>
    )
  }
}

class Footer extends Component{
  render(){
    return(
      <div style={{position:'absolute', bottom:'0', backgroundColor:'brown', height:'30vh', width:'100%', color:'orange', clipPath:'polygon(0 40%, 100% 0, 100% 100%, 0 100%)'}}>
       <div style={{position:'absolute', bottom:0, textAlign:'center', fontSize:'3rem', marginLeft: '36%'}}>
         This is my footer
        </div>
      </div>
    )
  }
}
export default App;
