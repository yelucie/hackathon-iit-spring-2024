// components/SearchResults.js

const SearchResults = ({ results }) => {
    return (
        <ul>
            {results.map((item, index) => (
                <li key={index}>{item.title}</li> // Adjust according to your data structure
            ))}
        </ul>
    );
};

export default SearchResults;
