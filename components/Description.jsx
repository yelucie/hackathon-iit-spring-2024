'use client'

import React, { useState, useEffect } from 'react';
import { summarizeText } from '../app/api/translate';

const Description = ({ text }) => {
    const [summary, setSummary] = useState('');

    useEffect(() => {
        const fetchSummary = async () => {
            const summarizedText = await summarizeText(text);
            if (summarizedText) {
                console.log(summarizedText);
                setSummary(summarizedText.data.choices[0].text);
            } else {
                setSummary('Error summarizing text');
            }
        };
        fetchSummary();
    }, [text]);

    return (
        <div>
            <p>Summarized text: {summary}</p>
        </div>
    );
};

export default Description;