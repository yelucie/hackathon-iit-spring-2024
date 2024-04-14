// components/SearchForm.js
import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(query); // Lift the state up to the parent components
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for items..."
                required
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchForm;
