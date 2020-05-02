import React from 'react'
import image from '../assets/freedom1.jpg'

export default function Freedom(props) {
    return (
        <div className='main-box' >
        <div>
        <img id='freedom-image' src={image} alt='science'/>
        </div>
        <div>
        <h1 id ='freedom-heading'> FREEDOM OF EXPRESSION </h1>
        <h3 id='freedom-subheading'>
        The right to freedom of expression is particularly important in an environment wherein social media platforms use algorithms that decide whose voices we hear. 
        </h3>
        <p id="paragraph-1">
        The right to freedom of expression is a cornerstone of fundamental human rights found in Article 19 of both the Universal Declaration and the ICCPR. As social media platforms become the central place where public discussion happens, there is a strong debate about the role of platforms in content moderation. With hate speech, false news, and media manipulation circulating on platforms like Facebook and Twitter, legislators and the public are calling for companies to address the problem.
        </p>
        <p id="paragraph-2">
        These calls to action are met with concerns about how private companies can meaningfully determine the boundaries of speech. For example, David Kaye, the UN’s special rapporteur on the right to freedom of opinion and expression, has expressed concern that content moderation systems could, even unintentionally, censor minority opinions and other unpopular yet critical forms of free expression.48 The NYU’s Center for Business and Human Rights argues for more governance of technology platforms but states that government intervention can also do harm.
        </p>
        </div>
        </div>
        );
    }

