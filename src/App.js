import React from 'react';
import './App.css';
import Buttons from './Buttons'

class App extends React.Component {

  render() {
    return (
      <div className="container">

        <div className="row">
          <div className="title">
            <h5>
            Simple Calculator with react js
            </h5>
           </div>
          <Buttons />
        </div>
      </div>
    );
  }

}

export default App;
