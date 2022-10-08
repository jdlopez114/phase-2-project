import { Container } from "@material-ui/core";
import PageCollection from "./PageCollection";

function InfoPage({ displayData }) {

    return (
        <Container>
            <div>
                <br/>
                <br/>  
                    <PageCollection displayData={ displayData } />
            </div> 
        </Container>
    )
}

export default InfoPage;