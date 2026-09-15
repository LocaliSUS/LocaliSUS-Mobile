import { StyleSheet } from 'react-native'
import { Tabs } from 'expo-router'

const DashboardLayout = () => {
    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen name='HomeScreen' options={{ title: 'Home' }} />
            <Tabs.Screen name='TelaMedicamento' options={{ title: 'Medicamentos' }} />
            <Tabs.Screen name='MapaSus' options={{ title: 'Mapa' }} />
            <Tabs.Screen name='LembretesScreen' options={{ title: 'Lembretes' }} />
        </Tabs>
    )
}

export default DashboardLayout

const styles = StyleSheet.create({})