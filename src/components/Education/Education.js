import React from 'react'
import './education.css';

const Education = () => {

    return(
        <div>
            <h1 className='set'>
                Education
                <img className="img" width='50' src="https://cdn1.iconfinder.com/data/icons/scenarium-vol-12/128/012_036-256.png"/>
            </h1>
            
            <div className='exp'>

                <div>                    
                    <b>Sep 18 - Present </b>                
                    <div className="para">
                        Bachelors of computer science (Senior) from Sindh Madressatul Islam University.
                    </div>
                </div>

                <div>                    
                    <b>Sep 21 - Present </b>                
                    <div className="para">
                        Fellowship from Global Citizen Year (Academy) 
                    </div>
                </div>

                <div>                    
                    <b>Mar 18 - Present </b>                
                    <div className="para">
                    Artificial Intelligence diploma from Presidential Initiative for Artificial Intelligence& Computing
                    </div>
                </div>


                <div>                    
                    <b>Jan 16 - jan 18 </b>                
                    <div className="para">
                        Intermediate from Fazaia Intermediate College 
                    </div>
                </div>

            </div>
        </div>
    )    
}
export default Education
