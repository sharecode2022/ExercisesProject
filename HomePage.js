import "./style.css";
import React from "react";
import { useContext } from "react";
import { UserContext } from "../../App";
import { useState } from "react";

import AllExercises from "../../Components/AllExercises/AllExercises";

export default function HomePage() {
  const [startButton, setStartButton] = useState(false);

  const {userLogin}=useContext(UserContext)
  return (
    <div >
   
 {!startButton?

<div className="gradient-border">
  <div className="text">

  <h3>practice code;</h3>

        <h4 className="hello-title"> {userLogin?`welcome ${userLogin?.name}`: 'Hello Guest'}</h4>
        <p >Hello
Do you have a job interview in two days?<br></br> Feel you need to practice in a particular practice language?<br></br>
We offer you here a learning system for practicing a variety of topics in any programming language you choose.<br></br>
You can start from any level you choose and with the help of the explanations and existing solutions for all the exercises you can quickly reach the most advanced level<br></br>
Are you ready to go?<br></br></p>
      
        </div>        <button className="startButton" onClick={()=>setStartButton(true)}> start</button>

      </div> :
      <div> <AllExercises userType="user" /></div>}

    </div>
     
     
  );
}
