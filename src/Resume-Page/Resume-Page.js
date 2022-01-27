import resumeData from './Resume-data.json';
import { useEffect } from 'react';
import './Resume-Page.css';
import { populateEducationSection, populateWorkSection, } from './Resume-Page-Functions';
import SkillsComponent from './Skills-Component';

const returnsJSX = () => {

  let contents = "contents"

  let openDiv = <div>{contents}</div>


  return <div>{openDiv} aaand {contents}</div>
  
}


// let keys = Object.getkeys(resumeData);
// const obj = { 0: 'a', 1: 'b', 2: 'c' };
// console.log(Object.keys(resumeData)); // console: ['0', '1', '2']
// console.log(Object.keys(resumeData.basics)); // console: ['0', '1', '2']

// console.log(Object.values(resumeData)); // console: ['0', '1', '2']

// console.log(Object.values(resumeData.basics)); // console: ['0', '1', '2']
// console.log(resumeData.basics.name); // console: ['0', '1', '2']

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

        <div className ="section-div">
          <SkillsComponent/>


        </div>

        <div className="section-div"> 
        
            <div id="work-container" className="five-column-grid-container">
            
             
            </div>
        </div>
        
      
        <div className ="section-div">
          <div id="education-container" className="five-column-grid-container">
         

          </div>
          
      </div>
        
      {returnsJSX()}
      </div>
 
    




      
</div>
        
    );
  }
  
  export default ResumeActual;



