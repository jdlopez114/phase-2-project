import { Container } from "@material-ui/core";
import Search from "./Search"
import PageCollection from "./PageCollection";

function MainPage({ filteredData, handleSearch }){

    return (
        <Container>
            <br />
                <Search handleSearch={handleSearch}/>
            <br />
                <PageCollection allData={ filteredData }/>
        </Container>
    )
}

export default MainPage; 