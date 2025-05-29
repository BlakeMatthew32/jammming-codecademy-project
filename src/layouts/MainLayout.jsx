import Playlist from "../components/Playlist";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";

import MockData from "../MockData/MockData";

function MainLayout() {
    return (
        <main>
            <SearchBar />
            <section>
                <SearchResults searchData={MockData}/>
                <Playlist />
            </section>
        </main>
    )
}

export default MainLayout