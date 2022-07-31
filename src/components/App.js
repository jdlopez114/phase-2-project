import React from "react";
import MainPage from "./MainPage";
import { Routes ,Route } from 'react-router-dom';
import NavBar from "./NavBar"


function App() {



  return (
    <div className="app">
       <br />
      <NavBar />
      <br />
      <Routes>
          <Route path="/" element={<MainPage />}/>
      </Routes>
      
    </div>
  );
}

export default App;
