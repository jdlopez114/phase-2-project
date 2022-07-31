import { Container, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import PageCollection from "./PageCollection";



function MainPage(){

    const [ allData, setAllData ] = useState([])

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/`)
        .then(r => r.json())
        .then(data => 
            setAllData(data.results))
    }, [])

        

    return (
        <PageCollection allData={ allData }/>
    )
}

export default MainPage; 