import Link from 'next/link';
const SearchResults = ({ results }) => {
    return (
        <>
            <style jsx>{`
                ul {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 20px;
                    justify-content: center;
                }
                li {
                    border: 1px solid #e1e1e1;
                    border-radius: 10px;
                    overflow: hidden;
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                    width: calc(33.333% - 20px); /* Three items per row with gap */
                }
                li:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                a {
                    color: inherit;
                    text-decoration: none;
                    display: block;
                    padding: 16px;
                }
                h2 {
                    margin: 0 0 10px 0;
                    color: #333;
                    font-size: 1.2rem;
                }
                p {
                    margin: 0;
                    color: #666;
                    font-size: 1rem;
                }
                @media (max-width: 768px) {
                    li {
                        width: calc(50% - 20px); /* Two items per row on smaller screens */
                    }
                }
                @media (max-width: 480px) {
                    li {
                        width: 100%; /* Single column view on very small screens */
                    }
                }
            `}</style>
            <ul>
                {results.map((item) => (
                    <li key={item.id}>
                        <Link href={`/artwork/${item.id}`}>
                                <h2>{item.title}</h2>
                        </Link>
                        <p>{item.thumbnail.alt_text}</p>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default SearchResults;
