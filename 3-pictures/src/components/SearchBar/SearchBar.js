import React, { useState } from 'react';

// styles
import useStyles from './stylesSearchBar';

const SearchBar = () => {
    const styles = useStyles();
    const [searchText, setSearchText] = useState('');

    const onFormSubmit = (event) => {
        event.preventDefault();

        console.log(searchText);
    };

    return (
        <div className="ui segment">
            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="field">
                    <label>Image Search</label>
                    <input
                        value={searchText}
                        onChange={e => setSearchText(e.target.value)}
                    />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
