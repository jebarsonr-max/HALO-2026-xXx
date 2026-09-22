/**
 * Server Entrypoint
 */
const app = require('./server');
const config = require('./config/env');

const PORT = config.port || 5000;

app.listen(PORT, () => {
  console.log(`[Aevix AI] Backend server running on http://localhost:${PORT}`);
  console.log(`[Aevix AI] AI Mode: ${config.isGroqConfigured ? `Groq Cloud (${config.groq.model})` : 'Semantic NLP Engine (Offline/Local)'}`);
});
