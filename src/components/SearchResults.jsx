
function SearchResults({ searchData, onAddToPlaylist }) {

    const addToPlaylistHandler = ({ target }) => {
        onAddToPlaylist(target.value)
    }

    const searchDataElements = searchData?.map(item => {
        const { track, artist, album, coverArt, ULI } = item
        return (
            <li key={ULI}>
                <img src={coverArt} alt={`cover art for the song ${track} By ${artist}`} />
                <div>
                    <h3>{track}</h3>
                    <h4>{artist}</h4>
                    <h4>{album}</h4>
                </div>
                <button onClick={addToPlaylistHandler} value={ULI}>+</button>
            </li>
        )
    })

    return (
        <div className="search-results-wrapper">
            <h2>Search results: </h2>
            <ul>
                {searchDataElements}
            </ul>
        </div>
    )
}

export default SearchResults