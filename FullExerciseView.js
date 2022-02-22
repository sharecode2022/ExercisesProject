import "./style.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { CodeBlock, dracula } from "react-code-blocks"; //https://www.npmjs.com/package/@matheus_ferreira/react-code-blocks
import {CopyToClipboard} from 'react-copy-to-clipboard';

import "./style.css";
//npm i react-copy-to-clipboard
export default function Exercise(props) {
  // const [props.exersiceDetails, setprops.exersiceDetails] = useState();
  const [solution, setSolution] = useState(false);
  const [sources, setSources] = useState(false);
  const [copySol, setCopySol] = useState(false);
  const colorArrTags={
    'Algorithms':'#FF0000',
    'Sort and search':'#0000CD',
    'data structures':'#006400',
    'Functional':'#FFFF00',
    'Functions':'#FFFF00',
    'Arrays':'#9932CC',
    'Loops':'#8B008B',
    'Object-oriented':'#FFA500',

  }
  useEffect(setView, []);

function setView()
{
  if(props.openView)
  {
    setSolution(true);
    setSources(true);
  }

}
  // const params = useParams();
  // //console.log(params.id);

  // useEffect(getprops.exersiceDetails, [params.id]);

  // function getprops.exersiceDetails() {
  //   //console.log(params.id);
  //   axios.get(`http://localhost:5000/exercises/${params.id}`).then((res) => {
  //     console.log(res.data);
  //     console.log(res.data.exercise[0]);
  //     setprops.exersiceDetails(res.data.exercise[0]);
  //     getlangName()
  //   });
  // }
  // function getlangName() {
  //   console.log(props.exersiceDetails.prog_lang);
  //   axios
  //     .get(`http://localhost:5000/language/${props.exersiceDetails.prog_lang}`)
  //     .then((res) => {
  //       //console.log(res.data.langName);
  //       let result = res.data;
  //       console.log(result[0]);
  //       let obj1=props.exersiceDetails;
  //       let obj2={'langName':result[0].langName.toLowerCase()}
  //       let mergeObj={...obj1,...obj2}
  //       setprops.exersiceDetails(mergeObj);
  //       //setProgLanguageName(result[0].langName.toLowerCase())
  //     });
  // }

  //if (props.exersiceDetails) getlangName();
  //console.log(progLanguageName);

  let showLineNumbers = true;
  return props.exersiceDetails ? (
    <div className="mainClass">
       <div className="titleClass">
        <div className="imgClass">
          <img src={`${props.exersiceDetails.icon}`} alt="exercise_icon" />
        </div>
        <div>
          <h2>{props.exersiceDetails.title}</h2>
          {/* <span className="tags">tags: {props.exersiceDetails.tags}</span> */}
          <span>
        {props.exersiceDetails.tags.map((t) => (
          <span style={{backgroundColor:colorArrTags[t]}} className={`tags`} key={t}>{t}</span>
        )).reduce((accu, elem) => {
          return accu === null ? [elem] : [...accu, '', elem]
      }, null)}
      </span>
          
          
         
        </div>
        <div className={`diffClass ${props.exersiceDetails.difficulty}`}>
          </div>
      </div>
      <div className="exClass">
     
    
      <div >
        <p className="props.exersiceDetails">{props.exersiceDetails.details}</p>
      </div>
      <div className="content">
        <p >{props.exersiceDetails.content.content}</p>
        <CodeBlock
          text={props.exersiceDetails.content.code}
          language={props.exersiceDetails.langName}
          showLineNumbers={showLineNumbers}

        />
      </div>
      </div>
    
       
        <div className="hint" onClick={() => setSources(!sources)}>
           {sources? <i class="fa fa-chevron-right"><span> Hide hint</span></i> : <i class="fa fa-chevron-down" ><span>Show hint</span></i>}
           <hr className="hrClass"/>
           <ul className={` ${sources ? "open" : "close"}Class`}>
          {props.exersiceDetails.content.sources.map(item=><li className="sourcesClass"><div>{item.name}</div> <div>{item.url}</div></li>)}
        </ul>
        </div>
       
        <div className="solButton">
        <button  onClick={() => setSolution(!solution)}>
          solution
        </button>
       
        </div>
        <div className={`solutionClass ${solution ? "open" : "close"}Class`}>
          <div>
          <CodeBlock
            text={props.exersiceDetails.solution}
            language={props.exersiceDetails.langName}
            showLineNumbers={showLineNumbers}
            theme={dracula}
            
          />
          </div>
         <div>
         <i class="fa fa-clipboard" aria-hidden="true"  onClick={()=>{setCopySol(!copySol);navigator.clipboard.writeText(`${props.exersiceDetails.solution}`) }}/>
              <div className="copy" >{copySol?'Copied!':''}</div>  
         </div>
          
        </div>
        </div>

       
       
       
          
       
     
  ) : (
    <div>loding</div>
  );
  
}
