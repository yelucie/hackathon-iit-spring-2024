// pages/artwork/[id].js

import { useRouter } from 'next/router';
import Head from 'next/head'; // For setting the page title and metadata

const ArtworkDetail = ({ artwork, config, info }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    // URL for high-resolution image via IIIF
    const imageUrl = `${config.iiif_url}/${artwork.image_id}/full/843,/0/default.jpg`;

    return (
        <div>
            <Head>
                <title>{artwork.title} | Art Institute</title>
                <meta name="description" content={`View details about ${artwork.title}`} />
            </Head>
            <h1>{artwork.title}</h1>
            <img src={imageUrl} alt={artwork.thumbnail.alt_text} style={{ width: '100%', height: 'auto' }} />
            <p>{artwork.alt_titles || "No alternate titles"}</p>
            <p>{artwork.date_display || "Date not available"}</p>
            <p>{artwork.artist_display || "Artist(s) not listed"}</p>
            <p>{artwork.medium_display || "Medium not specified"}</p>
            <p>{artwork.dimensions || "Dimensions not available"}</p>
            <p>License: <a href={info.license_links[0]} target="_blank" rel="noopener noreferrer">{info.license_text}</a></p>
            <p>More information: <a href={artwork.api_link} target="_blank" rel="noopener noreferrer">API Link</a></p>
            <p>Visit on <a href={config.website_url} target="_blank" rel="noopener noreferrer">Art Institute Website</a></p>
            <div dangerouslySetInnerHTML={{ __html: artwork.description }}></div> {/* Display the HTML formatted description */}
        </div>
    );
};

export async function getServerSideProps(context) {
    const { id } = context.params;
    const res = await fetch(`https://api.artic.edu/api/v1/artworks/${id}`);
    const json = await res.json();

    return {
        props: {
            artwork: json.data,
            config: json.config,
            info: json.info
        }, // will be passed to the page component as props
    };
}

export default ArtworkDetail;
