# Grand Tech Solutions AI Backend

This is a Node.js backend for the Grand Tech Solutions website, providing AI-powered chat using Hugging Face's Mistral-7B model.

## How to Run Locally
1. Install dependencies:
   ```
   npm install
   ```
2. Add your Hugging Face API key to a `.env` file:
   ```
   HF_API_KEY=your_huggingface_api_key
   ```
3. Start the server:
   ```
   npm start
   ```

## How to Deploy (Render)
1. Push this folder to GitHub.
2. Create a new Web Service on [Render](https://render.com).
3. Set the start command to `npm start`.
4. Add your Hugging Face API key as an environment variable `HF_API_KEY`.

## Endpoints
- `POST /api/assistant` — Accepts `{ message: "your question" }` and returns `{ reply: "AI response" }`.

## Files
- `hf-proxy.js` — Node.js backend code
- `package.json` — Project dependencies
- `.env` — API key (not committed to Git)
- `about.html` — Frontend (optional)

## License
MIT
