import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Inicio } from "./source/Presentation/views/Inicio/Inicio";
import { LoginScreen } from "./source/Presentation/views/login/Login";

export type RootStackParamList = {
  Inicio: undefined;
  LoginScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        id={undefined}
        screenOptions={{ headerShown: false }}
      >

        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
        />

        <Stack.Screen
          name="Inicio"
          component={Inicio}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}