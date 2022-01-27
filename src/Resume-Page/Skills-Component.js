


import resumeData from './Resume-data.json';
import { skills } from './Resume-Page-Contants';
import { createListFromArray } from './Resume-Page-Functions'

console.log("Object.values(resumeData)",(Object.values(resumeData.skills))[0].keywords)


let skillsArray = (Object.values(resumeData.skills))[0].keywords





function SkillsComponent() {
    return (
      <div className="SkillsComponent" className="five-column-flex-container">

            <div className="heading-title">1 </div>
            {createListFromArray(skillsArray)}
                     </div>
    );
  }

  export default SkillsComponent