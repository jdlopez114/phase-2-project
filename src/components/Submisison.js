import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { Typography, CardMedia } from "@material-ui/core";
import { Grid } from "@material-ui/core";

function Submission({ submittedCharacter }){

    console.log(submittedCharacter)
    
    return (
        <div> 
            <br/>
            <Typography
            variant="h4"
            color="textSecondary"
            component="h2"
            align="center"
            >
            Thank you {submittedCharacter.species}! 
            </Typography>
                <br/>
                <br/>
                <br/>
                <Grid container direction='row' justify='center'> 
                    <Grid item xs={8} md={4} lg={2} >
                        <Card elevation={2} sx={{ maxWidth: 'md', width: 1/2 }}>
                            <CardHeader
                                title={submittedCharacter.name}
                                subheader={submittedCharacter.species}
                            />
                            <CardMedia
                                style = {{ height: '100%', width: '100%', paddingTop: '100%'}}
                                image={submittedCharacter.image}
                            />
                            <CardContent>
                                <Typography>
                                    {submittedCharacter.status}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
        </div>
    )
}

export default Submission;