import { useState } from "react"

function SearchBar() {
    const [searchInput, setSearchInput] = useState('')

    return (
        <form className="search">
            <input name="search" onChange={({target}) => setSearchInput(target.value)} value={searchInput} />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar