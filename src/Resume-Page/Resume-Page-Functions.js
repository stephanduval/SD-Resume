

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


export const populateWorkSection = (objFromJSON, title) => {
  // const work = objFromJSON['work'];
    const work = "work" 
    const startDate = "startDate";
    const endDate = "endDate";
    const populateSection = (iterationNumber) => {

    
    const sectionContainer = document.getElementById("work-container");
        
        let JSONString = title;  //Unique Value
        let div = document.createElement("div");
        let paragraph = document.createElement("p");
        let text = document.createTextNode(JSONString); 
        sectionContainer.appendChild(div); 
        div.appendChild(paragraph);
        paragraph.appendChild(text);
        div.classList.add("heading-title");  // Unique Value
        div.setAttribute("id", "work-title");  // Unique Value



        // TEXT Field:
        JSONString = objFromJSON[work][iterationNumber].name;
        div = document.createElement("div");
        paragraph = document.createElement("p");
        text = document.createTextNode(JSONString); 
        sectionContainer.appendChild(div); 
        div.appendChild(paragraph);
        paragraph.appendChild(text);
        div.classList.add("row-two-to-five-text-field");  // Unique Value
        div.setAttribute("id", "work-text");  // Unique Value
        


        // DATE FIELD:
        JSONString = JSONString = objFromJSON[work][iterationNumber][startDate]+ "-" 
        + objFromJSON[work][iterationNumber][endDate];

        div = document.createElement("div");
        paragraph = document.createElement("p");
        text = document.createTextNode(JSONString); 
        sectionContainer.appendChild(div); 
        div.appendChild(paragraph);
        paragraph.appendChild(text);            
        div.classList.add("date");
        div.setAttribute("id", "work-text")
  
 }

  for (let iterationNumber = 0; iterationNumber < Object.keys(objFromJSON.work).length; iterationNumber++) {
  // div.className = 'work';  The code to assign a className isn't working
  
  populateSection(iterationNumber);
  
  }
}

export const populateTechnicalSection = (objFromJSON,title) => {
 // const work = objFromJSON['work'];
  const projects = "projects";
  const keywords = "keywords"

  const populateSection = (iterationNumber) => {

     const sectionContainer = document.getElementById("technical-container");
     
     let JSONString = title;  //Unique Value
     let div = document.createElement("div");
     let paragraph = document.createElement("p");
     let text = document.createTextNode(JSONString); 


     sectionContainer.appendChild(div); 
     div.appendChild(paragraph);
     paragraph.appendChild(text);
     div.classList.add("heading-title");  // Unique Value
     div.setAttribute("id", "work-title");  // Unique Value

     div = document.createElement("div");
     paragraph = document.createElement("p");
     text = document.createTextNode("new node"); 

     sectionContainer.appendChild(div); 
     div.appendChild(paragraph);
     paragraph.appendChild(text);
     div.classList.add("row-2-to-3-text-field");  // Unique Value
     div.setAttribute("id", "list-section");  // Unique Value

    let unorderedList = document.createElement("ul");
    let listItem = document.createElement("li");
     div.appendChild(unorderedList);
     
     for (let technicalListIterationNumber = 0; iterationNumber < 20; iterationNumber++) {
      // listItem = document.createElement("li")
      // unorderedList.appendChild(listItem);
      // listItem.appendChild(document.createTextNode("list"));  
      // div.classList.add("row-2-to-3-text-field");  // Unique Value

      while (technicalListIterationNumber % 3 != 0) {
        console.log("Split List",iterationNumber % 3)
        
        div = document.createElement("div");
        sectionContainer.appendChild(div); 
        div.classList.add("row-" + Math.floor(technicalListIterationNumber/3) +"-to-" +  Math.floor(technicalListIterationNumber/3+1) + "-text-field");  // Unique Value
        div.appendChild(unorderedList);
        listItem = document.createElement("li")
        unorderedList.appendChild(listItem);
        listItem.appendChild(document.createTextNode("list"));
        technicalListIterationNumber++
      }
        div.appendChild(unorderedList);
        listItem = document.createElement("li")
        unorderedList.appendChild(listItem);
        listItem.appendChild(document.createTextNode("list"));
        // div.classList.add("row-3-to-4-t  ext-field");  // Unique Value

        technicalListIterationNumber++
     }
    //  populateList();
     
  //    let keywordIterationNumber = 0;
  //    for (let technicalListIterationNumber = 0; iterationNumber < Object.keys(objFromJSON[projects]).length; iterationNumber++) {
    
  //    JSONString = "test"
  //    //objFromJSON[projects][keywords][keywordIterationNumber]
  //    unorderedList.appendChild(listItem);
  //    unorderedList.appendChild(listItem);

  //    unorderedList.appendChild(listItem);

  //    listItem.appendChild(text);
  //    keywordIterationNumber++
  //   }
  //    div.classList.add("row-two-to-six-text-field");  // Unique Value
  //    div.setAttribute("id", "work-title");  // Unique Value



}

// for (let iterationNumber = 0; iterationNumber < Object.keys(objFromJSON.work).length; iterationNumber++) {
// // div.className = 'work';  The code to assign a className isn't working

populateSection(5);

// }
}

export const populateEducationSection = (objFromJSON, title) => {
  
  const education = "education"
  const startDate = "startDate";
  const endDate = "endDate";
  const populateSection = (iterationNumber) => {


  
  const sectionContainer = document.getElementById("education-container");
      
      let JSONString = title;  //Unique Value
      let div = document.createElement("div");
      let paragraph = document.createElement("p");
      let text = document.createTextNode(JSONString); 
      sectionContainer.appendChild(div); 
      div.appendChild(paragraph);
      paragraph.appendChild(text);
      div.classList.add("heading-title");  // Unique Value
      div.setAttribute("id", "education-title");  // Unique Value



      // TEXT Field:
      JSONString = objFromJSON.education[iterationNumber].institution
      div = document.createElement("div");
      paragraph = document.createElement("p");
      text = document.createTextNode(JSONString); 
      sectionContainer.appendChild(div); 
      div.appendChild(paragraph);
      paragraph.appendChild(text);
     div.classList.add("row-two-to-five-text-field");  // Unique Value
      div.setAttribute("id", "education-text");  // Unique Value
      


      // DATE FIELD:
      JSONString = JSONString = objFromJSON[education][iterationNumber][startDate] + "-" 
      + objFromJSON[education][iterationNumber][endDate];
      div = document.createElement("div");
      paragraph = document.createElement("p");
      text = document.createTextNode(JSONString); 
      sectionContainer.appendChild(div); 
      div.appendChild(paragraph);
      paragraph.appendChild(text);            
     div.classList.add("date");
      div.setAttribute("id", "education-text")

}

for (let iterationNumber = 0; iterationNumber < Object.keys(objFromJSON.education).length; iterationNumber++) {
// div.className = 'work';  The code to assign a className isn't working

populateSection(iterationNumber);

}

}

/* Sample JSON DATA

 }],
    "education": [{
      "institution": "University of Alberta",
      "url": "https://www.ualberta.ca/",
      "area": "Arts",
      "studyType": "Bachelor",
      "startDate": "2003-09-01",
      "endDate": "2008-08-15",
      "score": "3.2",
      "courses": [
        "Spanish 201, Comp Sci 101, Writing and English 400"
      ]
    }],
    */