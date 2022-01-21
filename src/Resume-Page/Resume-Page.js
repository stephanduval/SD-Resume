import resumeData from './Resume-data.json';
import { useEffect } from 'react';
import './Resume-Page.css';
import { showWork, populateWorkSection } from './Resume-Page-Functions';

let basics ="basics";
let name = "name";

let param = "basics.name";
// const resumeDataParsed = JSON.parse(resumeData);
const resumeDataString = JSON.stringify(resumeData.work);


console.log("resumeDataString",resumeDataString)
console.log("JSON",resumeData.work)
// console.log("JSON LENGTH",object.keys(resumeData).length())
// console.log("resumeDataParsed",resumeDataParsed)
// }


function ResumeActual() {


  useEffect(() => {
    populateWorkSection(resumeData);  });

    return (
      <div className="ResumePage">
      <div className="grid-container">
        <div className="resume-header">Stephan Douglas DuVal
        <div>Full Stack Developer</div>
        </div>
        <div className="contact-information">Download
        <div>778-788-3800</div>
        <div>stephan.duval@gmail.com</div>
        </div>
        <div className="row-title">profile</div>
        <div className="profile">A profile card</div>
        <div className="row-title">Skills</div>
        <div className="skills">Skill1</div>
        <div className="skills">Skill2</div>
        <div className="skills">Skill3</div>
        <div className="skills">Skill3</div>

        <div className="row-title">Technical</div>
        <div className="technical">A technical card</div>
        <div className="workDiv">
        
            <div id="work-container" className="work-container">
              <div id="work-title" className="work-title">DEFAULT Title</div>
              <div id="work-text" className="work-text">default text</div>
              <div id="work-date" className="work-date">default date</div>
             
            </div>
        </div>
        {/* START OF WORK LOOP */}
        



        {/* END OF WORK LOOP */}
        <div className="row-title">Education</div>
        <div className="education">An education card</div>

      </div>
      <div id="div1">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>
    
      {(JSON.stringify(resumeData.basics.name))}
      <br></br>
     {/* parse {parseSpeficiedDataFRomResumeJSON(resumeData,basics,name)} */}
      <br></br>
    {/* test JSON Function {testJSONFunction(param)} */}
    <br></br>
      {/* {mapJSONData(resumeData)} */}
      ResumeActual  





      
</div>
        
    );
  }
  
  export default ResumeActual;



