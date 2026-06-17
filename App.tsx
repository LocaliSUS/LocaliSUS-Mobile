import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CadastroSusScreen } from './src/cadastro/CadastroSus';

export type RootStackParamList = {
    CadastroSusScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator id="root" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="CadastroSusScreen" component={CadastroSusScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;