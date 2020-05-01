import React from 'react';
import image from '../Assets/newImage.png'

export default function Disability(props) {
    return (
        <div className='main-box' >
        <div>
        <img id='image' src={image} alt='science'/>
        </div>
        <div>
        <h1 id ='something'> DISABILITY RIGHTS APPROACH AND ACCESSIBLE DESIGN</h1>
        <p>
        The Convention on the Rights of Persons with Disabilities, adopted at the UN in 2006, reaffirms that anyone with a disability should be treated with human dignity and be included in the enjoyment of fundamental human rights.
        </p>
        <p>
        Disability rights have become emblematic of how technological development increases the risk to vulnerable groups. They also present a clear opportunity to enhance human rights.
        </p>
        </div>
        </div>
        );
    }


    //const textClick = this.props.textClick
//     return (
//         <div>
//             <h1 onClick={props.clickText}>{props.title}</h1>
//             {/* <p> lorem20 cxzc xz xz</p> */}
//             <p> 
//         As mentioned above, bias and discrimination have become central topics for those concerned with the governance and social impact of AI systems.20 A number of high profile studies have demonstrated that, as in the case of detecting skin color, certain AI systems are inherently discriminatory. Alarming reports have detailed how discrim-inatory algorithms are already deployed in the justice system, wherein judges use these tools for sentencing that purport to predict the likelihood a criminal defendant will reoffend 
//       </p>
//         </div>
//     )
// }

{/* <div className='main-box' >
<div>
<img id='image' src={image} alt='science'/>
</div>
<div>
<h1 id ='something'> Nondiscrimination and Equality </h1>
<p> 
  As mentioned above, bias and discrimination have become central topics for those concerned with the governance and social impact of AI systems.20 A number of high profile studies have demonstrated that, as in the case of detecting skin color, certain AI systems are inherently discriminatory. Alarming reports have detailed how discrim-inatory algorithms are already deployed in the justice system, wherein judges use these tools for sentencing that purport to predict the likelihood a criminal defendant will reoffend 
</p>
</div>
</div> */}
