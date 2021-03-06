import React, { Component } from 'react';
import './App.css';
import Equality from './components/Equality';
import Privacy from './components/Privacy';
import Political from './components/Political';
import Freedom from './components/Freedom';
import Disability from './components/Disability';


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
          if(this.state.equality === true){
          return <Equality />;
        } else if(this.state.privacy === true){
          return <Privacy />;
        } else if(this.state.political === true){
          return <Political />
        } else if(this.state.freedom === true){
          return <Freedom />
        } else if(this.state.disability === true){
          return <Disability />
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
        
      <h1 id="main-heading"> A HUMAN RIGHTS FRAME FOR AI RISKS AND HARM </h1>
      {checker()}
      <div className="topic-box">
        
        <div id='equality' > <h1 onClick={() => equality()} > Equality</h1> </div>
        <div id='political' > <h1 onClick={() => political()} > Political</h1> </div>
        <div id='privacy' > <h1 onClick={() => privacy()} > Privacy</h1> </div>
        <div id='freedom' > <h1 onClick={() => freedom()} > Freedom</h1> </div>
        <div id='disability' > <h1 onClick={() => disability()} > Disability</h1> </div>
      </div>
      </React.Fragment>
    );
    
    }
  }
  
 export default App;