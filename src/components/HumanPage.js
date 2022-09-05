import { Container } from "@material-ui/core";
import PageCollection from "./PageCollection";
import Search from "./Search"

function HumanPage({ filteredData, handleSearch }) {

    const humanData = filteredData.filter(hum =>  hum.species === 'Human')

    return (
        <Container>
            <br />
                <Search handleSearch={handleSearch}/>
            <br />
            <br />
            <br />
            <br />
                <PageCollection allData={ humanData }/>
        </Container>
    )
}

export default HumanPage;