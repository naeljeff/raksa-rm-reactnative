import axios from 'axios';

const BASE_URL: string = process.env.BASE_LOGIN_URL || '';
const KEY_ID: string = process.env.KEY_ID_LOGIN || '';

export const validateUser = async (username: string, password: string) => {
  try {
    const formData = new FormData();
    formData.append('key_id', KEY_ID);
    formData.append('input_user_name', username);
    formData.append('input_password', password);

    const res = await axios.post(BASE_URL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return res.data;
  } catch (error) {
    console.log(`Error: ${error}`);
    throw error;
  }
};
