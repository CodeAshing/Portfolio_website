import React from 'react'
import './Introduction.css';

const Introduction = () => {

    return(
        <div>
            <h1 className='set'>
                Asharib Ahmed
            </h1>
            <div className='lines'>
            Former DSC Lead at Google Developers | α Microsoft Learn Student Ambassador 
            | Ambassador @ Deeplearning.ai | AWS Community Builder | AI Enthusiast | MERN Stack | Learner
            </div>
            <div className='icons'>
                <a href='https://www.linkedin.com/in/itsasharib' target="_blank" className='f_icon'> 
                    <img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_color-128.png"
                    alt="LinkedIn" width='50px'/>
                 </a>

                <a href='https://twitter.com/asharib90' target="_blank" className='icon'> 
                    <img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/twitter_circle_color-128.png"
                    alt="Twitter" width='50px'/>
                 </a>

                <a href='https://asharib.medium.com/' target="_blank" className='icon'> 
                    <img src="https://cdn4.iconfinder.com/data/icons/black-white-social-media/32/social_media_logo_medium-256.png"
                    alt="Medium" width='50px'/>
                 </a>

                <a href='https://github.com/Asharib90' target="_blank" className='icon'> 
                    <img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/github_circle_color-128.png"
                    alt="Github" width='50px'/>
                 </a>

                 <a href='mailto: asharibahmed143@gmail.com' target="_blank" className='icon'> 
                    <img src="https://cdn0.iconfinder.com/data/icons/lumin-social-media-icons/512/Gmail-256.png"
                    alt="Gmail" width='50px'/>
                 </a>

                 <a href='https://bit.ly/3CwnQKx' target="_blank" className='icon'> 
                    <img src="https://cdn1.iconfinder.com/data/icons/business-people-orchid-vol-2-1/1000/Resume-256.png"
                    alt="Resume" width='50px'/>
                 </a>
            </div>
        </div>
    )    
}
export default Introduction
