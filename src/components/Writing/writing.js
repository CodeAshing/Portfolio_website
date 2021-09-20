import React from 'react'
import './writing.css';

const Writing = () => {

    return(
        <div>
            <h1 className='set'>
                Writing
                <img alt='writing' className="img" width='50' src="https://cdn3.iconfinder.com/data/icons/comforting-things-2/128/notebook_diary_writing_reading_pencil-256.png"/>
            </h1>
            <div className='write'>
                <div>                    
                    <b>March 2021 | </b> 
                    <a className='link' target="_blank" href='https://asharib.medium.com/adopt-10x-approach-in-computer-science-degree-9767ee7caf76'>
                        Adopt 10x approach in Computer Science Degree </a>
                </div>
            </div>
        </div>
    )    
}
export default Writing
