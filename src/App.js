import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.itBroke = this.itBroke.bind(this);
  }

  itBroke(){
    window.alert("hey, it really broke");
  }

  render() {
    return (
      <div className="App">
      <header className="app-header">
            <div className="top-left">
            <button className="btn btn-lg bg-transparent text-myBlue" aria-pressed="true"><a href="https://youtu.be/dQw4w9WgXcQ">help me!!!!!!</a></button>
            </div>
      </header>
      <main className="app-main">
        
      </main>
      <footer className="app-footer fixed-bottom">
      <div className="middle-bottom d-flex justify-content-center">
            <button className=" text-myBlue footer-button btn btn-lg bg-transparent" onClick={this.itBroke}>help me!!!!!!</button>
            </div>
      </footer>
      </div>
    );
  }
}

export default App;
