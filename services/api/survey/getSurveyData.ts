import axios from 'axios';

const BASE_URL: string = process.env.BASE_GET_SURVEY_URL || '';
const KEY_ID: string = process.env.KEY_ID_SURVEY || '';

export const fetchSurveyData = async () => {
    try {
      const res = await axios.post(
        BASE_URL,
        {
          key_id: KEY_ID,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      return res.data;
    } catch (error) {
      console.log(`Error: ${error}`);
      throw error;
    }
  };