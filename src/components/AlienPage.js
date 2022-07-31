import { Container } from "@material-ui/core";
import Search from "./Search"
import PageCollection from "./PageCollection";


function AlienPage({ filteredData, handleSearch }) {

    const alienData = filteredData.filter(hum =>  hum.species === 'Alien')

    return (
        <Container>
            <br />
                <Search handleSearch={handleSearch}/>
            <br />
                <PageCollection allData={ alienData }/>
        </Container>
    )
}

export default AlienPage