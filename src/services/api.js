import axios from 'axios';

const BASE_URL = 'https://api.puter.com/v2'; // Replace with actual base URL.

export const fetchModelResponse = async (input, model) => {
  const endpoint = model === 'model1' 
    ? 'claude-sonnet-4' 
    : 'default'; // Modify model names if needed.

  const response = await axios.post(`${BASE_URL}/ai/chat`, {
    prompt: input,
    model: endpoint,
    stream: true, // Ensure to match the API requirements.
  });

  return response.data;
};
