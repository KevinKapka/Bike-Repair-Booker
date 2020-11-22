import React from 'react'
import './About.scss'
import nameLogo from '../../svgs/nameLogo.svg'

function About() {
    return (
        <div className='About'>

            <div className='page-header'>
                <h1>MEET CYCLEFIX</h1>
            </div>

            <div className='page-body'>
                <div className='img-container'>
                    <img src='./img.svg' alt='owner picture' className='owner-pic'/>
                    <img src={nameLogo} alt='name logo' className='name-logo'/>
                </div>

                <article>
                    <p>
                        Kevin is the founder and operator of Houston CycleFix. He answers each and every mobile bicycle repair appointment.
                    </p>
                    <p>
                        He has a background in etc. Lighthearted facts about how Kevin rides. He’s so personable. Yada Yada. Wow Kevin. I trust you to come to my home now. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>    
                </article>

            </div>    


        </div>
    )
}

export default About
