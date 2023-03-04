import React from "react";
import "./petProjects.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';



const PetProjects = () => {
  return (
    <div>
      <h1 className="set">
        Projects
        <img className="img" width="50" src="img/Projects.png" />
      </h1>

      {/* <div className="expmain"> */}

      <Accordion>


        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Enterprise resource planning (ERP)
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>The Enterprise Resource Planning (ERP) project is a comprehensive system designed to manage the wholesale, payment, finance, expenses, and overall process of a real estate business. I was the lead developer on this project and was responsible for the following:</p>
            <ul>
              <li><span>🚩</span> Developing the entire back-end system</li>
              <li><span>🚩</span> Designing the database architecture</li>
              <li><span>🚩</span>Managing the CI/CD pipeline </li>
              <li><span>🚩</span> Leading the front-end team for website and mobile development </li>
              <li><span>🚩</span>Training employees on how to use the system effectively </li>

            </ul>
            <p>This project has been in development for over a year and is now ready to be implemented in the organization. The ERP system will streamline and automate various business processes, providing real-time visibility into key metrics and data, and improve overall efficiency and productivity. The project will ultimately help the real estate business to make better and informed decisions.</p>
          </AccordionItemPanel>
        </AccordionItem>



        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Attendance Application (SAAS)
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>I have worked on a SAAS attendance system application that utilizes QR-based attendance marking and utilizes location data to validate the presence of a person on site.
            </p>
            <ul>
              <li><span>🚩</span>Developed the backend of the SAAS attendance system using various technologies such as Node.js, Express, and MongoDB </li>
              <li><span>🚩</span>  Implemented the business logic for the QR-based attendance marking and location validation functionality</li>
              <li><span>🚩</span> Designed and implemented the database architecture for storing and retrieving attendance records</li>
              <li><span>🚩</span>Conducted research to determine the best technologies for the project, including but not limited to face recognition and location services </li>
              <li><span>🚩</span>Managed the CI/CD pipeline using tools such as Jenkins and GitHub for continuous integration and deployment on VPC </li>
              <li><span>🚩</span> Responsible for testing and quality assurance of the application, including functional and non-functional testing </li>
              <li><span>🚩</span> Utilized face recognition technology for user login </li>
              <li><span>🚩</span>  Implemented security measures such as encryption and access controls to protect sensitive data</li>
              <li><span>🚩</span> Monitored and maintained the application's performance and scalability. </li>

            </ul>
          </AccordionItemPanel>
        </AccordionItem>



        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Finance Portal
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>I have worked on a finance portal for managing the loan application process for real estate properties. My responsibilities included:</p>
            <ul>
              <li><span>🚩</span>Developing the backend of the project using technologies such as Node.js, Express, and MongoDB </li>
              <li><span>🚩</span> Managing the CI/CD pipeline to ensure continuous integration and deployment</li>
              <li><span>🚩</span>  Conducting research and development to determine the best technologies and solutions for the project</li>
              <li><span>🚩</span>  Integrating the portal with a CRM system such as itrix and adding webhooks for seamless communication</li>
              <li><span>🚩</span> Implementing real-time functionality using web sockets for live updates</li>
              <li><span>🚩</span>Integrating push notifications using Firebase to keep users informed about the status of their loan applications</li>
              <li><span>🚩</span>Managing the project and ensuring its smooth operation and performance </li>

            </ul>
            <p>The loan application process is a critical and complex process, the finance portal I worked on, streamline the process, improve communication and increase efficiency.</p>
          </AccordionItemPanel>
        </AccordionItem>




        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Social Manager
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>I have worked on a project called Social Manager, an application that allows users to post on multiple social media platforms with just one post. My responsibilities included:</p>
            <ul>
              <li><span>🚩</span> Developing the backend of the project using technologies such as Node.js, Express and MongoDB</li>
              <li><span>🚩</span> Integrating APIs from popular social media platforms like Facebook, YouTube, Instagram, and LinkedIn </li>
              <li><span>🚩</span> Implementing functionality to upload images and videos to an S3 bucket </li>
              <li><span>🚩</span>Managing the project and ensuring its smooth operation and performance </li>

            </ul>
            <p>Social Manager is a powerful tool for managing social media presence, with this application users can save time and effort by managing all their social media accounts in one place. The integration with multiple platforms, S3 bucket for media upload and the backend I developed make it a reliable and efficient application.</p>
          </AccordionItemPanel>
        </AccordionItem>





      </Accordion>
      {/* <div className="">
        <div className="expboxe">
          <b>Enterprise resource planning (ERP) </b>
          <div className="para">
            The Enterprise Resource Planning (ERP) project is a comprehensive system designed to manage the wholesale, payment, finance, expenses, and overall process of a real estate business. I was the lead developer on this project and was responsible for the following:

            <br /><br /><b />🚩 Developing the entire back-end system
            <br /><b />🚩 Designing the database architecture
            <br /><b />🚩 Managing the CI/CD pipeline
            <br /><b />🚩 Leading the front-end team for website and mobile development
            <br /><b />🚩 Training employees on how to use the system effectively
            <br /><br /><b /> This project has been in development for over a year and is now ready to be implemented in the organization. The ERP system will streamline and automate various business processes, providing real-time visibility into key metrics and data, and improve overall efficiency and productivity. The project will ultimately help the real estate business to make better and informed decisions.
          </div>
        </div>

        <div className="expboxe">
          <b>Attendance Application (SAAS)</b>
          <div className="para">
            I have worked on a SAAS attendance system application that utilizes QR-based attendance marking and utilizes location data to validate the presence of a person on site.

            <br /><br /><b />🚩 Developed the backend of the SAAS attendance system using various technologies such as Node.js, Express, and MongoDB
            <br /><b />🚩 Implemented the business logic for the QR-based attendance marking and location validation functionality
            <br /><b />🚩 Designed and implemented the database architecture for storing and retrieving attendance records
            <br /><b />🚩 Conducted research to determine the best technologies for the project, including but not limited to face recognition and location services
            <br /><b />🚩 Managed the CI/CD pipeline using tools such as Jenkins and GitHub for continuous integration and deployment on VPC
            <br /><b />🚩 Responsible for testing and quality assurance of the application, including functional and non-functional testing
            <br /><b />🚩 Utilized face recognition technology for user login
            <br /><b />🚩 Implemented security measures such as encryption and access controls to protect sensitive data
            <br /><b />🚩 Monitored and maintained the application's performance and scalability.
          </div>
        </div>

        <div className="expboxe">
          <b>Finance Portal</b>
          <div className="para">
            I have worked on a finance portal for managing the loan application process for real estate properties. My responsibilities included:

            <br /><br /><b />🚩 Developing the backend of the project using technologies such as Node.js, Express, and MongoDB
            <br /><b />🚩 Managing the CI/CD pipeline to ensure continuous integration and deployment
            <br /><b />🚩 Conducting research and development to determine the best technologies and solutions for the project
            <br /><b />🚩 Integrating the portal with a CRM system such as itrix and adding webhooks for seamless communication
            <br /><b />🚩 Implementing real-time functionality using web sockets for live updates
            <br /><b />🚩 Integrating push notifications using Firebase to keep users informed about the status of their loan applications
            <br /><b />🚩 Managing the project and ensuring its smooth operation and performance
            <br /><br />The loan application process is a critical and complex process, the finance portal I worked on, streamline the process, improve communication and increase efficiency.
          </div>
        </div>

        <div className="expboxe">
          <b>Social Manager</b>
          <div className="para">
            I have worked on a project called Social Manager, an application that allows users to post on multiple social media platforms with just one post. My responsibilities included:

            <br /><br /><b />🚩 Developing the backend of the project using technologies such as Node.js, Express and MongoDB
            <br /><b />🚩 Integrating APIs from popular social media platforms like Facebook, YouTube, Instagram, and LinkedIn
            <br /><b />🚩 Implementing functionality to upload images and videos to an S3 bucket
            <br /><b />🚩 Managing the project and ensuring its smooth operation and performance
            <br /><br />Social Manager is a powerful tool for managing social media presence, with this application users can save time and effort by managing all their social media accounts in one place. The integration with multiple platforms, S3 bucket for media upload and the backend I developed make it a reliable and efficient application.
          </div>
        </div>

      </div> */}
      <br></br>
    </div>
  );
};
export default PetProjects;
