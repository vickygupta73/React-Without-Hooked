import React from 'react';
import logo from './logo.svg';
import './App.css';

// function App(props) {
//   return (
//     <div className="App">
//       <h1>Hello, World</h1>
//       <h1>it is {props?.date?.toLocaleTimeString()}</h1>
//       {/* <header className="App-header">
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
//       </header> */}
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {date : new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render(){
    return(
      <div className="App">
      <h1>Hello, World</h1>
      <h1>it is {this.state?.date?.toLocaleTimeString()}</h1>
      </div>
    )
  }
}

export default App;
