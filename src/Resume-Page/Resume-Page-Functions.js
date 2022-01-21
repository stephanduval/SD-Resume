
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



export const populateWorkSection = (objFromJSON) => {
  // const work = objFromJSON['work'];
    const work = "basics" // how can I customize the object call????
    const populateSection = (iterationNumber) => {
    const JSONCompanyNameString = JSON.stringify(objFromJSON.work[iterationNumber].name);
    const workContainer = document.getElementById("work-text");
    const companyNameHeader = document.createElement("p");
    const companyNameTextNode = document.createTextNode((JSONCompanyNameString));
    workContainer.appendChild(companyNameHeader); 
    companyNameHeader.appendChild(companyNameTextNode);
    workContainer.appendChild(companyNameHeader);
    workContainer.className="work-article";

    const JSONDateString = "THE DATE" 
        // JSON.stringify(objFromJSON.work[iterationNumber].startDate);

    const dateContainer = document.getElementById("work-date");
    const workDateHeader = document.createElement("p");
    const workDateTextNode = document.createTextNode((JSONDateString));
    dateContainer.appendChild(workDateHeader); 
    workDateHeader.appendChild(workDateTextNode);
    dateContainer.appendChild(workDateHeader);
    dateContainer.className="work-date";



  console.log("POPULATE WORKED")
}

  for (let iterationNumber = 0; iterationNumber < Object.keys(objFromJSON.work).length; iterationNumber++) {
  // div.className = 'work';  The code to assign a className isn't working
  
  populateSection(iterationNumber);
  // START create the title
  // const companyNameHeader = document.createElement("p");
  // const companyNameTextNode = document.createTextNode(JSON.stringify(resumeData.work[i].name)+"out");
  // workDiv.appendChild(companyNameHeader);
  // companyNameHeader.appendChild(companyNameTextNode);
  // const workContainer = document.getElementById("work-container");
  // workContainer.appendChild(companyNameHeader);

  // END create the title
  // START create the date section

  //END create the date section


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


/*
function showWorkTest(obj) {
  const workObject = obj['work'];

  for (let i = 0; i < workObject.length; i++) {
    const workDiv = document.createElement('div');
    div.className = 'work';



    const myH2 = document.createElement('h2');
    const myPara1 = document.createElement('p');
    const myPara2 = document.createElement('p');
    const myPara3 = document.createElement('p');
    const myList = document.createElement('ul');

/*
    <div className="work">A work card</div>
    <div className="date"> 2001-2007  </div>
    <div className="row-title-blank">blank Experience</div>
    <div className="work">A work card</div>
    <div className="date"> 2001-2007  </div>
*/
/*
    myH2.textContent = heroes[i].name;
    myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
    myPara2.textContent = 'Age: ' + heroes[i].age;
    myPara3.textContent = 'Superpowers:';

    const superPowers = heroes[i].powers;
    for (let j = 0; j < superPowers.length; j++) {
      const listItem = document.createElement('li');
      listItem.textContent = superPowers[j];
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
} 
*/