import axios from 'axios';

export default async function handler(req, res) {
    try {
        const response = await axios.get('https://xxx.com/get');
        const data = response.data;
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

