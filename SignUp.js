import "./style.css";
import React from "react";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../App";
export default function SignUp() {
  const { setUserRegister } = useContext(UserContext);

  function updateSignUpData(e) {
    e.preventDefault();
    const form = e.target,
      values = getDataForm(form);
      values.permission="user"
    axios.post("http://localhost:5000/register",  values).then((res) => {
      console.log(res.data);
      console.log(values);
    form.reset();
      setUserRegister(values);
    });

    function getDataForm(form) {
      return Object.values(form).reduce((acc, curr) => {
        let { value, name } = curr;
        return name ? { ...acc, [name]: value } : acc;
      }, {});
    }
  }
  return (
    <form onSubmit={updateSignUpData}>
      <div >
        <h4 className="headerText">Join Us Today</h4>
        <div className="inputSectionSplit">
          <input
            type="text"
            className="firstName"
            name="firstName"
            required
            placeholder="First Name"
          />
          {/* <label className="inputLabel">First Name</label> */}
        </div>
        <div className="inputSectionSplit">
          <input
            type="text"
            className="lastName"
            name="lastName"
            required
            placeholder="Last Name"
          />
          {/* <label className="inputLabel">Last Name</label> */}
        </div>
        <div className="inputSection">
          <input
            type="text"
            className="emailAddress"
            name="email"
            required
            placeholder="Email Address"
          />
          {/* <label className="inputLabel">Email Address</label> */}
        </div>
        <div className="inputSection">
          <input
            type="text"
            className="password"
            name="password"
            required
            placeholder="Password"
          />
          {/* <label className="inputLabel">Password</label> */}
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
