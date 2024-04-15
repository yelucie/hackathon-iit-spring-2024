import Link from 'next/link';

const SearchResults = ({ results }) => {
    return (
        <ul>
            {results.map((item) => (
                <li key={item.id}>
                    <Link href={`/artwork/${item.id}`}>
                        <a>
                            <h2>{item.title}</h2>
                            <p>{item.thumbnail.alt_text}</p>
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default SearchResults;
