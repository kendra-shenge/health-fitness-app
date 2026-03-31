const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/exercises', async (req, res) => {
  const muscle = req.query.muscle || 'chest';
  try {
    const response = await axios.get(
      `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${muscle}`,
      {
        params: { limit: 20 },
        headers: {
          'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      }
    );
    res.json({ success: true, data: response.data });
  } catch (err) {
    console.log('ERROR STATUS:', err.response?.status);
    console.log('ERROR DATA:', JSON.stringify(err.response?.data));
    res.status(500).json({ 
      success: false, 
      message: err.response?.data?.message || err.message 
    });
  }
});

app.get('/api/nutrition', async (req, res) => {
  const food = req.query.food || 'apple';
  try {
    const response = await axios.get(
      'https://api.api-ninjas.com/v1/nutrition',
      {
        params: { query: food },
        headers: { 'X-Api-Key': process.env.NINJA_API_KEY }
      }
    );
    res.json({ success: true, data: response.data });
  } catch (err) {
    console.log('ERROR STATUS:', err.response?.status);
    console.log('ERROR DATA:', JSON.stringify(err.response?.data));
    res.status(500).json({ 
      success: false, 
      message: err.response?.data?.message || err.message 
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));