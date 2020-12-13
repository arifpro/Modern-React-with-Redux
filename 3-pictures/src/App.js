import React from 'react';
import axios from 'axios';

// components
import SearchBar from './components/SearchBar/SearchBar';

const App = () => {
    const onSearchSubmit = async (searchText) => {
        const url = 'https://api.unsplash.com/search/photos';
        const accessKey = 'Q1YypJbPXfv2Bpc451qZOOfSqY3o_zwPo8y8GK5jeOI';
        
        const response = await axios.get(url, {
            params: { query: searchText },
            headers: { Authorization: `Client-ID ${accessKey}` }
        });
        
        console.log(response.data.results);
    };
    return (
        <div className="ui container" style={{ marginTop: '25px' }}>
            <SearchBar onSubmit={onSearchSubmit} />
        </div>
    );
};

export default App;
