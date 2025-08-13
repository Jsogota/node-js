
const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();
const app = express();
const PORT = 3000;

const HF_API_KEY = process.env.HF_API_KEY;
const HF_MODEL = 'mistralai/Mistral-7B-Instruct-v0.2';
const HF_URL = `https://api-inference.huggingface.co/models/${HF_MODEL}`;

app.use(express.json());

app.post('/api/assistant', async (req, res) => {
  try {
    const userText = req.body.message;
    const payload = {
      inputs: userText,
      parameters: { max_new_tokens: 256, return_full_text: false }
    };
    const response = await fetch(HF_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${HF_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    let reply = 'Sorry, I could not get a reply.';
    if (Array.isArray(data) && data[0] && data[0].generated_text) {
      reply = data[0].generated_text;
    }
    res.json({ reply });
  } catch (err) {
    res.status(500).json({ reply: 'Error contacting Hugging Face API.' });
  }
});

app.listen(PORT, () => {
  console.log(`Hugging Face proxy server running on http://localhost:${PORT}`);
});
