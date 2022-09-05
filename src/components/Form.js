import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField"

const useStyles = makeStyles({
    field: {
        marginTop: 20, 
        marginBottom: 20,
        display: "block"
    }
})

function Form({ addNewCharacter }) {

const [formData, setFormData] = useState(
    {
        "name": "",
        "species": "",
        "image": "",
        "status": ""
    }
)

const classes = useStyles()

function handleSubmit(e){
    e.preventDefault()
    addNewCharacter(formData)
}

function handleChange(e){
    setFormData({
        ...formData, [e.target.name] : e.target.value
    })
}

return (
    <Container>
        <br />
        <Typography
            variant="h6"
            color="textSecondary"
            component="h2"
            gutterBottom
        >
            Add to the Universe! 
        </Typography>
        <br />
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField 
                onChange={handleChange}
                className={classes.field}
                label="Name"
                variant="outlined"
                fullWidth
                required
                value={formData.name}
                name="name"
            />
            <TextField 
                onChange={handleChange}
                className={classes.field}
                label="Species"
                variant="outlined"
                fullWidth
                required  
                value={formData.species}
                name="species"
            />  
            <TextField 
                onChange={handleChange}
                className={classes.field}
                label="Image URL"
                variant="outlined"
                fullWidth
                required
                value={formData.image}
                name="image"
            />
            <TextField 
                onChange={handleChange}
                className={classes.field}
                label="Status"
                variant="outlined"
                fullWidth
                required
                value={formData.status}
                name="status"
            /> 
            <Button
                type="submit"
                color="secondary"
                variant="contained"
                endIcon={<KeyboardArrowRightIcon/>}
            >
            Submit
            </Button>       
        </form> 
    </Container>
    )
}

export default Form;

