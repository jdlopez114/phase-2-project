import { Container } from "@material-ui/core";
import Search from "./Search"
import PageCollection from "./PageCollection";

function MainPage({ displayData, handleSearch }){

    return (
        <Container>
            <br />
                <Search handleSearch={ handleSearch } />
            <br />
            <br />
            <br />
                <PageCollection displayData={ displayData }/>
        </Container>
    )
}

export default MainPage; 