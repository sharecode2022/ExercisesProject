import React from "react";
import "./App.css";
import { createContext, useState } from "react";

import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import AdminDash from "./Pages/AdminDash/AdminDash";
import AdminExercise from "./Pages/AdminExercise/AdminExercise";
import Exercise from "./Pages/Exercise/Exercise";
import Navbar from "./Layout/Navbar/Navbar";
import UserPage from "./Pages/UserPage/UserPage";
import NotFound from "./Pages/NotFound/NotFound";

export const UserContext = createContext();
function App() {
  const [userRegister, setUserRegister] = useState();
  const [userLogin, setUserLogin] = useState();
  const [token, setToken] = useState();

  
  return (
    <div className="App">
      <UserContext.Provider
        value={
          userRegister,
          setUserRegister,
          userLogin,
          setUserLogin,
          token,
          setToken
        }
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminDash />} />
          <Route path="/admin/exercise/:id" element={<AdminExercise />} />
          <Route path="/exercise/:id" element={<Exercise />} />
          <Route path="/userpage" element={<UserPage />} />
          <Route path="*" component={NotFound} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
