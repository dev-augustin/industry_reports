import React from 'react';
import MikePoliticalSlide from '../images/MikePoliticalSlide.jpg'

class PoliticalPg12 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            equality: false,
            privacy: false,
            political: false,
            freedom: false,
            disability: false
         };
        }
        
        render() {
                // if (this.state.)
                //two functions one to check is this.state.click is full ret null 
                // 2nd func cahnges state --> this.setState: true;

        return (
            <div className="main-poli-box">
                <div>
                    <img id="poli-image" src={""} alt="political-pic"/>
                </div>
                <h2 className="kev-title-politic"> POLITICAL PARTICIPATION </h2>
                    <h2 id="side-pg-div"> Platforms are more likely to remove bots because they violate their terms of
                    service rather than to protect users’ right to political participation. 
                    </h2>
                    <p id="kev-paragraph">  Bots have many useful purposes, including helping search engines find content. Because AI is being designed to mimic human behavior in online conversations, detecting those online bots that are weaponized to spread disinformation in political discourse could become more difficult. Further studies have demonstrated that bots have and continue to be used to manipulate the media in countries
                    across the world to interfere with the outcomes of democratic elections.(35)
                    <br />
                    The rights around political participation are referenced, for example, in the right to
                    self-determination and the right to equal participation in political and public affairs in
                    the ICCPR. Viewed through this human rights lens, the co-opted use of an automated
                    system by a bad-faith actor creates a human rights liability that demands redress. Yet
                    finding the right remedy is one of the most contentious areas in platform technology
                    today. Platforms are more likely to remove bots because they violate their terms of
                    service rather than to protect users’ right to political participation. Further exploration
                    would be needed to see how human rights principles could inform contractual disputes or litigation in this context.</p>

                    <PoliticalPg12 />
            </div>
        );
    }
}

export default PoliticalPg12;