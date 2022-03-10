import React from 'react'
import './experience.css';

const Experience = () => {

    return(
        <div>
            <h1 className='set'>
                Experience
                <img width='50'alt='experience' src="img/experience.png"/>
            </h1>
            
            <div className='expmain'> 

                <div className='expboxe'>                    
                    <b>Data Scientist | Oct 21 - Present </b>                
                    <div className="para">
                        @Star Marketing.
                    </div>
                </div>
                
                <div className='expboxe'>                    
                    <b>Data Science and Business Analytics Intern | Sep 21 - Oct 21 </b>                
                    <div className="para">
                        @Spark Foundation, I developed a Deep Learning based model from the given Iris dataset,
                        predict the optimum number of clusters and represented that visually.
                    </div>
                </div>

                <div className='expboxe'>                     
                    <b>Data Science Intern | Sep 21 - Oct 21 </b>                
                    <div className="para">
                        @LetsGrowMore, I was working completely vitually and I was working on a problems like 
                        prediction using decision tree algorithm, ML facial recognition to detect mood and suggest songs accordingly
                        and Develop a neural network that can read handwriting.
                    </div>
                </div>

                <div className='expboxe'>                    
                    <b>Data Engineer | Aug 21 - Sep 21 </b>                
                    <div className="para">
                        @ANZ, it was completely internship with flexible timeing and I was working
                        on two tasks, exploratory data analysis and predictive analytics. 
                    </div>
                </div>

                <div className='expboxe'>                    
                    <b>Data Analyst | July 21 - Aug 21 </b>                
                    <div className="para">
                        @KPMG, I was working on three tasks, data quality assesment, data exploration, and data visualization. 
                    </div>
                </div>


                <div className='expboxe'>                    
                    <b>AI Intern | Jan 21 - Feb 21 </b>                
                    <div className="para">
                        @Moyyn, I was working in a team which was building AI base architecture to automating the recruitment process. 
                        Which takes hundreds of CVs and shortlist just most relevant to the job system. 
                    </div>
                </div>

                
                <div className='expboxe'>                    
                    <b>AI Developer | Dec 20 - Jan 21 </b>                
                    <div className="para">
                        @Alphatrone Technologies, I have led team of two inspiring developers to build an Google Home type 
                        speech recognition project where 10+ AI based model working parralel to produce better result than Google Home. 
                    </div>
                </div>

            </div>
        </div>
    )    
}
export default Experience
