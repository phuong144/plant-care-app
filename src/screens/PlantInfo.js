import React, { useEffect, useState } from 'react';
import { Text, View, Image, StyleSheet, Linking } from 'react-native';
import { retrievePlantData } from '../services/plants';

export default function PlantInfo({ route, navigation }) {
  const [plantData, setPlantData] = useState({});
  const { base64 } = route.params;

  const getPlantData = async () => {
    const dataObj = {
      "base64": base64,
    }
    const data = await retrievePlantData(dataObj);
    setPlantData(data);
  }

  useEffect(() => {
    getPlantData();
  }, [])

  return (
    <View>
      {Object.keys(plantData).length == 0 ?
        <Text>Loading...</Text> :
        <View>
          <Text style={styles.plantName}>
            Plant name: {plantData.plantData.suggestions[0]['plant_name']}
          </Text>
          <Image
            style={styles.image}
            source={{
              uri: plantData.plantData.images[0].url,
            }}
          />
          <Text style={styles.description}>
            Plant Description: {plantData.plantData.suggestions[0]['plant_details']['wiki_description'].value.split('.')[0]}
          </Text>

          <Text style={styles.url} onPress={() => Linking.openURL(plantData.url)}>
            Plant Care Guide Link
          </Text>
        </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  plantName: {
    textAlign: 'center',
    fontSize: 30,
    margin: 10
  },

  image: {
    width: 250,
    height: 250,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10
  },

  description: {
    margin: 10
  },

  url: {
    color: 'green',
    backgroundColor: 'transparent',
    margin: 10
  }
});