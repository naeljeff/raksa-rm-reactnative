import axios from 'axios';

// const BASE_URL = process.env.BASE_LOGIN_URL;
const BASE_URL =
  'https://www.raksa-service.com/mks_work_to_b/index.php/mks_api_person_name_mst/select_rm_login';
const KEY_ID = 'upvPMIkYBQOpKgRdEcJc';

export const validateUser = async (username: string, password: string) => {
  try {
    const formData = new FormData();
    formData.append('key_id', KEY_ID);
    formData.append('user_name', username);
    formData.append('passw', password);

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
