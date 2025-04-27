import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import cors from "cors"
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors())
const PORT = process.env.PORT || 8000;
const apiKey = process.env.GEMINI_API_KEY;

app.post('/generate-quiz', async (req, res) => {
  const { topic, difficulty, numQuestions } = req.body;

  if (!topic || !difficulty || !numQuestions) {
    return res.status(400).json({ error: 'Topic, difficulty level, and number of questions are required' });
  }

  if (!apiKey) {
    return res.status(500).json({ error: 'Gemini API key is not configured.' });
  }

  const apiUrl = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

  const prompt = `Generate ${numQuestions} ${difficulty} difficulty level quiz questions about the topic: ${topic} with multiple choice options labeled as A., B., C., D., and clearly indicate the correct answer at the end of each question in the format "Correct Answer: [Option Letter]".`;

  const requestBody = {
    contents: [
      {
        parts: [
          {
            text: prompt
          }
        ]
      }
    ]
  };

  try {
    const response = await axios.post(apiUrl, requestBody, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = response.data;
    const generatedText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (generatedText) {
      res.json({ generatedContent: generatedText });
    } else {
      console.error('Generated text not found in the response:', data);
      res.status(500).json({ error: 'Failed to extract generated content from the API response.' });
    }

  } catch (error) {
    console.error('Error generating content:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to generate content' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});