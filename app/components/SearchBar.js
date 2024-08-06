import React, { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
        
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
            setQuery(e.target.value);
    };

    const handleSearch = () => {
            onSearch(query);
    };

    return (
            <div className={styles.searchBar}>
            <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search..."
            />
            <button onClick={handleSearch}>Search</button>
            </div>
    );
};

export default SearchBar;