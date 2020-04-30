import React, { Component } from 'react';
import './App.css';
// import Equality from './components/Equality';
import KevPg12 from './components/KevPg12';


class App extends Component {
  render() { 
      const equality = () => {
      console.log('connected')
    }
    return (  
      <React.Fragment>
      <h1> A HUMAN RIGHTS FRAME FOR AI RISKS AND HARM </h1>
      <div className="topic-box">
        <div id='equality' > <h1 onClick={() => equality()} > equality</h1> </div>
        <div id='political' > <h1 className="political-particpation"> </h1> Political Participation </div>
        <div id='privacy' > privacy </div>
        <div id='freedom' > freedom </div>
        <div id='disability' > disability </div>
      </div>
      <h1> About </h1>
      <KevPg12 />
      </React.Fragment>

    );
    }
  }
  
 export default App;
