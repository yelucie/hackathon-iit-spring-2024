async function fetchArtworks(searchQuery) {
    const baseUrl = "https://api.artic.edu/api/v1/artworks/search";
    const url = `${baseUrl}?q=${encodeURIComponent(searchQuery)}&size=10`; // Example with fixed size of 10

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch artworks:", error);
        return null;
    }
}

export { fetchArtworks };
