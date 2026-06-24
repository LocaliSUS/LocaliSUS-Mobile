import React from "react";
import { View } from "react-native";
import { Cards } from "../../components/Card";
import { StyleSheet, Text } from "react-native";
import { styles } from './HomeScreenTheme'

export const HomeScreen = () => {
    return(
        <>
        <View style={styles.visualizacaoTela}>
            <Cards></Cards>
            <Text style={styles.txtTelaHome}> Unidades Próximas
            </Text>
        </View>
        </>
    )
}

