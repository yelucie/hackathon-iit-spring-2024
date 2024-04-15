import google from './lib/translator/google.js';

async function translateText() {
    try {
        const text = "Hello, world!"; // Text to be translated
        const fromLang = "en"; // Source language code (English)
        const targetLang = "fr"; // Target language code (French)

        // Request translation from English to French
        const response = await google.requestTranslate(text, fromLang, targetLang);

        // Process and output the translation result
        const wrappedResponse = google.wrapResponse(response, fromLang, targetLang);
        console.log("Translated Text:", wrappedResponse.translatedText);
        console.log("Detected Language of Original Text:", wrappedResponse.detectedLang);

    } catch (error) {
        console.error("Translation Error:", error);
    }
}

// Run the translation function
translateText();
