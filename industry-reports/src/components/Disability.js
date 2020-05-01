import React from 'react';
import image from '../assets/Disabiltiy_rights.jpg'

export default function Disability(props) {
    return (
        <div className='main-box' >
        <div>
        <img id='disability-image' src={image} alt='science'/>
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


   