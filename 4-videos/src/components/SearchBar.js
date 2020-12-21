import React, { useState } from 'react'

const SearchBar = () => {
    const [searchText, setSearchText] = useState('')

    const onSubmitForm = event => {
        event.preventDefault()
    }

    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onSubmitForm}>
                <div className="field">
                    <label>Video Search</label>
                    <input
                        type="text"
                        value={searchText}
                        onChange={e => setSearchText(e.target.value)}
                    />
                </div>
            </form>            
        </div>
    )
}

export default SearchBar
