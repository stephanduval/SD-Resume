import resumeData from './Resume-data.json';
import './Resume-Page.css';

let basics ="basics";
let name = "name";

let param = "basics.name";

const mapJSONData = (JSONData) => {
  JSONData.map(post => {
    return(
      <div>
        <h4>{post}</h4>
        {/* <p> {post.url}</p> */}
      </div>
    )
  })
}

// }

function ResumeActual() {
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
        <div className="row-title">Experience</div>
        <div className="experience">An experience card</div>
        <div className="date"> 2001-2007  </div>
        <div className="row-title">Education</div>
        <div className="education">An education card</div>

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



