const express = require('express');
const app = express();
app.use(express.json());

function findHighestLowercase(alphabets) {
  const lowercaseAlphabets = alphabets.filter(char => char >= 'a' && char <= 'z');
  return lowercaseAlphabets.length ? [Math.max(...lowercaseAlphabets)] : [];
}

app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

// GET endpoint for /bfhl
app.get('/bfhl', (req, res) => {
  res.json({ operation_code: 1 });
});

// POST endpoint for /bfhl
app.post('/bfhl', (req, res) => {
  const { data } = req.body;
  const numbers = data.filter(item => !isNaN(item));
  const alphabets = data.filter(item => isNaN(item));
  const highestLowercase = findHighestLowercase(alphabets);

  const response = {
    is_success: true,
    user_id: "john_doe_17091999",  
    email: "john@xyz.com",         
    roll_number: "ABCD123",         
    numbers,
    alphabets,
    highest_lowercase_alphabet: highestLowercase,
  };

  res.json(response);
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
