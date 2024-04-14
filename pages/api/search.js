// pages/api/search.js

export default function handler(req, res) {
    const { q } = req.query; // Retrieve the search query from the URL query parameters

    // Example: hardcoded data array (replace with your actual data retrieval logic)
    const items = [
        { id: 1, title: 'Apple' },
        { id: 2, title: 'Banana' },
        { id: 3, title: 'Cherry' }
    ];

    // Filter items based on query
    const filteredItems = items.filter(item =>
        item.title.toLowerCase().includes(q.toLowerCase())
    );

    res.status(200).json(filteredItems); // Send back the filtered items as JSON
}
