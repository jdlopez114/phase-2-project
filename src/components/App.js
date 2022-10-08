import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from "./NavBar"
import InfoPage from "./InfoPage";
import Form from "./Form";
import MainPage from "./MainPage";
import { Typography } from "@material-ui/core";

function App() {

  const [ allData, setAllData ] = useState([])
  const [ filteredData, setFilteredData ] = useState([])
  const [ humanData, setHumanData ] = useState([])
  const [ alienData, setAlienData ] = useState([])
  
  const navigate = useNavigate();

    useEffect(() => {
      fetch(`http://localhost:3001/results`)
      .then(r => r.json())
      .then(data => {
        setAllData(data)
        setHumanData(data.filter(hum =>  hum.species === 'Human'))
        setAlienData(data.filter(hum =>  hum.species === 'Alien'))
      })
        .catch(error => (console.log(error)));
    }, [])

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
          navigate(`/`))
          .catch(error => (console.log(error)));
    setAllData([...allData, newCharacter])
  }

  useEffect(() => {
    setFilteredData(allData)
  }, [allData])

  function handleSearch(e) {
      const filData = allData.filter(dat => {
          return dat.name.toLowerCase().includes(e.target.value.toLowerCase())
      })
      setFilteredData(filData)
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
          <Route exact path="/" element={<MainPage displayData={ filteredData } handleSearch={ handleSearch } />} />
          <Route path="/human" element={<InfoPage displayData={ humanData } />} />
          <Route path="/alien" element={<InfoPage displayData={ alienData } />} />
          <Route path="/new" element={<Form addNewCharacter={ addNewCharacter } />} />
        </Routes>
    </div>
  );
}

export default App;
