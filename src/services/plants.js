import axios from 'axios';

// Generate Schedule action handler
export const retrievePlantData = dataObj => {
  // console.log(dataObj);
  axios
    .post("http://10.0.0.144:3000/api/plants", dataObj)
    .then(res => {
      const plantData = res.data;
      console.log(plantData);
      return plantData;
    })
    .catch(err =>
      console.error(err)
    );
};