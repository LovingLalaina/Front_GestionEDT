// pages/api/get-token.js
import axios from 'axios';
import { CONSUMER_KEY , CONSUMER_SECRET , TOKEN_ENDPOINT } from "../../src/utils/constants";

export default async function handler(req, res) {
  try {
    const response = await axios.post(
      TOKEN_ENDPOINT,
      new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: CONSUMER_KEY,
        client_secret: CONSUMER_SECRET,
      }).toString(),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ message: error.message });
  }
}
