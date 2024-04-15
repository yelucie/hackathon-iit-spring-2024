// Import the necessary hooks from React
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
// Import your custom translation module
import google from '../../lib/translator/google';

const ArtworkDetail = ({ artwork, config, info }) => {
    const router = useRouter();
    const [language, setLanguage] = useState('en'); // Default to English
    const [translatedDescription, setTranslatedDescription] = useState(artwork.description);

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    const handleLanguageChange = async (newLanguage) => {
        setLanguage(newLanguage);
        if (newLanguage === 'en') {
            setTranslatedDescription(artwork.description);
        } else {
            await translateDescription(artwork.description, 'en', newLanguage);
        }
    };

    const translateDescription = async (text, fromLang, targetLang) => {
        try {
            const response = await google.requestTranslate(text, fromLang, targetLang);
            const wrappedResponse = google.wrapResponse(response, fromLang, targetLang);
            setTranslatedDescription(wrappedResponse.translatedText);
        } catch (error) {
            console.error("Translation Error:", error);
            setTranslatedDescription("Translation failed. Please try again later.");
        }
    };

    return (
        <div>
            <Head>
                <title>{artwork.title} | Art Institute</title>
                <meta name="description" content={`View details about ${artwork.title}`} />
            </Head>
            <h1>{artwork.title}</h1>
            <img src={config.iiif_url + '/' + artwork.image_id + '/full/843,/0/default.jpg'} alt={artwork.thumbnail.alt_text} style={{ width: '100%', height: 'auto' }} />
            <select value={language} onChange={(e) => handleLanguageChange(e.target.value)}>
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="es">Spanish</option>
                <option value="de">German</option>
                <option value="zh">Chinese</option>
            </select>
            <div dangerouslySetInnerHTML={{ __html: translatedDescription }}></div>
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
        },
    };
}

export default ArtworkDetail;
