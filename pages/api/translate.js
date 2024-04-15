import OpenAI from "openai";
import dotenv from 'dotenv';

dotenv.config();
const openai = new OpenAI({ apiKey: process.env.OPENAI_KEY, dangerouslyAllowBrowser: true});

async function summarizeText(text) {
    try {
        const completion = await openai.chat.completions.create({
            messages: [
                { role: "system", content: "You are a helpful translator." },
                { role: "user", content: text }
            ],
            model: "gpt-3.5-turbo",
            max_tokens: 100,
            temperature: 0.5,
            stream: true,
          });
        
          console.log(completion.choices[0]);
          return completion;
    } catch (error) {
        console.error('Error summarizing text:', error);
        return null;
    }
}

module.exports = { summarizeText };
