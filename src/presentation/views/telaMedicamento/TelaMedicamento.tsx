import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

//componentes
import { COLORS } from "../../theme/AppTheme";

//views models


export const Medicamento= () => {

    return (
        <View style={styles.container}>

            <View style={styles.frm}>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    container:{},
    frm:{
        width: '100%',
        height: '45%',
        backgroundColor: COLORS.lightBlue,
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 20,
    }
})