// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// # defauld

import React, { Component } from "react"

class App extends Component {
  constructor() {
    super() 

      this.state = {
        name : 'Sef Danny'
      }
    
  }

  render() {
    return (
    <div>
      <div>Hello</div>
      <div>My name is {this.state.name}</div>
    </div>
    )
  }
}

export default App;
