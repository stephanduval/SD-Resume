import resumeData from './Resume-data.json'


const rawResumeData = resumeData;
const parsedResumeData = JSON.parse(rawResumeData);
const stringifiedResumeData = JSON.stringify(rawResumeData,null,2);

function ResumeActual() {
    return (
      <div className="App">
        <header className="App-header">
  
        </header>
  
        <resumeActual></resumeActual>
        BEGIN RESUME ResumeActual
        <br></br>
        STRINGFIED RESUME DATA 
        <br></br>
        {stringifiedResumeData}
        <br></br>
       <pre>{JSON.stringify(rawResumeData.references,null,2)}</pre>

       <pre>{JSON.stringify(rawResumeData.references,null,2)}</pre>

        <br></br>
        PARSE RESUME DATA
        <br></br>
        {/* {parsedResumeData.references} */}
        END RESUME ResumeActual



        
        
          </div>

        
    );
  }
  
  export default ResumeActual;



