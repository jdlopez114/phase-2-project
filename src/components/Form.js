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

function Form({  }) {

// const [formData, setFormData] = useState(
//     {
//         "id": "",
//         "name": "",
//         "image": ""
//     }
// )

//     return ( 
//         <section id="form">
//             <h3>Who else is out there in the Universe</h3>
//                 <form >
//                     <label htmlFor="name">Name:</label>
//                     <input type="text" />
                    
//                     <label htmlFor="about">Upload a picture!</label>
//                     <input type="text" />
                    
//                     <select id="cars" name="cars">
//                         <option value="Human">Human</option>
//                         <option value="Alien">Alien</option>

//                     </select>
                    
//                     <button type="submit">Submit</button>
//                 </form>
//         </section>
//     )

const classes = useStyles()

const [title, setTitle] = useState(" ")
const [details, setDetails] = useState(" ")
const [titleError, setTitleError] = useState(false)
const [detailsError, setDetailsError] = useState(false)

function handleSubmit(e){
    e.preventDefault()
    setTitleError(false)
    setDetailsError(false)

    if(title == ''){
        setTitleError(true)
    }
    if(details == ''){
        setDetailsError(true)
    }

    if (title && details){
        console.log(title, details)
    }
}

return (
    <Container>
        <Typography
            variant="h6"
            color="textSecondary"
            component="h2"
            gutterBottom
        >
            Create a new note
        </Typography>

        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField 
                onChange={(e) => setTitle(e.target.value)}
                className={classes.field}
                label="Note Title"
                variant="outlined"
                fullWidth
                required
                error={titleError}
            />
            <TextField 
                onChange={(e) => setDetails(e.target.value)}
                className={classes.field}
                label="Details"
                variant="outlined"
                fullWidth
                required
                multiline
                rows={4}
                error={detailsError}
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

export default Form 

