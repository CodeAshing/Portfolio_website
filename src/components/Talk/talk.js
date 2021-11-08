import React from 'react'
import './talk.css';

const Talk = () => {

    return(
        <div>
            <h1 className='set'>
                Talks
                <img alt='talk' className="img" width='50' src="https://cdn3.iconfinder.com/data/icons/home-activity-1/512/videoconference-meeting-video-conference-communication-256.png"/>
            </h1>
            <div className='talk'>
            <div className='talk'>                    
                    <b>Nov 2021 | </b> 
                    <a className='link' target="_blank" href='https://youtu.be/kfL-uCmV6Uk'>
                        Interview at Sindh Madressatul Islam University </a>
                </div>
                <div className='talk'>                    
                    <b>Oct 2021 | </b> 
                    <a className='link' target="_blank" href='https://www.linkedin.com/feed/update/urn:li:activity:6851113881838882817/'>
                        Info Session of Developer Student Club 2021  </a>
                </div>
                <div className='talk'>                    
                    <b>Sep 2021 | </b> 
                    <a className='link' target="_blank" href='https://www.facebook.com/ieeeuett/photos/pb.279195392149858.-2207520000../4357307024338654/?type=3&theater'>
                        Speaker session at IEEE UET Taxila  </a>
                </div>
                <div className='talk'>                    
                    <b>Jun 2021 | </b> 
                    <a className='link' target="_blank" href='https://www.youtube.com/watch?v=ZQe-cXeHYXw&t=64s'>
                        Interview with The Wiz  </a>
                </div>                
                <div className='talk'>                    
                    <b>Oct 2020 | </b> 
                    <a className='link' target="_blank" href='https://gdsc.community.dev/events/details/developer-student-clubs-sindh-madressatul-islam-university-presents-info-session/'>
                        Info Session of Developer Student Club 2020 </a>
                </div>
            </div>
        </div>
    )    
}
export default Talk
