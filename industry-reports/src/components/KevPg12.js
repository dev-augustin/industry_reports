import React from 'react';

class Kev_Pg12 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 

         };
        }
        
        render() {
            const political = () => {
                console.log('Political tip')
            }
        return (
            <div>
                <h2 className="kev-title-politic"> POLITICAL PARTICIPATION </h2>
                    <h2 id="side-pg-div"> Platforms are more likely to remove bots because they violate their terms of
                    service rather than to protect users’ right to political participation. 
                    </h2>
                    <p id="kev-paragraph">  Bots have many useful purposes, including helping search engines find content. Because AI is being designed to mimic human behavior in online conversations, detecting those online bots that are weaponized to spread disinformation in political discourse could become more difficult. Further studies have demonstrated that bots have and continue to be used to manipulate the media in countries
                    across the world to interfere with the outcomes of democratic elections.(35)

                    <br/>
                    <br/>
                    <br/>

                    The rights around political participation are referenced, for example, in the right to
                    self-determination and the right to equal participation in political and public affairs in
                    the ICCPR. Viewed through this human rights lens, the co-opted use of an automated
                    system by a bad-faith actor creates a human rights liability that demands redress. Yet
                    finding the right remedy is one of the most contentious areas in platform technology
                    today. Platforms are more likely to remove bots because they violate their terms of
                    service rather than to protect users’ right to political participation. Further exploration
                    would be needed to see how human rights principles could inform contractual disputes or litigation in this context.</p>

            </div>
        );
    }
}

export default Kev_Pg12;