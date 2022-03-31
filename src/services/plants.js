import axios from 'axios';

// Generate Schedule action handler
// Home IP: 10.0.0.144
export const retrievePlantData = async (dataObj) => {
  return axios
    .post("http://10.0.0.144:3000/api/plants", dataObj,
      {
        maxmaxContentLength: Infinity,
        maxBodyLength: Infinity,
      })
    .then(res => {
      const plantData = res.data;
      return plantData;
    })
    .catch(err => {
      console.error(err);
      return null;
    })
};