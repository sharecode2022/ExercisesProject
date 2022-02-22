import React from "react";
import "./style.css";

//npm i programming-languages-logos
//https://www.npmjs.com/package/programming-languages-logos?activeTab=readme
//https://languages.abranhe.com/
//in public -index.html-<link href="https://languages.abranhe.com/logos.css" rel="stylesheet">

export default function LangCard(props) {
  // let iconClass = `programming lang-${props.langObj.langName.toLowerCase()}`;
  //console.log(iconClass);
  //console.log(props);
  return (
    <button
      className="langCardClass"
      onClick={(e) => props.setExercisesLangFunc(props.langObj._id)}
    >
      <div className="iconClass">
        <img src={`${props.langObj.icon}`} alt="lang_icon" />
        {/* <i className={iconClass}></i> */}
      </div>
      <div className="langNameClass">
        <h2>{props.langObj.langName}</h2>
      </div>
    </button>
  );
}
