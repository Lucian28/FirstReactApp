import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {

  constructor() {
    super();

    this.state = {
      numeUser: 'Lucian'
    };
  }

  render() {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
             Salut, { this.state.numeUser }
        </p>
        <button onClick={() => this.setState({numeUser: 'Vasile'})}> Click me to change the name of the user </button>
      </header>
    </div>
  );  
 
}
}

export default App;
