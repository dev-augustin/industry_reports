import React from 'react'
import image from '../Assets/newImage.png'

export default function Freedom(props) {
    return (
        <div className='main-box' >
        <div>
        <img id='image' src={image} height=alt='science'/>
        </div>
        <div>
        <h1 id ='something'> FREEDOM OF EXPRESSION </h1>
        <p>
        The right to freedom of expression is particularly important in an environment wherein social media platforms use algorithms that decide whose voices we hear.
        </p>
        <p>
        As social media platforms become the central place where public discussion happens, there is a strong debate about the role of platforms in content moderation
        </p>
        </div>
        </div>
        );
    }

