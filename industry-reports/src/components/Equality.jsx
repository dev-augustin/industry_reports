import React from 'react';
import image from '../assets/equality.jpg';

const Equality = () => {
    return ( 
    <div className='main-box' >
      <div>
      <img id='equality-image' src={image} alt='science'/>
      </div>
      <div>
      <h1 id="equality-heading"> Nondiscrimination and Equality </h1>
      <h3 id="equality-subheading">
      Even when there is no intention for discrimination, ML [machine learning] systems for which success is strictly measured in terms of efficiency and profit may end up achieving these at the expense of a company’s responsibility to respect human rights
      </h3>
      <p id="paragraph-1"> 
        Bias and discrimination have become central topics for those concerned with the governance and social impact of AI systems. A number of high profile studies have demonstrated that, as in the case of detecting skin color, certain AI systems are inherently discriminatory. Alarming reports have detailed how discrim-inatory algorithms are already deployed in the justice system, wherein judges use these tools for sentencing that purport to predict the likelihood a criminal defendant will reoffend.
      </p>
      <p id="paragraph-2">
      The importance of equality and nondiscrimination has filtered down through the ratifi-cation of treaties to provide the basis for post-war constitutions, state law, and judicial interpretation. For example, the South African constitution, adopted in 1996, directly accounted for the discriminatory policies of the past. The constitution establishes equality, human dignity, and human rights as its legal foundations and core values.There have been attempts to frame discrimination in machine learning algorithms as a human rights issue, as in a recent World Economic Forum (WEF) report that raised both concerns and possible solutions for biased decision-making. The report calls for human rights to move to the center of AI discussions.
      </p>
      </div>
    </div>
     );
}
 
export default Equality;