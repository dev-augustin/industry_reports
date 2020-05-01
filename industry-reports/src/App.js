import React, { Component } from 'react';
import './App.css';
import Equality from './components/Equality';
// import Privacy from './components/Privacy';
import PoliticalPg12 from './components/PoliticalPg12';
// import Freedom from './components/Freedom';
// import Disability from './components/Disability';


class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        equality: true,
        privacy: false,
        political: false,
        freedom: false,
        disability: false
      }
  }

   
  render() { 
    const checker = () => {
      if(this.state.equality === true){
      return <Equality />;
    } 
    // else if(this.state.privacy === true){
    //   return <Privacy />;
    // } 
    else if(this.state.political === true){
      return <PoliticalPg12 />
    }
    
  }
      
    const equality = () => {
      this.setState({
        equality: true,
        privacy: false,
        political: false,
        freedom: false,
        disability: false
      })
    }
    const privacy = () => {
      this.setState({
        equality: false,
        privacy: true,
        political: false,
        freedom: false,
        disability: false
      })
    }
    const political = () => {
        this.setState({
          equality: false,
          privacy: false,
          political: true,
          freedom: false,
          disability: false
        })
      }

      const freedom = () => {
        this.setState({
          equality: false,
          privacy: false,
          political: false,
          freedom: true,
          disability: false
        })
      }

      const disability = () => {
        this.setState({
          equality: false,
          privacy: false,
          political: false,
          freedom: false,
          disability: true
        })
      }
    
    
  
    return (  
      
      <React.Fragment>
        
      <h1 id="main"> A HUMAN RIGHTS FRAME FOR AI RISKS AND HARM </h1>
      {checker()}
      <div className="topic-box">
        
        <div id='equality' > <h1 onClick={() => equality()} > equality</h1> </div>
        <div id='political' > <h1 onClick={() => political()} > political</h1> </div>
        <div id='privacy' > <h1 onClick={() => privacy()} > privacy</h1> </div>
        <div id='freedom' > <h1> freedom </h1> </div>
        <div id='disability' > <h1> disability </h1>  </div>
      </div>
      <h1> About </h1>
      </React.Fragment>
    );
    
    }
  }
  
 export default App;