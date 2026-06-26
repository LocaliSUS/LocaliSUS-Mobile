import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Inicio } from "./src/presentation/views/inicio/Inicio";
import { SenhaEsquecidaScreen } from "./src/presentation/views/senhaEsquecida/SenhaEsquecida";
import { LoginScreen } from "./src/presentation/views/login/Login";
import { CadastroSusScreen } from "./src/presentation/views/cadastro/CadastroSus";
import { FONTS } from "./src/assets/fontes/Fontes";
import { useFonts } from "expo-font";
import { HomeScreen } from "./src/presentation/views/home/HomeScreen";
import { CodigoScreen } from "./src/presentation/views/codigo/Codigo";

export type RootStackParamList = {
  Inicio: undefined;
  PasswordForget: undefined;
  CodigoScreen: undefined;
  HomeScreen: undefined;
  LoginScreen: undefined;
  CadastroSusScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [fontsLoaded] = useFonts(FONTS);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator id={undefined} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Inicio" component={Inicio} />

        <Stack.Screen name="PasswordForget" component={SenhaEsquecidaScreen} />

        <Stack.Screen name="CodigoScreen" component={CodigoScreen} />

        <Stack.Screen name="LoginScreen" component={LoginScreen} />

        <Stack.Screen name="CadastroSusScreen" component={CadastroSusScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
