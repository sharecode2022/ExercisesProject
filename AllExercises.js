import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import LangCard from "../LangCard/LangCard";
import ExercisesCard from "../ExerciseCard/ExerciseCard";
import Filters from "../Filters/Filters";
import { useLocation } from "react-router-dom";
//import { useContext } from "react";
import { UserContext } from "../../App";
import "./style.css";

export default function AllExercises(props) {
  //const context = useContext(UserContext)
  const location = useLocation();
  const [languagesList, setLanguagesList] = useState([]);
  const [exercisesList, setExercisesList] = useState([]);
  const [exercisesFilters, setExercisesFilters] = useState({
    filters: {
      searchByTagInpFilter: "",
      diffcultInpFilter: "",
      typeInpFilter: "",
    },
  });
  const [exercisesFilterList, setExercisesFilterList] = useState([]);

  //----------------------------------------------------------------------
  useEffect(() => {
    if (exercisesList.length) setExercisesList([]);
    if (!languagesList.length) getAllLanguages();
  }, [location]);
  //----------------------------------------------------------------------

  useEffect(filterExercisesList, [exercisesFilters]);
  //----------------------------------------------------------------------

  function getAllLanguages() {
    axios.get(`http://localhost:5000/language/`).then((res) => {
      setLanguagesList(res.data);
    });
  }
  //----------------------------------------------------------------------

  function getAllExercisesInLang(langName) {
    //console.log("in 757");
    axios
      .get(`http://localhost:5000/exercisesCardsInLang/${langName}`/*, { headers: { "Authorization": context.token } }*/)
      .then((res) => {
        //console.log(res);
        setExercisesList(res.data);
        setExercisesFilterList(res.data);
      });
  }
  //----------------------------------------------------------------------

  function filterExercisesList() {
    ////console.log(exercisesFilters.searchByTagInpFilter);
    ////console.log(exercisesFilters.searchByTagInpFilter);
    //const optionsArr = ["bender", "nation", "person", "show"];

    // exercisesFilters.filters.forEach(filterBy => {
    //   const filterValue = newState[filterBy];
    //   if (filterValue) {
    //     filteredItems = filteredItems.filter(
    //       item => item[filterBy] === filterValue
    //     );
    //   }
    // });

    const filteredExerciseList = exercisesList.filter((exCard) => {
      const searchByTagFilter = exCard.tags
        .map((t) => t.toLowerCase())
        .find((v) =>
          v
            .toLowerCase()
            .startsWith(exercisesFilters.filters.searchByTagInpFilter)
        );

      const diffcultFilter =
        exCard.difficulty
          .toLowerCase()
          .indexOf(
            exercisesFilters.filters.diffcultInpFilter.toString().toLowerCase()
          ) > -1;
      // //console.log(
      //   exCard.exec_type
      //     .toLowerCase()
      //     .indexOf(
      //       exercisesFilters.filters.typeInpFilter.toString().toLowerCase()
      //     )
      // );

      const typeFilter =
        exCard.exec_type
          .toLowerCase()
          .indexOf(
            exercisesFilters.filters.typeInpFilter.toString().toLowerCase()
          ) > -1;
      // //console.log(searchByTagFilter);
      // //console.log(diffcultFilter);
      // //console.log(typeFilter);

      return searchByTagFilter && diffcultFilter && typeFilter;
    });
    ////console.log(filteredExerciseList);
    setExercisesFilterList(filteredExerciseList);
  }
  //----------------------------------------------------------------------
  function removeExercise(id)  {
    //"/exercise/delete/:id"
    axios.delete(`http://localhost:5000/exercise/delete/${id}`).then((res) => {
     //console.log(res.data);
    });
   setExercisesList((exercisesList) => exercisesList.filter((item) => item._id !== id));
   console.log(exercisesList);

  };

  const handleSearchFilter = (event, key) => {
    const inputValue = event.target.value;
    setExercisesFilters((prevState) => ({
      filters: {
        ...prevState.filters,
        [key]: inputValue,
      },
    }));
    ////console.log(exercisesFilters);

    // //console.log("jb");
    // //console.log(exercisesFilters);
    // setExercisesFilters({...exercisesFilters.filters[key]: inputValue });
    // //console.log(exercisesFilters);
    // //filterExercisesList();
  };
  function newExercise()
  {
    //axios
    //navigate to update with props new
  }

  //----------------------------------------------------------------------
  // let currentListToDisplay = exercisesFilterList.length
  //   ? exercisesFilterList
  //   : exercisesList;
  //const currentListToDisplay = filterExercisesList();

  return (
    <div className="main">
      {exercisesList.length ? (
        <div>
          <div className="flex">
          <Filters setInpFilters={handleSearchFilter} />
           <button type='button' className="newExBtn"  onClick={newExercise}>+</button></div>

          <ul className="exerciseCardGridClass">

            {exercisesFilterList.map((ex) => (
              <ExercisesCard
                exObj={ex}
                key={ex._id}
                userType={props.userType}
                removeExercise={removeExercise} //just if context equal to admin
              />
            ))}
          </ul>
        </div>
      ) : languagesList.length ? (
        <ul className="langCardGridClass">
          {languagesList.map((lang) => (
            <LangCard
              langObj={lang}
              key={lang._id}
              setExercisesLangFunc={getAllExercisesInLang}
              icon={lang.icon}
            />
          ))}
        </ul>
      ) : (
        <div>loading....</div>
      )}
    </div>
  );
}
