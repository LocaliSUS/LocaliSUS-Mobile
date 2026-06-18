import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Inicio } from "./src/presentation/views/inicio/Inicio";
import { LoginScreen } from "./src/presentation/views/login/Login";
import {CadastroSusScreen} from "./src/presentation/views/cadastro/CadastroSus";

export type RootStackParamList = {
  Inicio: undefined;
  LoginScreen: undefined;
  CadastroSusScreen: undefined;
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
          name="Inicio"
          component={Inicio}
        />

        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
        />

        <Stack.Screen
          name="CadastroSusScreen"
          component={CadastroSusScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}