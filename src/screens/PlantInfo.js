import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Linking, Image } from 'react-native';
import { retrievePlantData } from '../services/plants';
import { CacheManager } from "react-native-expo-image-cache";

export default function PlantInfo({ route, navigation }) {
  const [plantData, setPlantData] = useState({});
  const [cachePlantImg, setCachePlantImg] = useState("");
  const { base64 } = route.params;

  const getPlantData = async () => {
    const dataObj = {
      "base64": base64,
    }
    const data = await retrievePlantData(dataObj);
    if (data == null) {
      alert('Please retake photo');
      navigation.navigate("Camera")
      return;
    }
    const path = await CacheManager.get(plantData.plantData.images[0].url).getPath();
    setPlantData(data);
    setCachePlantImg(path);
  }

  useEffect(() => {
    let isApiSubscribed = true;

    if (isApiSubscribed) {
      getPlantData();
    }

    return () => {
      isApiSubscribed = false;
    }
  }, [])

  return (
    <View style={{ flex: 1 }}>
      {Object.keys(plantData).length == 0 ?
        <View style={styles.loading}>
          <Image
            style={styles.image}
            source={require('../../assets/Plant.png')}
          />
          <Text style={{ textAlign: 'center' }}>Loading...</Text>
        </View>
        :
        <View>
          <Text style={styles.plantName} testID='plant-name'>
            {plantData.plantData.suggestions[0]['plant_name']}
          </Text>
          <Image
            style={styles.image}
            source={{
              uri: cachePlantImg
            }}
          />
          <Text style={styles.description} testID='plant-description'>
            {plantData.plantData.suggestions[0]['plant_details']['wiki_description'].value.split('.')[0]}
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
    borderRadius: 50,
    marginLeft: 'auto',
    marginRight: 'auto',

  },
  description: {
    margin: 10
  },
  url: {
    color: 'green',
    backgroundColor: 'transparent',
    margin: 10
  },
  loading: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    marginBottom: 50

  }
});