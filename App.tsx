import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Inicio } from "./src/presentation/views/inicio/Inicio";
import { LoginScreen } from "./src/presentation/views/login/Login";
import {CadastroSusScreen} from "./src/presentation/views/cadastro/CadastroSus";
import {SenhaEsquecidaScreen} from "./src/presentation/views/senhaEsquecida/SenhaEsquecida"


export type RootStackParamList = {
  InicioScreen: undefined;
  LoginScreen: undefined;
  CadastroSusScreen: undefined;
  SenhaEsquecidaScreen:undefined;
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
          name="InicioScreen"
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

        <Stack.Screen
        name="SenhaEsquecidaScreen"
        component={SenhaEsquecidaScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}