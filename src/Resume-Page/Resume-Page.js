import resumeData from './Resume-data.json'


const rawResumeData = resumeData;
// const parsedResumeData = JSON.parse(rawResumeData);
const stringifiedResumeData = JSON.stringify(rawResumeData,null,2);

const getDataFromResumeJSON = (fileName,tier1,tier2,tier3)=> {

  let string = "";
  string += "JSON.stringify(" + fileName + "." + tier1;
  if (tier2) {
    string += "[0]." + tier2
  }
  if (tier3) {
    string += "." + tier3
  }
  else {
    string += ",null,2)"
  }

  return string

}

let JSONtest = getDataFromResumeJSON("rawResumeData","profiles","network");

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
        <pre>{getDataFromResumeJSON("rawResumeData","profiles","network")}</pre>
        <br></br>
        {getDataFromResumeJSON("filename","basics","hi")}
<br></br>
NEW TEST
<pre>{JSONtest}</pre>
        <br></br>
        {/* {parsedResumeData.references} */}
        END RESUME ResumeActual



        
        
          </div>

        
    );
  }
  
  export default ResumeActual;



