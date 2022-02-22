import AllExercises from "../../Components/AllExercises/AllExercises";
import "./style.css";
import AdminNavbar from "../../Components/AdminNavbar/AdminNavbar";
import { useState } from "react";
export default function AdminDash() {
  const [mainView, setMainView] = useState("");

  function getMainViewContent() {
    let mainViewContent;
    if (mainView == "exercises")
      mainViewContent = <AllExercises userType="admin" />;
    else if (mainView == "statistics") mainViewContent = <div>statistics</div>;
    else if (mainView == "users") mainViewContent = <div>users</div>;
    else mainViewContent = <div>welcome to admin</div>;
    //console.log(mainViewContent);
    return mainViewContent;
  }

  return (
    <div>
      <AdminNavbar setNavbarClick={setMainView} />
      {/* <div>{getMainViewContent()}</div> */}
      <div>{getMainViewContent()}</div>
    </div>
  );
}
