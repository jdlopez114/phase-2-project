import { Container, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Search from "./Search"
import PageCollection from "./PageCollection";


function MainPage(){

    const [ allData, setAllData ] = useState([])
    const [ filteredData, setFilteredData] = useState([])

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/`)
        .then(r => r.json())
        .then(data => 
            setAllData(data.results))
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
        <Container>
            <br />
            <Search handleSearch={handleSearch}/>
            <br />
            <PageCollection allData={ filteredData }/>
          
        </Container>
    )
}

export default MainPage; 