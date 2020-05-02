import React from 'react';
import image from '../assets/Disabiltiy_rights.jpg'

export default function Disability(props) {
    return (
        <div className='main-box' >
        <div>
        <img id='disability-image' src={image} alt='science'/>
        </div>
        <div>
        <h1 id ='disability-heading'> DISABILITY RIGHTS APPROACH AND ACCESSIBLE DESIGN</h1>
        <h3 id='disabiltiy-subheading'>
        Disability rights have become emblematic of how technological development increases the risk to vulnerable groups and present a clear opportunity to enhance human rights.
        </h3>
        <p id="paragraph-1">
        The Convention on the Rights of Persons with Disabilities, adopted at the UN in 2006, reaffirms that anyone with a disability should be treated with human dignity and be included in the enjoyment of fundamental human rights.  The convention has been signed by 161 countries and ratified by 177 countries; it reaffirms rights such as nondiscrimination and establishes principles like universal design and accessibility of communications.
      
        </p>
        <p id="paragraph-2">
        Yet fully integrating a human rights approach to building and maintaining AI systems
would require change in tech industry culture and organizations. For example, we
would need to see human rights integrated into product and design teams, not just in
statements of corporate social responsibility. Human rights values would need to be
infused into the workflow of the organization as part of the jobs of employees working
on quality assurance, test suites, and product design documentation. Those working
on disability rights have made great progress – at least at some of the big tech companies – and this can be a model for how to work with other kinds of rights
        </p>
        </div>
        </div>
        );
    }


   