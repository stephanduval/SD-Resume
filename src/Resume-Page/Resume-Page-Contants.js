import resumeData from './Resume-data.json'
import { capitalizeFirstLetter } from './Resume-Page-Functions';

const getSkillsArray = () => {
    let iterations = 0;
    let stringArray = [];
    while (iterations < Object.values(resumeData.skills).length ) {
        stringArray = stringArray.concat(Object.values(resumeData.skills)[iterations].keywords);
        iterations++
    }
    iterations = 0;
    while (iterations < Object.values(resumeData.projects).length ) {
        stringArray = stringArray.concat(Object.values(resumeData.projects)[iterations].keywords);
        iterations++
    }

    stringArray = [...new Set(stringArray)];
    return stringArray  
}

console.log('getSkillsArray',getSkillsArray())

export const constants = {
    ExperienceHeading: capitalizeFirstLetter(Object.keys(resumeData)[1]),
    skillsHeading: capitalizeFirstLetter(Object.keys(resumeData)[6]),
    skillsArray: getSkillsArray()   
}

