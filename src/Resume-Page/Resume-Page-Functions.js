
import resumeData from './Resume-data.json'


const basics ="basics";
const profiles = "profiles";
const network = "network";


export const testJSONFunction = (parameter) => {
    let final = JSON.stringify(resumeData.parameter,null,2);

    return (final)
}


export const parseSpeficiedDataFRomResumeJSON = (resumeData,tier1,tier2,tier3)=> {

  /*   function parseSpeficiedDataFRomResumeJSON = (stringifiedJSONDATA,tier1,tier2,tier3)=> {}
  % 
  % Author1: S. DuVal stephan.duval@gmail.com
  % Author2: I worked alone  
  % Date:    Jan 2022 
  % 
  % Function   : Parse JSON Data
  % 
  % Description: This function takes the RESUME JSON file 
  %               and uses the JSON headings to retrieve the 
  %               values under each heading
  % 
  % 
  % Parameters : 
  %              stringifiedJSONDATA: the stringifiedJSON DATA
  %              tier1: a string cast as a variable with the first JSON Heading
  %              tier2: a string cast as a variable with the second JSON Heading
  %              tier3: a string cast as a variable with the third JSON Heading
  %
  % 
  % Return     : a string containing the field value 

  */
  switch (resumeData && tier1 && tier2 && tier3) {
    case (resumeData && (tier1) && (tier2) && (tier3)):
    //   return (JSON.stringify(resumeData.tier1.tier2.tier3,null,2));
        return "tier3"
    case (resumeData && (tier1) && (tier2) && (undefined)):
    //   return (JSON.stringify(resumeData.tier1.tier2,null,2));
        return "tier2"
    case (resumeData && (tier1) && (undefined) && (undefined)):
    //   return (JSON.stringify(resumeData.tier1));
    case (resumeData && (undefined) && (undefined) && (undefined)):
    //   return (JSON.stringify(resumeData));
      default:
      return "Error, resorted to default case";
  }
}