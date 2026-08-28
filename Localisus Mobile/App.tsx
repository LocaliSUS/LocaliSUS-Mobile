import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Inicio } from "./src/presentation/views/inicio/Inicio";
import { MedicamentoScreen } from "./src/presentation/views/telaMedicamento/TelaMedicamento"
import { SenhaEsquecidaScreen } from "./src/presentation/views/senhaEsquecida/SenhaEsquecida";
import { LoginScreen } from "./src/presentation/views/login/Login";
import { CadastroSusScreen } from "./src/presentation/views/cadastro/CadastroSus";
import { TelaInicio } from "./src/assets/componentestelas/inicio/ComponenteInicio";
import { FONTS } from "./src/assets/fontes/Fontes";
import { useFonts } from "expo-font";
import { HomeScreen } from "./src/presentation/views/home/HomeScreen";
import { CodigoScreen } from "./src/presentation/views/codigo/Codigo";
import { MapaSus } from "./src/presentation/views/Localização/MapaSus";
import { VilaRomanaInfoScreen } from "./src/presentation/views/hospitais/vilaRomana";

export type RootStackParamList = {
  LocalizacaoScreen: undefined;
  Inicio: undefined;
  Tela: undefined;
  PasswordForget: undefined;
  VilaRomanaScreen: undefined;
  CodigoScreen: undefined;
  HomeScreen: undefined;
  MedicamentoScreen: undefined;
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

        <Stack.Screen name="Tela" component={TelaInicio}/>

        <Stack.Screen name="MedicamentoScreen" component={MedicamentoScreen}/>
        
        <Stack.Screen name="PasswordForget" component={SenhaEsquecidaScreen} />

        <Stack.Screen name="CodigoScreen" component={CodigoScreen} />

        <Stack.Screen name="LoginScreen" component={LoginScreen} />

        <Stack.Screen name="LocalizacaoScreen" component={MapaSus}/>

        <Stack.Screen name="VilaRomanaScreen" component={VilaRomanaInfoScreen}/>

        <Stack.Screen name="CadastroSusScreen" component={CadastroSusScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
