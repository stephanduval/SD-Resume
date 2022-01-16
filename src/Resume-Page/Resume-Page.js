import resumeData from './Resume-data.json'
// import { parseSpeficiedDataFRomResumeJSON } from './Resume-Page-Functions'
// import sampleJSON from './sampleJSON.json'
import { parseSpeficiedDataFRomResumeJSON, testJSONFunction } from './Resume-Page-Functions';

let basics ="basics";
let name = "name";

let param = "basics.name";

const mapJSONData = (JSONData) => {
  JSONData.map(post => {
    return(
      <div>
        <h4>{post}</h4>
        {/* <p> {post.url}</p> */}
      </div>
    )
  })
}

// }

function ResumeActual() {
    return (
      <div className="Resume">
      {(JSON.stringify(resumeData.basics.name))}
      <br></br>
     parse {parseSpeficiedDataFRomResumeJSON(resumeData,basics,name)}
      <br></br>
    test JSON Function {testJSONFunction(param)}
    <br></br>
      {/* {mapJSONData(resumeData)} */}
      ResumeActual
          </div>

        
    );
  }
  
  export default ResumeActual;



