import React, { useState } from 'react';
import unsplash from './api/unsplash';

// components
import SearchBar from './components/SearchBar';

const App = () => {
    const [images, setImages] = useState([]);

    const onSearchSubmit = async (searchText) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: searchText }
        });
        
        setImages(response.data.results);
    };

    return (
        <div className="ui container" style={{ marginTop: '25px' }}>
            <SearchBar onSubmit={onSearchSubmit} />
            Found: {images.length} images
        </div>
    );
};

export default App;
