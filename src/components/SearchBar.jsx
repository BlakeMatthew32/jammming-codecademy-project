import { useState } from "react"

function SearchBar() {
    const [searchInput, setSearchInput] = useState('')

    return (
        <div>
            <input name="search" onChange={({target}) => setSearchInput(target.value)} value={searchInput} />
        </div>
    )
}

export default SearchBar