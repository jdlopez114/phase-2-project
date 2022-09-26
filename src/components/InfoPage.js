import { Container } from "@material-ui/core";
import PageCollection from "./PageCollection";
import Search from "./Search";

function InfoPage({ displayData, handleSearch }) {

    return (
        <Container>
            <br />
                <Search handleSearch={handleSearch}/>
            <br />
            <br />
            <br />
            <br />
                <PageCollection allData={displayData} />
        </Container>
    )
}

export default InfoPage;