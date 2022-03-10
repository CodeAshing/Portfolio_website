import React from 'react'
import './education.css';

const Education = () => {

    return(
        <div>
            <br></br>  <br></br>
          
            <h1 className='set'>
                Education
                <img alt='education' className="img" width='50' src="img/Education.png"/>
            </h1>
            
            <div className='expmain'>

                <div className='expboxe'>                    
                    <b>Sep 18 - Present </b>                
                    <div className="para">
                        Bachelors of computer science (Senior) from Sindh Madressatul Islam University.
                    </div>
                </div>

                <div className='expboxe'>                    
                    <b>Sep 21 - Jan 22 </b>                
                    <div className="para">
                        Fellowship from Global Citizen Year (Academy) 
                    </div>
                </div>

                <div className='expboxe'>                    
                    <b>Mar 18 - Present </b>                
                    <div className="para">
                    Artificial Intelligence diploma from Presidential Initiative for Artificial Intelligence& Computing
                    </div>
                </div>


                <div className='expboxe'>                    
                    <b>Jan 16 - jan 18 </b>                
                    <div className="para">
                        Intermediate from Fazaia Intermediate College 
                    </div>
                </div>

            </div>
            <br></br>  
        </div>
        
    )    
}
export default Education
