import "./style.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { CodeBlock, dracula } from "react-code-blocks"; //https://www.npmjs.com/package/@matheus_ferreira/react-code-blocks
import {CopyToClipboard} from 'react-copy-to-clipboard';
import FullExerciseView from "../../Components/FullExerciseView/FullExerciseView";

import "./style.css";
//npm i react-copy-to-clipboard
export default function Exercise() {
  const [exersiceDetails, setExersiceDetails] = useState();



  const params = useParams();
  //console.log(params.id);

  useEffect(getExersiceDetails, [params.id]);

  function getExersiceDetails() {
    //console.log(params.id);
    axios.get(`http://localhost:5000/exercises/${params.id}`).then((res) => {
      //console.log(res.data);
      //console.log(res.data.exercise[0]);
      setExersiceDetails(res.data.exercise[0]);
      //getlangName()
    });
  }
  function getlangName() {
    console.log("lang "+exersiceDetails.prog_lang);
    axios
      .get(`http://localhost:5000/language/${exersiceDetails.prog_lang}`)
      .then((res) => {
        //console.log(res.data.langName);
        let result = res.data;
        //console.log(result[0]);
        let obj1=exersiceDetails;
        let obj2={'langName':result[0].langName.toLowerCase()}
        let mergeObj={...obj1,...obj2}
        console.log("merge "+mergeObj);
        setExersiceDetails(mergeObj);
        //setProgLanguageName(result[0].langName.toLowerCase())
      });
  }

 if (exersiceDetails) getlangName();

  //console.log(progLanguageName);

  return exersiceDetails ? <FullExerciseView exersiceDetails={exersiceDetails}/> : (
    <div>loding</div>
  );
  
}
