import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { Typography, CardMedia } from "@material-ui/core";

function PageCard({ data }) {
 
    return (
        <Card elevation={2} sx={{ maxWidth: 345 }}>
            <CardHeader
                title={data.name}
                subheader={data.species}
            />
            <CardMedia
                style = {{ height: '100%', width: '100%', paddingTop: '100%'}}
                image={data.image}
            />
            <CardContent>
                <Typography>
                    {data.status}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default PageCard;