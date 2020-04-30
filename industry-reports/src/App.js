import React, { Component } from 'react';
import './App.css';
import Equality from './components/Equality';
import DisAbility from './components/Disability'
import Freedom from './components/Freedom'
import image from './Assets/newImage.png'
import Privacy from './components/Privacy';
import Political from './components/Political'
class App extends Component {

  state= {
    title: 'Disability'
  }

  disability=(e) =>{
    console.log("clicked");
    this.setState({title: e})
    
  }

  privacy(){
    console.log("privacy clicked")
  }

  political(){
   
 return ( <Political/>)

    
   
  }
  render() { 
      const equality = () => {
      console.log('connected')
    }
  
    const freedom = () =>{
      console.log("Free Speech");
      // return <Freedom/>
      return( <Freedom
      image=
      {<img id='image' src={image} alt='science'/>
      }
       heading= {
      <h1 id ='something'> Nondiscrimination and Equality </h1>}
      para={<p> 
        As mentioned above, bias and discrimination have become central topics for those concerned with the governance and social impact of AI systems.20 A number of high profile studies have demonstrated that, as in the case of detecting skin color, certain AI systems are inherently discriminatory. Alarming reports have detailed how discrim-inatory algorithms are already deployed in the justice system, wherein judges use these tools for sentencing that purport to predict the likelihood a criminal defendant will reoffend 
      </p>}
   />
      );
    }

 
    return (  
      <React.Fragment>
      <h1> A HUMAN RIGHTS FRAME FOR AI RISKS AND HARM </h1>
      <div className="topic-box">
        <div id='equality' > <h1 onClick={() => equality()} > equality</h1> </div>
        <div id='political' > <h1 onClick={() =>this.political}> political</h1> </div>
        <div id='privacy' > <Privacy onClick={()=> this.privacy} /></div>
        <div id='freedom' ><h1 onClick={() => freedom()} > freedom</h1>   </div>
        <div id='disability' > <DisAbility clickText={this.disability.bind(this,'Testing')} title={this.state.title} /></div>
      </div>
      <h1> About </h1>
      </React.Fragment>
    );
    }
  }
  
 export default App;
