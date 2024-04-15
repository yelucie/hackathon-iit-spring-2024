'use client'

import React, { useState, useEffect } from 'react';
import { summarizeText } from '../pages/api/translate';

const Description = ({ text }) => {
    const [summary, setSummary] = useState('');

    summarizeText(text).then((response) => {
        if (response) {
            setSummary(response.choices[0].message.content);
        }
    });

    return (
        <div>
            <p>Summarized text: {summary}</p>
        </div>
    );
};

export default Description;