import React from 'react'
import './talk.css';

const Talk = () => {

    return(
        <div>
            <h1 className='set'>
                Talks
                <img className="img" width='50' src="https://cdn3.iconfinder.com/data/icons/home-activity-1/512/videoconference-meeting-video-conference-communication-256.png"/>
            </h1>
            <div className='talk'>
                <div>                    
                    <b>Oct 2020 | </b> 
                    <a className='link' target="_blank" href='https://gdsc.community.dev/events/details/developer-student-clubs-sindh-madressatul-islam-university-presents-info-session/'>
                        Info Session of Developer Student Club  </a>
                </div>
            </div>
        </div>
    )    
}
export default Talk
