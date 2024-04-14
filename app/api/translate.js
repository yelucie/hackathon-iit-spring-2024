import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const apiKey = process.env.OPENAI_KEY;
console.log(process.env);

const summarizeText = async (text) => {
    console.log(apiKey);
    try {
        const response = await axios.post('https://api.openai.com/v1/engines/turbo-3.5/completions', {
            prompt: text,
            temperature: 0.5
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
        });
        return response;
    } catch (error) {
        console.error('Error summarizing text:', error.response ? error.response.data : error.message);
        return null;
    }
};

module.exports = { summarizeText };
