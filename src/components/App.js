import React, { useEffect, useState } from "react";
import MainPage from "./MainPage";
import { Routes ,Route } from 'react-router-dom';
import NavBar from "./NavBar"
import HumanPage from "./HumanPage";
import AlienPage from "./AlienPage";
import Form from "./Form";


function App() {

  const [ allData, setAllData ] = useState([])
  const [ filteredData, setFilteredData] = useState([])

  function addNewCharacter(newCharacter){
    fetch(`http://localhost:3001/results`, {
      method: "POST",
      headers: { 
        "Content-Type" : "application/json"
      }, 
        body: JSON.stringify(newCharacter)
    })
        .then(r => r.json())
        .then(data => console.log(data))
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
          <Route path="/Human" element={<HumanPage filteredData={ filteredData } handleSearch={ handleSearch } />}/>
          <Route path="/Alien" element={<AlienPage filteredData={ filteredData } handleSearch={ handleSearch } />}/>
          <Route path="/Form" element={<Form filteredData={ filteredData } handleSearch={ handleSearch } addNewCharacter={ addNewCharacter }/>}/>
        </Routes>
    </div>
  );
}

export default App;
