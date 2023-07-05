import React from "react";
import "./experience.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';



export default function Experience() {

  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <h1 className="set">
        Experience
        <img width="50" alt="experience" src="img/experience.png" />
      </h1>

      <Accordion>


      <AccordionItem expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionItemHeading aria-controls="panel1d-content" id="panel1d-header">
            <AccordionItemButton>
              Software Engineer @Beam | Jun 23 - present
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>As an Software Engineer role at Beam where my primary responsibilities include:</p>
            <ul>
            <li><span>🚩</span>Design and develop robust and scalable server-side components.</li>
            <li><span>🚩</span>Collaborate with cross-functional teams to define requirements and build efficient, secure, and reliable APIs and backend services.</li>
            <li><span>🚩</span>Write clean, maintainable, and well-documented code using best practices and design patterns.</li>
            <li><span>🚩</span>Optimise application performance and ensure scalability to handle large volumes of data and user traffic.</li>
            <li><span>🚩</span>Implement data storage and retrieval mechanisms, including databases, caching layers, and search technologies.</li>
            <li><span>🚩</span>Collaborate with the frontend team to define and integrate APIs using OpenAPI specs for seamless data exchange and user experience</li>
            <li><span>🚩</span>Conduct code reviews, identify bugs, and propose solutions to ensure high code quality and system reliability.</li>
            <li><span>🚩</span>Stay up-to-date with industry trends, emerging technologies, and best practices related to backend development.</li>
            <li><span>🚩</span>Troubleshoot and resolve production issues in a timely manner.</li>
            <li><span>🚩</span>Contribute to the continuous improvement of development processes and tools to enhance team productivity and efficiency.</li>
            </ul>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionItemHeading aria-controls="panel1d-content" id="panel1d-header">
            <AccordionItemButton>
              Assistant Team Lead @Star Marketing | Jan 23 - June 23
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>As an Assitant Team Lead role at Star Marketing where my primary responsibilities include:</p>
            <ul>
              <li><span>🚩</span>Guide team development efforts towards successful project delivery.</li>
              <li><span>🚩</span>Provide technical leadership to teammates through coaching and mentorship.</li>
              <li><span>🚩</span>Maintain high standards of software quality within the team by establishing good practices and habits.</li>
              <li><span>🚩</span>Identify and encourage areas for growth and improvement within the team.</li>
              <li><span>🚩</span>Assist in the collection and documentation of user's requirements, development of user stories, estimates and work plans</li>
              <li><span>🚩</span>Prepare reports, manuals and other documentation on the status, operation and maintenance of software.</li>
              <li><span>🚩</span>Design, develop, and unit test applications in accordance with established standards.</li>
              <li><span>🚩</span>Develop, refine, and tune integrations between applications.</li>
              <li><span>🚩</span>Analyze and resolve technical and application problems.</li>
              <li><span>🚩</span>Assess opportunities for application and process improvement and prepare documentation of rationale to share with team members and other affected parties.</li>
              <li><span>🚩</span>Adhere to high-quality development principles while delivering solutions on-time and on-budget.</li>
            </ul>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionItemHeading aria-controls="panel1d-content" id="panel1d-header">
            <AccordionItemButton>
              Software Engineer @Star Marketing | Oct 21 - Dec 22
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>As a Software Engineer role at Star Marketing where my primary responsibilities include:</p>
            <ul>
              <li><span>🚩</span> Develop and implement new features to enhance the customer experience and ensure the delivery of best-in-class solutions.</li>
              <li><span>🚩</span> Take ownership of the production operation and monitoring of systems related to the team's charter, ensuring adherence to SLAs, reliability, and scalability.</li>
              <li><span>🚩</span> Collaborate closely with partners in design, product, ops, program management, and engineering to deliver high-quality solutions and document technical recommendations.</li>
              <li><span>🚩</span> Mentor and guide junior members of the engineering team in areas related to technical and professional growth.</li>
              <li><span>🚩</span> Participate in code reviews and engineering best practices, providing feedback to peers as necessary.</li>
              <li><span>🚩</span> Ensure compliance with security standards and best practices in all development work.</li>
              <li><span>🚩</span> Build, test, and deploy applications in high-traffic production environments.</li>
              <li><span>🚩</span> Use your experience in backend software development with Javascript and Node.js to build reliable and scalable systems.</li>
              <li><span>🚩</span> Use your experience to improve the reliability and scalability of technical systems.</li>
              <li><span>🚩</span> Build effective partnerships with a diverse group of cross-functional peers, contributing to technical outcomes.</li>
              <li><span>🚩</span> Use thoughtfulness and empathy to understand challenges faced by partners and work collaboratively to solve problems for the business.</li>
              <li><span>🚩</span> Have a proven track record of designing, building, and supporting reliable systems in production.</li>
            </ul></AccordionItemPanel>
        </AccordionItem>

        <AccordionItem expanded={expanded === 'panel2'} onChange={handleChange('panel1')}>
          <AccordionItemHeading aria-controls="panel2d-content" id="panel2d-header">
            <AccordionItemButton>
              AI Intern @Moyyn | Jan 21 - Feb 21
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>I had the opportunity to work with a team of developers to build an AI-based architecture for automating the recruitment process. Our goal was to create a system that could take in hundreds of CVs and shortlist the most relevant candidates for a given job.</p>
            <p><b>My role and responsibilities included:</b></p>
            <ul>
              <li><span>🚩</span>Assisted in the development of an AI-based architecture for the recruitment system</li>
              <li><span>🚩</span>Worked with a team to implement natural language processing (NLP) techniques to extract relevant information from CVs</li>
              <li><span>🚩</span>Utilized machine learning algorithms to analyze and rank candidates based on their qualifications and experience</li>
              <li><span>🚩</span>Worked with Python and TensorFlow to develop and train the AI models</li>
              <li><span>🚩</span>Utilized Git for version control and collaboration with team members</li>
              <li><span>🚩</span>Assisted in the implementation and testing of the system, and worked with the team to optimize its performance</li>
              <li><span>🚩</span> Communicated progress and results to the management and stakeholders</li>
            </ul>
            <p>This internship was a great opportunity for me to gain experience in building AI-based systems and working with a team to solve real-world problems. I am excited to continue working in the field of AI and hope to bring my skills to future projects.</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem expanded={expanded === 'panel3'} onChange={handleChange('panel1')}>
          <AccordionItemHeading aria-controls="panel3d-content" id="panel3d-header">
            <AccordionItemButton>
              AI Developer @Alphatrone Technologies | Dec 20 - Jan 21
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>I had the opportunity to work with a team of developers to build an AI-based architecture for automating the recruitment process. Our goal was to create a system that could take in hundreds of CVs and shortlist the most relevant candidates for a given job.</p>
            <p><b>My role and responsibilities included:</b></p>
            <ul>
              <li><span>🚩</span> Led a team of two developers in building a Google Home-type speech recognition project</li>
              <li><span>🚩</span>Utilized over 10 AI-based models working in parallel to produce a better result than Google Home</li>
              <li><span>🚩</span>Developed and implemented a project plan to ensure the project was completed on time and within budget</li>
              <li><span>🚩</span>Collaborated with team members to identify and solve any technical issues that arose during the development process</li>
              <li><span>🚩</span> Developed and trained AI-based models using TensorFlow and PythonUtilized Google Cloud Platform and AWS to deploy the models and run tests on the system</li>
              <li><span>🚩</span>Worked with team members to improve the overall performance and accuracy of the speech recognition system.</li>
              <li><span>🚩</span>Communicated progress and results to the management and stakeholders</li>
              <li><span>🚩</span> Utilized Git for version control and collaboration with team members</li>
              <li><span>🚩</span> Worked with natural language processing (NLP) techniques to improve the system's understanding of spoken language.</li>
            </ul>
            <p>This internship was a great opportunity for me to gain experience in building AI-based systems and working with a team to solve real-world problems. I am excited to continue working in the field of AI and hope to bring my skills to future projects.</p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Artificial Intelligence Engineer @AlCodemist | Jan 20 - Oct 21
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>As an Artificial Intelligence Engineer at AlCodemist, a startup founded by my friend, where I had the opportunity to work with a passionate team of over 10 people. My primary responsibilities included:</p>
            <ul>
              <li><span>🚩</span>Developing a Cheque Verification product using a deep neural network (DNN) pretrained model with Keras to check the validity of a given cheque. </li>
              <li><span>🚩</span> Building a real-time mask detection model using DNN and other computer vision techniques.</li>
              <li><span>🚩</span> Utilizing NLP techniques to extract and process text from cheques</li>
              <li><span>🚩</span>Optimizing the performance of the models and fine-tuning the parameters to improve accuracy. </li>
              <li><span>🚩</span> Participated in code reviews and collaborated with peers to ensure high-quality code.</li>
            </ul>
            <p>I had the opportunity to work with cutting-edge technologies like deep learning, computer vision and NLP, which helped me to improve my problem-solving, analytical, and technical skills. Additionally, I had the chance to work with a team of passionate and talented engineers, which helped me to improve my teamwork and communication skills. I am excited to continue working in the field of Artificial Intelligence and hope to bring my skills to future projects.</p>
          </AccordionItemPanel>
        </AccordionItem>

      </Accordion>




    </div>

  );
};
