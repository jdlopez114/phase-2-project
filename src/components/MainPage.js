import { Container } from "@material-ui/core";
import Search from "./Search"
import PageCollection from "./PageCollection";

function MainPage({ allData, handleSearch }){

    return (
        <Container>
            <br />
                <Search handleSearch={ handleSearch } />
            <br />
            <br />
            <br />
                <PageCollection allData={ allData }/>
        </Container>
    )
}

export default MainPage; 