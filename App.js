import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CameraScreen from './src/screens/Camera';
import PlantInfo from './src/screens/PlantInfo';
const Stack = createNativeStackNavigator();
import { LogBox } from 'react-native';

export default function App() {
  LogBox.ignoreAllLogs();//Hide all warning notifications on front-end
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Camera">
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="PlantInfo" component={PlantInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}