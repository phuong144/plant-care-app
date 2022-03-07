import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { retrievePlantData } from '../services/plants';

export default function PlantInfo({ route, navigation }) {
  const [plantData, setPlantData] = useState({});
  const { base64 } = route.params;

  const getPlantData = async () => {
    const dataObj = {
      "base64": base64,
    }
    const data = await retrievePlantData(dataObj);
    console.log(data);
    setPlantData(data);
  }

  useEffect(async () => {
    getPlantData();
  }, [])

  return (
    <View>

      <Text>
        {JSON.stringify(plantData)}
      </Text>


    </View>
  )
}