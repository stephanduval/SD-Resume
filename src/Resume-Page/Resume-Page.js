import resumeData from './Resume-data.json';
import { useEffect } from 'react';
import './Resume-Page.css';
import { populateEducationSection, populateWorkSection, } from './Resume-Page-Functions';
import SkillsComponent from './Skills-Component';
import ExperienceComponent from './Experience-Component';


function ResumeActual() {


  useEffect(() => {
    populateWorkSection(resumeData, "Experience");
    populateEducationSection(resumeData, "Education");  
  });

    return (
      <div className="ResumePage">
      <div className="grid-container">
        <div className="resume-header">Name Name Name
        <div>Job Job Job</div>
        </div>
        <div className="contact-information">Download
        <div>778-788-3800</div>
        <div>stephan.duval@gmail.com</div>
        </div>
        <div className="heading-title">profile</div>
        <div className="profile">A profile card</div>
        
      

        <div className ="section-div">
          <SkillsComponent/>


        </div>

        
        <div className ="section-div">
          <ExperienceComponent/>


        </div>

        <div className="section-div"> 
        
            <div id="work-container" className="five-column-grid-container">
            
             
            </div>
        </div>
        
      
        <div className ="section-div">
          <div id="education-container" className="five-column-grid-container">
         

          </div>
          
      </div>
        
      </div>
 
    




      
</div>
        
    );
  }
  
  export default ResumeActual;



