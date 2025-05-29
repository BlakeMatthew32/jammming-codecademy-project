import { useState } from "react";
import Playlist from "../components/Playlist";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";

import MockData from "../MockData/MockData";

function MainLayout() {

    const [searchResults, setSearchResults] = useState([])
    const [playlistTracks, setPlaylistTracks] = useState([])

    const onSearchHandler = (searchInput) => {
        console.log(searchInput)
        //fetch in here from spotify API
        setSearchResults(MockData)
    }

    const onAddToPlaylistHandler = (trackToAdd) => {
        console.log(trackToAdd)
        setPlaylistTracks(prevTracks => {
            //check its not already in the playlist first
            const trackIncluded = prevTracks?.find(track => track.ULI === trackToAdd)
            if(!trackIncluded) {
                const trackData = searchResults.filter(track => track.ULI === trackToAdd)[0]
                console.log(trackData)
                return [...prevTracks, trackData]
            }
            return [...prevTracks]
        })

    }   

    return (
        <main>
            <SearchBar onSearch={onSearchHandler}/>
            <section>
                <SearchResults 
                    onAddToPlaylist={onAddToPlaylistHandler} 
                    searchData={searchResults}
                />
                <Playlist 
                    playlistTracks={playlistTracks}
                />
            </section>
        </main>
    )
}

export default MainLayout