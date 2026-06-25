import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MapaSus } from './src/presentation/views/Localização/MapaSus';

export type RootStackParamList = {
  MapaSus: undefined;

};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        id="MainStack"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="MapaSus"
          component={MapaSus}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}