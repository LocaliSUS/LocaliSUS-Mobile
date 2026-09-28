import { Image, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';

import logoImg from '../assets/img/LocaliSUS-Logo-Fundo.png'; 

function LogoTitle() {
  return (
    <Image
      style={styles.logo}
      source={logoImg}
      resizeMode="contain"
    />
  );
}

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index" 
        options={{
          headerTitle: () => <LogoTitle />,
          headerTitleAlign: 'center', 
        }}
      />
    </Stack>
  );
}


const styles = StyleSheet.create({
  logo: {
    width: 120,
    height: 40,
  },
});