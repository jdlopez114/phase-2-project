import React from "react";

function PageCard({ data }) {

    const { name } = data;

    return (
        <div>
            <div>
                <h1>{ name }</h1>
            </div>
        </div>
    )
}

export default PageCard;