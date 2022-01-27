


import { constants } from './Resume-Page-Contants';
import { createFlexListFromArray } from './Resume-Page-Functions'



let skillsArray = constants.skillsArray





function SkillsComponent() {
    return (
      <div id="SkillsComponent" className="five-column-grid-container">
        <div className="heading-title">{constants.skillsHeading}</div>
        <div className="row-two-to-six-text-field">

            <div id="SkillsFlexContainer" className="five-column-flex-container">
            
                {createFlexListFromArray(skillsArray)}
            </div>
          </div>
      </div>
    );
  }

  export default SkillsComponent