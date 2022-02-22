import "./style.css";
import React from "react";
import axios from "axios";
import { UserContext } from "../../App";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export default function SignIn() {
  const [error, setError] = useState(false);

  const { userLogin ,setUserLogin} = useContext(UserContext);
  const { token, setToken } = useContext(UserContext);


  let nevigate = useNavigate();

  function updateSignInData(e) {
    e.preventDefault();
    const form = e.target,
      values = getDataForm(form);
      console.log(values);

    axios.post("http://localhost:5000/login", values).then((result) => {
      console.log(result);
      form.reset();
      setUserLogin(result.data); 
      console.log(result.status);
      if (result.data.status == 400) 
      {
        console.log("error");
        return setError(true);
      }
      sessionStorage.setItem("token", result.data.token);//to keep token in the local storage

      setToken(result.data.token);
       if (result.data.status === 200)  //return nevigate("/");
       this.goBack()
       this.goBack()


       
      
    });
  }

  function getDataForm(form) {
    return Object.values(form).reduce((acc, curr) => {
      let { value, name } = curr;
      return name ? { ...acc, [name]: value } : acc;
    }, {});
  }
  return (
    <form onSubmit={updateSignInData}>
      <div className="signInContainer">
        <h4 className="headerText">Welcome Back</h4>

        <div className="inputSection">
          <input
            type="text"
            className="userName"
            required
            placeholder="User Name"
            name="email"
          />
          {/* <label className="inputLabel">User Name</label> */}
        </div>
        <div className="inputSection">
          <input
            type="password"
            className="password"
            required
            placeholder="Password"
            name="password"
          />
          

          {/* <label className="inputLabel">Password</label> */}
        </div>
        <div>
        {error? <p className="error">'email or password invalid'</p>:''}

        </div>
        <div className="formFooter">
          <button type="submit" className="saveForm">
            Submit
          </button>
        </div>

      </div>
    </form>
  );
}
