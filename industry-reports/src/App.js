import React, { Component } from 'react';
import './App.css';
import Equality from './components/Equality';
import Privacy from './components/Privacy'
import Disability from './components/Disability';
import Freedom from './components/Freedom'


class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        equality: false,
        privacy: false,
        political: false,
        freedom: false,
        disability: false
      }

    
  }

   
  render() { 
  //   const checker = () => {
  //   switch(this.state.equality) {
  //     case this.state.equality:
  //       return <Equality />
        
      
  //     case this.state.privacy:
  //      return <Privacy />
  //       break;
  //     default:
  //       return null;
  //   }
  // }
    
      const checker = () => {
        if(this.state === false){
          return null;
        } else if(this.state.equality === true){
          return <Equality />;
        } else if(this.state.privacy === true){
          return <Privacy />;
        }else if(this.state.disability === true){
          return <Disability />;
        }else if(this.state.freedom === true){
          return <Freedom />;
      }}
      
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
        <div id='political' ><h1 onClick={() => equality()} > political</h1> </div>
        <div id='privacy' > privacy <h1 onClick={() => privacy()} > privacy</h1> </div>
        <div id='freedom' > <h1 onClick={() => freedom()}>freedom </h1></div>
        <div id='disability' > <h1 onClick={() => disability()} >disability</h1> </div>
      </div>
      <h1> About </h1>
      </React.Fragment>
    );
    
    }
  }
  
 export default App;