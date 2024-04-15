
// pages/search.js
'use client'
import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults';
import { useState } from 'react';

export default function SearchPage() {
    const [results, setResults] = useState([]);

    const handleSearch = async (query : any) => {
        const externalApiUrl = `https://api.artic.edu/api/v1/artworks/search?q=${encodeURIComponent(query)}`;
        const res = await fetch(externalApiUrl);
        const data = await res.json();
        setResults(data.data); // Adjust this line based on the actual structure of the response
    };

    return (
        <div>
            <SearchForm onSearch={handleSearch} />
            <SearchResults results={results} />
        </div>
    );
}
