


import resumeData from './Resume-data.json';

console.log("Object.values(resumeData)",Object.values(resumeData.basics))

const aJSXComponent = () => {
    let element = <h6>A JSX component {Object.keys(resumeData.basics)} </h6>

    let anArray = Object.keys(resumeData);
    console.log("anArray", anArray, typeof anArray)


    let mappedArray = () => 
    
    
    mappedArray = anArray.map(element => {
        return <li>{element}</li>
    })


    return (<ul>{mappedArray()}</ul>)
}

function SkillsComponent() {
    return (
      <div className="SkillsComponent" className="five-column-grid-container">

            <div className="heading-title">1 {aJSXComponent()}</div>
            <div className="row-2-to-3-text-field">2</div>
            <div className="row-3-to-4-text-field">3</div>
            <div className="row-4-to-5-text-field">4</div>
            <div className="row-5-to-6-text-field">5</div>
         </div>
    );
  }

  export default SkillsComponent