import resumeData from './Resume-data.json';
import { useEffect } from 'react';
import './Resume-Page.css';
import { populateEducationSection, populateWorkSection, populateTechnicalSection } from './Resume-Page-Functions';



function ResumeActual() {


  useEffect(() => {
    populateWorkSection(resumeData, "Experience");
    populateEducationSection(resumeData, "Education");  
    populateTechnicalSection(resumeData, "Technical Skills")
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
        <div className="heading-title">Skills</div>
        <div className="skills">Skill1</div>
        <div className="skills">Skill2</div>
        <div className="skills">Skill3</div>
        <div className="skills">Skill3</div>
      

        <div className="section-div"> 
        
        <div id="technical-container" className="five-column-grid-container">
        <div>SDS</div>
        <div>SDSSD</div>
        <div>SDS</div>
        <div>SDSSD</div>
        <div> LAST</div>

        </div>
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



