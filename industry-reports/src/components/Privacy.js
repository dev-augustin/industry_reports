// import React from 'react'

// const Privacy = (props) => {
//     return(
//         <button onClick={props}> Click Privacy</button>
//     )
// }

// export default Privacy;

import React, { Component } from 'react'

export default class Privacy extends Component {
    handleClick(){
        console.log('Clicking Privacy')
    }
    
    render() {
        return (
            <div>
               <h1 onClick={this.handleClick}> Click Privacy</h1> 
               <p> 
        As mentioned above, bias and discrimination have become central topics for those concerned with the governance and social impact of AI systems.20 A number of high profile studies have demonstrated that, as in the case of detecting skin color, certain AI systems are inherently discriminatory. Alarming reports have detailed how discrim-inatory algorithms are already deployed in the justice system, wherein judges use these tools for sentencing that purport to predict the likelihood a criminal defendant will reoffend 
      </p>
            </div>
        )
    }
}
