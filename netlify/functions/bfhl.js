// netlify/functions/bfhl.js
export async function handler(event, context) {
    if (event.httpMethod === 'POST') {
      const { data } = JSON.parse(event.body);
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
  
      return {
        statusCode: 200,
        body: JSON.stringify(response),
      };
    } else {
      return {
        statusCode: 405,
        body: JSON.stringify({ message: 'Method Not Allowed' }),
      };
    }
  }
  
  function findHighestLowercase(alphabets) {
    const lowercaseAlphabets = alphabets.filter(char => char >= 'a' && char <= 'z');
    return lowercaseAlphabets.length ? [Math.max(...lowercaseAlphabets)] : [];
  }  
