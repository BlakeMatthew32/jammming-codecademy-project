import { useState } from "react"

function SearchBar({onSearch}) {
    const [searchInput, setSearchInput] = useState('')

    const handleSearch = (event) => {
        event.preventDefault()
        onSearch(searchInput)
        setSearchInput('')
    }

    return (
        <form onSubmit={handleSearch} className="search">
            <input name="search" onChange={({target}) => setSearchInput(target.value)} value={searchInput} />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar