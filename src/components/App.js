import React, { useEffect, useState } from "react";
import MainPage from "./MainPage";
import { Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from "./NavBar"
import HumanPage from "./HumanPage";
import AlienPage from "./AlienPage";
import Form from "./Form";
import CharacterSubmission from "./Submisison";

function App() {

  const [ allData, setAllData ] = useState([])
  const [ filteredData, setFilteredData] = useState([])
  const [ submittedCharacter, setSubmittedCharacter ] = useState([])

  const navigate = useNavigate();

  function addNewCharacter(newCharacter){
    fetch(`http://localhost:3001/results`, {
      method: "POST",
      headers: { 
        "Content-Type" : "application/json"
      }, 
        body: JSON.stringify(newCharacter)
    })
        .then(r => r.json())
        .then(data => 
          // redirect to character submitted page
          navigate(`/Submission`))
          // console.log(data))
    setSubmittedCharacter(newCharacter)
    setAllData([...allData, newCharacter])
  }

  useEffect(() => {
      fetch(`http://localhost:3001/results`)
      .then(r => r.json())
      .then(data => 
          setAllData(data))
          // console.log(data))
  }, [])

  useEffect(() => {
      setFilteredData(allData)
  }, [allData])

  function handleSearch(e) {
      const filData = allData.filter(dat => {
          return dat.name.toLowerCase().includes(e.target.value)
      })
      setFilteredData(filData)
    }

  return (
    <div className="app">
      <br />
        <NavBar />
        <br />
          
        <br />
      <br />
        <Routes>
          <Route path="/" element={<MainPage filteredData={ filteredData } handleSearch={ handleSearch } />}/>
          <Route path="/human" element={<HumanPage filteredData={ filteredData } handleSearch={ handleSearch } />}/>
          <Route path="/alien" element={<AlienPage filteredData={ filteredData } handleSearch={ handleSearch } />}/>
          <Route path="/form" element={<Form filteredData={ filteredData } handleSearch={ handleSearch } addNewCharacter={ addNewCharacter }/>}/>
          <Route path="/submission" element={<CharacterSubmission submittedCharacter={submittedCharacter}/>}/>
        </Routes>
    </div>
  );
}

export default App;
