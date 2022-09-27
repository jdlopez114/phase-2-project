import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from "./NavBar"
import InfoPage from "./InfoPage";
import Form from "./Form";
import CharacterSubmission from "./Submisison";
import { Typography } from "@material-ui/core";

function App() {

  const [ allData, setAllData ] = useState([])
  const [submittedCharacter, setSubmittedCharacter ] = useState([])
  const [humanData, setHumanData] = useState([])
  const [alienData, setAlienData] = useState([])
  
  const navigate = useNavigate();

    useEffect(() => {
      fetch(`http://localhost:3001/results`)
      .then(r => r.json())
      .then(data => {
          setHumanData(data.filter(hum =>  hum.species === 'Human'))
          setAlienData(data.filter(hum =>  hum.species === 'Alien'))
          setAllData(data)
      })
          .catch(error => (console.log(error)));
    }, [allData, humanData, alienData])

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
          navigate(`/Submission`))
          .catch(error => (console.log(error)));
    setSubmittedCharacter(newCharacter)
    setAllData([...allData, newCharacter])
  }

  function handleSearch(e) {
      const filData = allData.filter(dat => {
          return dat.name.toLowerCase().includes(e.target.value.toLowerCase())
      })
      setAllData(filData)
    }

  return (
    <div className="app">
      <br />
      <Typography
            variant="h3"
            color="textSecondary"
            component="h2"
            gutterBottom
            align="center"
        >
            Welcome to the Rick and Morty Multiverse! 
        </Typography>
        <br />
        <NavBar />
        <br />

      <br />
        <Routes>
          <Route path="/" element={<InfoPage displayData={ allData } handleSearch={ handleSearch } />}/>
          <Route path="/human" element={<InfoPage displayData={ humanData } handleSearch={ handleSearch } />}/>
          <Route path="/alien" element={<InfoPage displayData={ alienData } handleSearch={ handleSearch } />}/>
          <Route path="/form" element={<Form allData={ allData } handleSearch={ handleSearch } addNewCharacter={ addNewCharacter }/>}/>
          <Route path="/submission" element={<CharacterSubmission submittedCharacter={submittedCharacter}/>}/>
        </Routes>
    </div>
  );
}

export default App;
