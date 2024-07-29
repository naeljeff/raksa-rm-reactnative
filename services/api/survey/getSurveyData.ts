import axios from 'axios';

// const BASE_URL: string = process.env.BASE_GET_SURVEY_URL || '';
// const KEY_ID: string = process.env.KEY_ID_SURVEY || '';
const BASE_URL: string = 'http://10.0.2.2:80/api/getIncomingJob.php'
const KEY_ID: string = 'e105ecd81816a8be2ad06d4f08824078bac10a59c848bf2b'

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