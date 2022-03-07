import axios from 'axios';

// Generate Schedule action handler
// Home IP: 10.0.0.144
export const retrievePlantData = async (dataObj) => {
  return axios
    .post("http://10.36.99.162:3000/api/plants", dataObj)
    .then(res => {
      const plantData = res.data;
      return plantData;
    })
    .catch(err =>
      console.error(err)
    );
};