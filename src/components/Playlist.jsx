
function SearchResults({ playlistData }) {

    const addToPlaylistHandler = ({ target }) => {
        console.log(target.value)
    }

    const playlistElements = playlistData.map(item => {
        const { track, artist, coverArt, ULI } = item
        return (
            <li key={ULI}>
                <img src={coverArt} alt={`cover art for the song ${track} By ${artist}`} />
                <div>
                    <h3>{track}</h3>
                    <h4>{artist}</h4>
                </div>
            </li>
        )
    })

    return (
        <div className="search-results-wrapper">
            <h2>Search results: </h2>
            <ul>
                {playlistElements}
            </ul>
        </div>
    )
}

export default SearchResults