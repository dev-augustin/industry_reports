import React from 'react';
// @ts-ignore
import MikePoliticalSlide from '../assets/MikePoliticalSlide.jpg'
import '../style/PoliticalPg12.css';

class Political extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 

         };
        }
        
        render() {
                // if (this.state.)
                //two functions one to check is this.state.click is full ret null 
                // 2nd func cahnges state --> this.setState: true;

        return (
            <div className="main-poli-box">
              <div>  
                  <img className="poli-image" src={ MikePoliticalSlide } alt="political-pic"/>
              </div>
                <div>
                  <h2 className="kev-title-politic"> Political Participation </h2>
                    <h3 id="side-pg-div"> Platforms are more likely to remove bots because they violate their terms of service rather than to protect users’ right to political participation. 
                    </h3>
                      <p id="kev-paragraph">  Bots have many useful purposes, including helping search engines find content. Because AI is being designed to mimic human behavior in online conversations, detecting those online bots that are weaponized to spread disinformation in political discourse could become more difficult. Further studies have demonstrated that bots have and continue to be used to manipulate the media in countries across the world to interfere with the outcomes of democratic elections.(35) 
                      <br/>
                      <br/>
                      The rights around political participation are referenced, for example, in the right to self-determination and the right to equal participation in political and public affairs in
                      the ICCPR. Viewed through this human rights lens, the co-opted use of an automated
                      system by a bad-faith actor creates a human rights liability that demands redress. Yet
                      finding the right remedy is one of the most contentious areas in platform technology
                      today. Platforms are more likely to remove bots because they violate their terms of
                      service rather than to protect users’ right to political participation. Further exploration
                      would be needed to see how human rights principles could inform contractual disputes or litigation in this context.</p>
                  </div>
            </div>
        );
    }
}

export default Political;