import { Stack } from 'expo-router'

const RootLayout = () => {
    return (
        <>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name='(auth)' />
                <Stack.Screen name='index' />
            </Stack>
        </>
    )
}

export default RootLayout