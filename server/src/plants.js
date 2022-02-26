const axios = require('axios');
require('dotenv').config();

exports.retrievePlantData = async ({ base64 }) => {
  const base64file = [base64];

  const data = {
    api_key: process.env.PLANTID_API_KEY,
    images: base64file,
    /* modifiers docs: https://github.com/flowerchecker/Plant-id-API/wiki/Modifiers */
    modifiers: ["crops_fast", "similar_images", "health_all", "disease_similar_images"],
    plant_language: "en",
    /* plant details docs: https://github.com/flowerchecker/Plant-id-API/wiki/Plant-details */
    plant_details: [
      "common_names",
      "url",
      "name_authority",
      "wiki_description",
      "taxonomy",
      "synonyms"],
    /* disease details docs: https://github.com/flowerchecker/Plant-id-API/wiki/Disease-details */
    disease_details: ["common_names", "url", "description"]
  };

  async function plantIdAPI() {
    try {
      const res = await axios.post('https://api.plant.id/v2/identify', data);
      if (res.status == 200) {
        console.log(res.data);
        return res.data;
      }
      return null;

    } catch (error) {
      console.error('Error: ', error)
      throw error;
    }
  }

  return await plantIdAPI();

}