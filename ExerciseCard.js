import "./style.css";
import React from "react";
import { Link } from "react-router-dom";


export default function ExerciseCard(props) {
  //console.log(props.exObj._id);
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
  // function removeExercise(id)  {
  //   //axios
  //   console.log();
  //   props.setExercisesList((oldState) => oldState.filter((item) => item.id !== id));
  // };
  
  const { title, details, exec_type, difficulty, icon, _id } = props.exObj;
  const linkPath =
    props.userType === "user" ? `/exercise/${_id}` : `/admin/exercise/${_id}`;
  return (
    <div>
            { props.userType === "admin"? <button onClick={() => props.removeExercise(_id)}>X</button>:''}
             <Link to={linkPath}>
      <li className="cards_item">
        <div className="card">
        <div className="iconClass">
          <img src={`${icon}`} alt="exercise_icon" />
          {/* <i className={iconClass}></i> */}
        </div>

        <div className="informationClass">
          <div className="titleClass">{title}</div>
          <div className="detailsClass">{details}</div>
        </div>
        <div className="info1">
      <div className={`${difficulty} difficultyClass`}></div>
      <div className="execTypeClass">{exec_type}</div>
      </div>
     

      </div>
      <span   >
        {props.exObj.tags.map((t) => (
          <span style={{backgroundColor:colorArrTags[t]}} className={`tags`} key={t}>{t}</span>
        )).reduce((accu, elem) => {
          return accu === null ? [elem] : [...accu, '', elem]
      }, null)}
      </span>
      
     
     
     
        </li>
        
    
     
    </Link>
    </div>
    
  );
}
