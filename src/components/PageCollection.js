import React from "react";
import PageCard from "./PageCard"


function PageCollection({ allData }){

    const dataCards = allData.map(data => {
        return <PageCard
                key={ data.id } 
                data={ data }
                />
    })

    return (
        <div>
        { dataCards }
        </div>
    );
}

export default PageCollection;