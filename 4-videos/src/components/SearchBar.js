import React, { useState, useEffect } from 'react'

const SearchBar = (props) => {
    const [searchText, setSearchText] = useState('')

    const onFormSubmit = event => {
        event.preventDefault()
        props.onFormSubmit(searchText)
        
        // setTimeout(() => {
            setSearchText('')
        // }, 5000)
    }

    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onFormSubmit}>
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
