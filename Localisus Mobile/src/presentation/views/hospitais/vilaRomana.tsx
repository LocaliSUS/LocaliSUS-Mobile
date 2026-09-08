import { View, StyleSheet, FlatList, Text } from "react-native";
import { BotaoInfoHospital, InfoHospitalScreen, } from "../../components/InfoHospital";
import { ComponenteCard } from "../../components/Card";

export const VilaRomanaInfoScreen = () => {

    return (
        <>
            <InfoHospitalScreen />
        </>

    )

}

const styles = StyleSheet.create({
    textosTelaInfoHospital: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 325, 
    },

})