import resumeData from './Resume-data.json'


const rawResumeData = resumeData;
// const parsedResumeData = JSON.parse(rawResumeData);
const stringifiedResumeData = JSON.stringify(rawResumeData,null,2);



const getDataFromResumeJSON = (fileName,tier1,tier2,tier3)=> {
  switch (fileName && tier1 && tier2 && tier3) {
    case (fileName && (tier1) && (tier2) && (tier3)):
      // return (JSON.stringify(rawResumeData.tier1[0].tier2.tier3,null,2));
    case (fileName && (tier1) && (tier2) && (undefined)):
      // return (JSON.stringify(rawResumeData.tier1[0].tier2,null,2));
    case (fileName && (tier1) && (undefined) && (undefined)):
      return (JSON.stringify(rawResumeData.tier1));
    case (fileName && (undefined) && (undefined) && (undefined)):
      return (JSON.stringify(rawResumeData));
      default:
      return "Error, resorted to default case";
  }

  //   if (tier3) {
  //   return (JSON.stringify(rawResumeData.basics.profiles[0].network,null,2));
  // } if (tier2) {
  //   return (JSON.stringify(rawResumeData.basics.profiles[0].network,null,2));
  // } if (!tier1); {
  //   return (JSON.stringify(rawResumeData.basics));
  // } if (tier1) {
  //   return "ouch";
  // }
}



// const getDataFromResumeJSON = (fileName,tier1,tier2,tier3)=> {

//   let string = "";
//   string += "JSON.stringify(" + fileName + "." + tier1;
//   if (tier2) {
//     string += "[0]." + tier2
//   }
//   if (tier3) {
//     string += "." + tier3
//   }
//   else {
//     string += ",null,2)"
//   }

//   return string

// }

const basics ="basics";
const profiles = "profiles";
const network = "network";

function ResumeActual() {
    return (
      <div className="App">
        <header className="App-header">
        TEXT WRITTEN IN THE HEADER TAG
        </header>
  
        <resumeActual></resumeActual>
        BEGIN RESUME ResumeActual
        <br></br>
        STRINGIFIED RESUME DATA 
        <br></br>
        {stringifiedResumeData}
        <br></br>
       <pre>{JSON.stringify(rawResumeData.references,null,2)}</pre>
        {/* How to get a few levels into the JSON string: */}
       <pre>{JSON.stringify(rawResumeData.basics.profiles[0].network,null,2)}</pre>

        <br></br>
        PARSE RESUME DATA
        <br></br>
        = ("rawResumeData","profiles","network" =
        <pre>{getDataFromResumeJSON(rawResumeData,basics,network)}</pre>
        <br></br>
        = "filename","basics",profiles,network =
        {getDataFromResumeJSON(rawResumeData,basics)}
        <br></br> = "rawResumeData" =
        {getDataFromResumeJSON(rawResumeData)}
        <br></br>
        <br></br>
        {/* {parsedResumeData.references} */}
        END RESUME ResumeActual



        
        
          </div>

        
    );
  }
  
  export default ResumeActual;



