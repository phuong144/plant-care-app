import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CameraScreen from './src/screens/Camera';
import PlantInfo from './src/screens/PlantInfo';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Camera">
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="PlantInfo" component={PlantInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}