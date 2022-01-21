
import resumeData from './Resume-data.json';
import './Resume-Page.css';


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


export const populateWorkSection = (objFromJSON,title) => {
  // const work = objFromJSON['work'];
    const work = "basics" // how can I customize the object call????
    const populateSection = (iterationNumber) => {

    
    const workContainer = document.getElementById("work-container");
        
        let JSONString = "Title";  //Unique Value
        let div = document.createElement("div");
        let paragraph = document.createElement("p");
        let text = document.createTextNode(JSONString); 
        workContainer.appendChild(div); 
        div.appendChild(paragraph);
        paragraph.appendChild(text);
        div.classList.add("work-title");  // Unique Value
        div.setAttribute("id", "work-title");  // Unique Value



        // TEXT Field:
        JSONString = JSON.stringify(objFromJSON.work[iterationNumber].name);
        div = document.createElement("div");
        paragraph = document.createElement("p");
        text = document.createTextNode(JSONString); 
        workContainer.appendChild(div); 
        div.appendChild(paragraph);
        paragraph.appendChild(text);
        div.classList.add("work-text");  // Unique Value
        div.setAttribute("id", "work-text");  // Unique Value
        


        // DATE FIELD:
        JSONString = "THE DATE" 
        div = document.createElement("div");
        paragraph = document.createElement("p");
        text = document.createTextNode(JSONString); 
        workContainer.appendChild(div); 
        div.appendChild(paragraph);
        paragraph.appendChild(text);            
        div.classList.add("work-date");
        div.setAttribute("id", "work-text")
        // workDateHeader.element.setAttribute("class", "work-date")
        // workTitleEntry.classList.add('work-date');   
 }

  for (let iterationNumber = 0; iterationNumber < Object.keys(objFromJSON.work).length; iterationNumber++) {
  // div.className = 'work';  The code to assign a className isn't working
  
  populateSection(iterationNumber);
  
  }
}
/*  Sample JSON code temp


    "work": [{
      "name": "eSnail.ca",
      "position": "Director of Operations",
      "url": "https://eSnail.ca",
      "startDate": "2008-02-11",
      "endDate": "CURRENT",
      "summary": "Company founder and manager of day to day operations",
      "highlights": [
        "Started the company and oversaw it through three major developement changes"
      ]
    },
    {
        "name": "MailClerk.com",
        "position": "Director",
        "url": "https://mailclerk.com",
        "startDate": "2020-02-08",
        "endDate": "CURRENT",
        "summary": "Company founder and manager of day to day operations",
        "highlights": [
          "Started the company and began developing an operations team"
        ]
    }],

    */


    
    