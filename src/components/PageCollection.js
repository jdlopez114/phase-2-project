import React from "react";
import PageCard from "./PageCard"
import { Grid } from "@material-ui/core";


function PageCollection({ allData }){

    return (
        <Grid container spacing={2}>
            {allData.map(data => {
               return <Grid item key={data.id} xs={8} md={4} lg={2}>
                         <PageCard data={data}/>
                     </Grid>
            })}
            
        </Grid>
    );
}

export default PageCollection;