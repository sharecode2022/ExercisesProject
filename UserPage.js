import "./style.css";
import { useState } from "react";
import SignIn from "../../Components/SignIn/SignIn";
import SignUp from "../../Components/SignUp/SignUp";

export default function UserPage() {
  const [userStatus, setUserStatus] = useState({
    newUser: true,
    // right: 0,
  });

  function handleClick(button) {
    if (userStatus.newUser && button !== "signUp") {
      setUserStatus({ newUser: false });
    } else if (!userStatus.newUser && button !== "signIn") {
      setUserStatus({ newUser: true });
    }
  }

  return (
    <div className="formContainer border">
      <div className="formHeader">
        <div
          className={userStatus.newUser ? "headerActive" : "headerInActive"}
          onClick={() => handleClick("signUp")}
        >
          <button className="headerButton"> Sign Up </button>
        </div>
        <div
          className={userStatus.newUser ? "headerInActive" : "headerActive"}
          onClick={() => handleClick("signIn")}
        >
          <button className="headerButton"> Sign In </button>
        </div>
      </div>
      <div className="formBody">
        {userStatus.newUser ? <SignUp /> : <SignIn />}
      </div>
      {/* <div className="formFooter">
        <button className="saveForm">
          {userStatus.newUser ? "Submit" : "Login"}
        </button>
      </div> */}
    </div>
  );
}
