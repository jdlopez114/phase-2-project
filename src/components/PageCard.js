import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { Typography, CardMedia } from "@material-ui/core";

function PageCard({ displayData }) {

    const {name, species, image, status} = displayData;

    return (
        <Card elevation={2} sx={{ maxWidth: 345 }}>
            <CardHeader
                title={ name }
                subheader={ species }
            />
            <CardMedia
                style = {{ height: '100%', width: '100%', paddingTop: '100%'}}
                image={ image }
                component='div'
            />
            <CardContent>
                <Typography>
                    { status }
                </Typography>
            </CardContent>
        </Card>
    )
}

export default PageCard;