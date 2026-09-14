import { Stack } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

const AuthLayout = () => {
    return (
        <Stack>
            <Stack.Screen name='Login' />
            <Stack.Screen name='CadastroSus' />
            <Stack.Screen name='CodigoVerificacao' />
            <Stack.Screen name='SenhaEsquecidaService' />
        </Stack>
    )
}

export default AuthLayout
